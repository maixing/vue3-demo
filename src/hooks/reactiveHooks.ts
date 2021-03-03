import { reactive, shallowReactive } from 'vue';
const reactiveHooks = () => {
  const reactiveState = reactive({
    name: 123,
    sub: {
      name: 456,
    },
  });
  const onChange = () => {
    reactiveState.sub.name = 789;
  };
  return {
    reactiveState,
    onChange,
  };
};
const shallowHooks = () => {
  const shallowState = shallowReactive({
    name: 123,
    sub: {
      name: 456,
    },
  });
  const onShallowChange = () => {
    shallowState.sub.name = 789;
    console.log('shallowState---->>%o', shallowState);
  };
  return {
    shallowState,
    onShallowChange,
  };
};
export { reactiveHooks, shallowHooks };
