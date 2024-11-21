import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BookTickets from '../views/BookTickets.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/book-tickets', name: 'BookTickets', component: BookTickets },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
