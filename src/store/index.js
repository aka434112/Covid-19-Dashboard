import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedState: null
  },
  mutations: {
    UPDATE_SELECTED_STATE: (state, newSelectedState) => {
      state.selectedState = newSelectedState;
    }
  }
})
