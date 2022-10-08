import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visualizationData: [],
    groupedVisualizationData: []
  },
  getters: {
    getVisualizationData(state) {
      return state.visualizationData;
    }
  },
  mutations: {
    setVisualizationData(state, payload) {
      state.visualizationData = payload;
    },
    setGroupedVisualizationData(state, payload) {
      state.groupedVisualizationData = payload;
    }
  },
  actions: {
    setVisualizationData({ commit }, payload) {
      commit('setVisualizationData', payload);
    },
    setGroupedVisualizationData({ commit }, payload) {
      commit('setGroupedVisualizationData', payload);
    }
  },
  modules: {
  }
})
