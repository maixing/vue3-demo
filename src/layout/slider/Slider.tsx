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
            <Menu.SubMenu title={'测试'}>
              <Menu.Item>{'子菜单'}</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={'测试'}>
              <Menu.Item>{'子菜单'}</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={'测试'}>
              <Menu.Item>{'子菜单'}</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title={'测试'}>
              <Menu.Item>{'子菜单'}</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </section>
      </div>
    );
  },
});
export default Slider;
