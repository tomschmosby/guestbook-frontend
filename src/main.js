import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/bootstrap-vue";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8080/'

new Vue({
    render: (h) => h(App),
    store,
  })
  .$mount("#app");