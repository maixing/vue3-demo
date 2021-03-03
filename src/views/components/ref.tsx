import { defineComponent } from 'vue';
import { Row, Col, Button, Input } from 'ant-design-vue';
import { refHooks, torefHooks } from '@/hooks/refHook';
import './style.less';

const RefDemo = defineComponent({
  components: {
    Row,
    Col,
    Button,
    Input,
  },
  setup() {
    return {
      ...refHooks(),
      ...torefHooks(),
    };
  },
  render() {
    const {
      count,
      onAddCount,
      onDeleCount,
      shallowCount,
      onAddShallowCount,
      onDeleShallowCount,
      toRefObj,
      state,
      toRefsObj,
      onChangeRef,
    } = this;
    return (
      <div class="demo-wrap">
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
        <Row>
          <Col span={6}>toref</Col>
          <Col span={9}>
            <Input value={state.name}></Input>
            <Input value={toRefObj}></Input>
            <Input value={toRefsObj.name.value}></Input>
          </Col>
          <Col span={9}>
            <Button onClick={onChangeRef}>改变</Button>
          </Col>
        </Row>
      </div>
    );
  },
});
export default RefDemo;
