import { defineComponent, ref, shallowRef, triggerRef } from 'vue';
import {Row,Col,Button,Input} from 'ant-design-vue'
import './style.less'

const RefDemo = defineComponent({
  components:{
    Row,
    Col,
    Button,
    Input
  },
  setup(){
    const count = ref(0)
    const onAddCount = ()=>{
      count.value++
    }
    const onDeleCount = ()=>{
      count.value--
    }
    /**
     * ref 底层是用过reactive
     * ref -> reactive({
     *  value:值
     * })
     * 所以shallowRef，给对象时，第一层是value,num是第二层，所以不能响应式
     */
    const shallowCount = shallowRef({
      num:0
    })
    const onAddShallowCount = ()=>{
      shallowCount.value.num++
      //使用triggerRef，会主动更新视图，现在vue有triggerRef,没有triggerReactive
      triggerRef(shallowCount)
    }
    const onDeleShallowCount = ()=>{
      shallowCount.value.num--
    }
    return {
      count,
      onAddCount,
      onDeleCount,
      shallowCount,
      onAddShallowCount,
      onDeleShallowCount

    }
  },
  render() {
    const {
      count,
      onAddCount,
      onDeleCount,
      shallowCount,
      onAddShallowCount,
      onDeleShallowCount} = this
    return <div class="demo-wrap">
      <Row>
        <Col span={6}>ref count计数例子</Col>
        <Col span={9}>
          <Input value={count}></Input>
        </Col>
        <Col span={9}>
          <Button onClick={onAddCount}>加</Button>
          <Button onClick={onDeleCount}>减</Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>shallowRef</Col>
        <Col span={9}>
          <Input value={shallowCount.num}></Input>
        </Col>
        <Col span={9}>
          <Button onClick={onAddShallowCount}>加</Button>
          <Button onClick={onDeleShallowCount}>减</Button>
        </Col>
      </Row>
    </div>;
  },
});
export default RefDemo;
