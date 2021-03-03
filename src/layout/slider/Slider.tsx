import { defineComponent } from 'vue';
import { Menu } from 'ant-design-vue';
import './style.less';
const Slider = defineComponent({
  components: {
    Menu,
  },
  render() {
    return (
      <div class="slider">
        <section class="header">Vue3</section>
        <section class="menu">
          <Menu theme={'dark'} mode={'inline'}>
            <Menu.SubMenu title={'vue3测试'}>
              <Menu.Item>
                <router-link to="/ref">ref</router-link>
              </Menu.Item>
              <Menu.Item>
                <router-link to="/reactive">reactive</router-link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </section>
      </div>
    );
  },
});
export default Slider;
