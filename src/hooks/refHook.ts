import { shallowRef, triggerRef, ref, toRef, toRefs, reactive } from 'vue';

const refHooks = () => {
  const count = ref(0);
  const onAddCount = () => {
    count.value++;
  };
  const onDeleCount = () => {
    count.value--;
  };
  /**
   * ref 底层是用过reactive
   * ref -> reactive({
   *  value:值
   * })
   * 所以shallowRef，给对象时，第一层是value,num是第二层，所以不能响应式
   */
  const shallowCount = shallowRef({
    num: 0,
  });
  const onAddShallowCount = () => {
    shallowCount.value.num++;
    console.log('shallowCount---->>%o', shallowCount);
    //使用triggerRef，会主动更新视图，现在vue有triggerRef,没有triggerReactive
    // triggerRef(shallowCount);
  };
  const onDeleShallowCount = () => {
    shallowCount.value.num--;
  };
  return {
    count,
    shallowCount,
    onAddCount,
    onDeleCount,
    onAddShallowCount,
    onDeleShallowCount,
  };
};
const torefHooks = () => {
  /**
   * toRef的特点，在源响应式对象上，新建一个ref，保持对源属性的响应式链接
   */
  const obj = {
    name: 123,
    sub: {
      name: 456,
    },
  };
  const state = reactive(obj);
  const toRefObj = toRef(state, 'name');
  const toRefsObj = toRefs(state);
  const onChangeRef = () => {
    toRefObj.value = 456;
    console.log('toRefObj---->>%o', toRefsObj);
  };
  return {
    toRefObj,
    toRefsObj,
    state,
    onChangeRef,
  };
};
export { refHooks, torefHooks };
