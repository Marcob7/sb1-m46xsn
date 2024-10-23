import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

// Import views
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Login from './views/Login.vue';
import Profile from './views/Profile.vue';
import Admin from './views/Admin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/admin', component: Admin }
  ]
});

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');