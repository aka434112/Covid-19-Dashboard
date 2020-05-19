<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 v-if="selectedStateHeader">
        <h2 style="padding-left:1%">{{ selectedStateHeader }}</h2>
      </v-flex>
      <v-flex xs6 sm3 v-for="metric in stateMetrics" :key="metric.getTitle()">
        <el-alert center class="number-card" :title="metric.getTitle()" :type="metric.getCardType()" :closable="false">
          <template v-slot:default>
            {{ metric.getCount() }} <span class="delta" v-if="metric.getDeltaCount()">(+{{ metric.getDeltaCount() }})</span>
          </template>
        </el-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import StateMetrics from '../models/StateMetrics';
import CovidNumbersCard from '../models/CovidNumbersCard'

  const ACTIVE_CASES_TITLE = 'Active Cases';
  const CONFIRMED_CASES_TITLE = 'Confirmed Cases';
  const RECOVERED_CASES_TITLE = 'Recovered Cases';
  const DECEASED_CASES_TITLE = 'Deceased Cases';
  const ERROR_ALERT_TYPE = 'error';
  const INFO_ALERT_TYPE = 'info';
  const WARNING_ALERT_TYPE = 'warning';
  const SUCCESS_ALERT_TYPE = 'success';

  export default {
    name: 'CovidNumbersCards',
    data: () => ({
      stateMetrics: [],
      selectedStateHeader: null
    }),
    computed: {
      ...mapState(['selectedState', 'stateWiseData'])
    },
    methods: {
      ...mapActions(['FETCH_STATE_WISE_DATA']),
      updateSelectedStateMetrics (state) {
        const vm = this;
        const stateMetrics = new StateMetrics(state);
        vm.selectedStateHeader = stateMetrics.selectedState();
        vm.stateMetrics = [];
        vm.stateMetrics.push(new CovidNumbersCard(CONFIRMED_CASES_TITLE, ERROR_ALERT_TYPE, stateMetrics.confirmedCases(), stateMetrics.confirmedCasesDelta()));
        vm.stateMetrics.push(new CovidNumbersCard(ACTIVE_CASES_TITLE, WARNING_ALERT_TYPE, stateMetrics.activeCases()));
        vm.stateMetrics.push(new CovidNumbersCard(RECOVERED_CASES_TITLE, SUCCESS_ALERT_TYPE, stateMetrics.recoveredCases(), stateMetrics.recoveredCasesDelta()));
        vm.stateMetrics.push(new CovidNumbersCard(DECEASED_CASES_TITLE, INFO_ALERT_TYPE, stateMetrics.deceasedCases(), stateMetrics.deceasedCasesDelta()));
      }
    },
    watch: {
      selectedState: {
        immediate: true,
        handler: async function (newSelectedState) {
          const vm = this;
          if (!newSelectedState) {
            await vm.FETCH_STATE_WISE_DATA();
            const stateWiseData = vm.stateWiseData;
            vm.updateSelectedStateMetrics(stateWiseData[0]);
          } else {
            for (let state of vm.stateWiseData) {
              if (state.statecode === newSelectedState) {
                vm.updateSelectedStateMetrics(state);
                break;
              }
            }
          }
        }
      }
    }
  }
</script>

<style>
  .number-card {
    min-height: 80px !important;
    width: 85% !important;
    margin: 2% !important;
  }
  .el-alert__title {
    font-size: 15px !important;
  }
  .el-alert__description {
    font-size: 25px !important;
  }
  .delta {
    font-size: 18px !important;
  }
</style>
