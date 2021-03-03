import { createRouter, createWebHashHistory, RouteRecordRaw, useRoute } from 'vue-router';
import Home from '../views/Home';

let prefix = '/';
if (window.__POWERED_BY_QIANKUN__) {
  prefix = '/vue3/';
}
const routes: Array<RouteRecordRaw> = [
  {
    path: prefix,
    name: 'Home',
    component: Home,
    redirect: '/ref',
    children: [
      {
        path: '/ref',
        component: import(`@/views/components/ref.tsx`),
      },
      {
        path: '/reactive',
        component: import(`@/views/components/reactive.tsx`),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
