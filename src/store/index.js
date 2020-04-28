import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music_name: "",
  },
  getters: {
    getMusicName: (state) => {
      return state.music_name;
    },
  },
  mutations: {
    setMusicName: (state, name) => {
      state.music_name = name;
      console.log("sibal", name);
    },
  },
  actions: {},
  modules: {},
});
