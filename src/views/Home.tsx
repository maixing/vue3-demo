import { defineComponent, ref } from 'vue';
import { Layout } from 'ant-design-vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import Slider from '@/layout/slider';
import './style.less';

const Home = defineComponent({
  components: {
    Layout,
    Slider,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const collapsed = ref(false);
    const onCollap = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      onCollap,
      collapsed,
    };
  },
  render() {
    const { collapsed, onCollap } = this;
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Layout>
          <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <Slider></Slider>
          </Layout.Sider>
          <Layout>
            <Layout.Header class="layout-header">
              {collapsed ? (
                <MenuUnfoldOutlined class="collap" onClick={onCollap}></MenuUnfoldOutlined>
              ) : (
                <MenuFoldOutlined class="collap" onClick={onCollap}></MenuFoldOutlined>
              )}
            </Layout.Header>
            <Layout.Content>
              <router-view></router-view>
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    );
  },
});
export default Home;
