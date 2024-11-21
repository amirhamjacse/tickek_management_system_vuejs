import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BookTickets from '../views/BookTickets.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import SeatSelect from '../components/SeatSelection.vue'
import Checkout from '../components/Checkout.vue'
import Tripdetails from '../components/Tripdetails.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/book-tickets', name: 'BookTickets', component: BookTickets },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/seatselect', name: 'SeatSelection', component: SeatSelect },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/tripdetails', name: 'TripDetails', component: Tripdetails },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
