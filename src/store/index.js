import Vue from 'vue'
import Vuex from 'vuex'

import covidInfoClient from '../rest/CovidInfoClient'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedState: null,
    stateWiseData: null,
    distictWiseData: null,
    distictWiseDatav2: null
  },
  mutations: {
    UPDATE_STATE_WISE_DATA: (state, newStateWiseData) => {
      state.stateWiseData = newStateWiseData;
    },
    UPDATE_DISTRICT_WISE_DATA: (state, newDistictWiseData) => {
      state.distictWiseData = newDistictWiseData;
    },
    UPDATE_DISTRICT_WISE_DATA_V2: (state, newDistictWiseDatav2) => {
      state.distictWiseDatav2 = newDistictWiseDatav2;
    },
    UPDATE_SELECTED_STATE: (state, newSelectedState) => {
      state.selectedState = newSelectedState;
    }
  },
  actions: {
    FETCH_STATE_WISE_DATA: async (context) => {
      const stateWiseData = await covidInfoClient.fetchStateWiseData();
      context.commit('UPDATE_STATE_WISE_DATA', stateWiseData);
    },
    FETCH_DISTRICT_WISE_DATA: async (context) => {
      const distictWiseData = await covidInfoClient.fetchDistrictWiseData();
      context.commit('UPDATE_DISTRICT_WISE_DATA', distictWiseData);
    },
    FETCH_DISTRICT_WISE_DATA_V2: async (context) => {
      const distictWiseDatav2 = await covidInfoClient.fetchDistrictWiseDatav2();
      context.commit('UPDATE_DISTRICT_WISE_DATA_V2', distictWiseDatav2);
    }
  }
})
