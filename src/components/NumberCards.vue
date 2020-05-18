<template>
  <v-container fluid>
    <v-layout row wrap v-if="stateMetrics">
      <v-flex xs12>
        <h2 style="padding-left:1%">{{ stateMetrics.state }}</h2>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Confirmed Cases" type="error" :description="stateMetrics.confirmed" :closable="false"></el-alert>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Active Cases" type="warning" :description="stateMetrics.active" :closable="false"></el-alert>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Recovered Cases" :description="stateMetrics.recovered" type="success" :closable="false"></el-alert>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Deceased Cases" type="info" :description="stateMetrics.deaths" :closable="false"></el-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

  export default {
    name: 'NumberCards',
    data: () => ({
      stateMetrics: null
    }),
    computed: {
      ...mapState(['selectedState', 'stateWiseData'])
    },
    watch: {
      selectedState: {
        immediate: true,
        handler: async function (newSelectedState) {
          const vm = this;
          if (!newSelectedState) {
            await vm.FETCH_STATE_WISE_DATA();
            const stateWiseData = vm.stateWiseData;
            vm.stateMetrics = stateWiseData[0];
          } else {
            for (let state of vm.stateWiseData) {
              if (state.statecode === newSelectedState) {
                vm.stateMetrics = state;
                break;
              }
            }
          }
        }
      }
    },
    methods: {
      ...mapActions(['FETCH_STATE_WISE_DATA'])
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
</style>
