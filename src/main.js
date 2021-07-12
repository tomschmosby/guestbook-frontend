import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/bootstrap-vue";
import store from "./store/store";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
axios.defaults.baseURL = "http://localhost:3001/";


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({
        name: 'Login',
      });
      store.state.loggedIn = false;
    } else {
      next();
      store.state.loggedIn = true;
    }
  } else {
    next();
  }
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
