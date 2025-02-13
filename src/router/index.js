import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/index.vue'
import About from '@/layouts/about.vue';
import project from '@/layouts/project/index.vue';
import contact from '@/layouts/contact.vue';
import design from '@/layouts/project/detail/design.vue';

const routes = [
  { path: '/', component: home },
  { path: '/about', component: About },
  { path: '/project', component: project },
  { path: '/contact', component: contact },
  { path: '/design', component: design },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
