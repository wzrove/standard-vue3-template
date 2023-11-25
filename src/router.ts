import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'ifream',
      component: import('@/view/main.vue'),
      path: '/',
    },
  ],
});

export default router;
