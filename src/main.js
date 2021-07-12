//Die main.js stellt das Backend des Frontend dar. hier werden alle Abhängigkeiten zu externen Services initialisiert


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

//Verbindung zum Backend über Axios
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "https://guestbookbe.ds.ava.hfg.design/";

//Prüfe ob Token Existieren, Um Aus Home zu gelanden sonst auf Login 
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

//Vue Objekt erstellen
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
