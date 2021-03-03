import { Col, Row, Button, Input } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { reactiveHooks, shallowHooks } from '@/hooks/reactiveHooks';
import './style.less';
const Reactive = defineComponent({
  components: {
    Row,
    Col,
    Button,
    Input,
  },
  setup() {
    return {
      ...reactiveHooks(),
      ...shallowHooks(),
    };
  },
  render() {
    const { reactiveState, onChange, shallowState, onShallowChange } = this;
    return (
      <div class="demo-wrap">
        <Row>
          <Col span={6}>reactive测试</Col>
          <Col span={9}>{JSON.stringify(reactiveState)}</Col>
          <Col span={9}>
            <Button onClick={onChange}>更改</Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>shallowReactive</Col>
          <Col span={9}>{JSON.stringify(shallowState)}</Col>
          <Col span={9}>
            {' '}
            <Button onClick={onShallowChange}>更改</Button>
          </Col>
        </Row>
      </div>
    );
  },
});
export default Reactive;
