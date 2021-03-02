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
    children: [
      {
        path: '/:child',
        component: function () {
          console.log('location---->>%o', location);
          return import(`@/views/components/${location.hash.split('/')[1]}.tsx`);
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
