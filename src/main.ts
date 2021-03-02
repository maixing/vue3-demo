import './public-path';
import { createApp } from 'vue';
import '@/assets/style/reset.css';
import App from './App';
import router from './router';
import store from './store';

// App实例，用于乾坤卸载使用
const appFunc = () => createApp(App);
let AppInstance: any = null;
// 挂载元素
let HostElement: any = '#vue3';
// createApp(App).use(store).use(router).mount('#app')
function render(props: any) {
  AppInstance = appFunc();
  // 如果集成qiankun,则使用container,否则使用#app
  const { container } = props;
  console.log('HostElement---->>%o', container);
  HostElement = container ? container.querySelector('#vue3') : '#vue3';
  AppInstance.use(store).use(router).mount(HostElement);
}
// 不集成qiankun运行
if (!window.__POWERED_BY_QIANKUN__) {
  render('');
}

/* ------------qiankun集成配置开始-------------------*/
export async function bootstrap() {
  console.log('----->>bootstrap');
}
export async function mount(props: any) {
  console.log('----->>mount');
  render(props);
  AppInstance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  AppInstance.config.globalProperties.$setGlobalState = props.setGlobalState;
}
export async function unmount() {
  console.log('----->>unmount');
  if (HostElement && AppInstance) {
    AppInstance.unmount(HostElement);
    if (AppInstance && AppInstance._container) {
      AppInstance._container.innerHTML = '';
    }
  }
}
console.log('---->>%o', unmount);
console.log('---->>%o', bootstrap);
console.log('---->>%o', mount);
