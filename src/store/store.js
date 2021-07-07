import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mapLoaded: false,
    loggedIn: false,
    mapState: {
      zoom: 0,
      pitch: 0,
      bearing: 0,
      center: [0, 0],
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
