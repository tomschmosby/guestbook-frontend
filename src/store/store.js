//in der store.js werden Globale Variablen definiert die in verschiednen dateien gebraucht werden
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
    events: null
  },
  mutations: {},
  actions: {},
  modules: {},
});
