import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music_name: "",
    score: 0,
  },
  getters: {
    getMusicName: (state) => {
      return state.music_name;
    },
    getScore: (state) => {
      return state.score;
    },
  },
  mutations: {
    setMusicName: (state, name) => {
      state.music_name = name;
      console.log("sibal", name);
    },
    setScore: (state, score) => {
      state.score = score;
      console.log("sibal", score);
    },
  },
  actions: {},
  modules: {},
});
