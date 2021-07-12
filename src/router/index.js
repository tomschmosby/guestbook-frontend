// In der index.js werden alle verlinkungen der 'Seiten' definiert 
import Vue from "vue";
import VueRouter from "vue-router"; 
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/newEvent",
    name: "NewEvent",
    component: () => import('../views/NewEvent.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/CreateProfile",
    name: "Profile",
    component: () => import('../views/CreateProfile.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
  }
 
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
