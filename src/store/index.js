import Vue from 'vue'
import Vuex from 'vuex'

import covidInfoClient from '../rest/CovidInfoClient';
import StateMetrics from '../models/StateMetrics';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedState: null,
    stateWiseData: null,
    distictWiseData: null
  },
  mutations: {
    UPDATE_STATE_WISE_DATA: (state, newStateWiseData) => {
      state.stateWiseData = newStateWiseData;
    },
    UPDATE_SELECTED_STATE: (state, newSelectedState) => {
      state.selectedState = newSelectedState;
    },
    UPDATE_DISTRICT_WISE_DATA: (state, newDistictWiseData) => {
      state.distictWiseData = newDistictWiseData;
    },
  },
  actions: {
    FETCH_STATE_WISE_DATA: async (context) => {
      let stateWiseData = await covidInfoClient.fetchStateWiseData();
      stateWiseData = stateWiseData.data.statewise;
      stateWiseData = stateWiseData.map(state => new StateMetrics(state));
      context.commit('UPDATE_STATE_WISE_DATA', stateWiseData);
    },
    FETCH_DISTRICT_WISE_DATA: async (context) => {
      const distictWiseData = await covidInfoClient.fetchDistrictWiseData();
      context.commit('UPDATE_DISTRICT_WISE_DATA', distictWiseData.data);
    }
  }
})
