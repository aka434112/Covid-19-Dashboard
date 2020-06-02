<template>
  <v-flex xs12 sm7>
    <el-table ref="singleTable" height="60vh" empty-text="Please select a state" :data="districtWiseMetrics" style="width: 100% !important;">
      <el-table-column
        property="district"
        label="District">
      </el-table-column>
      <el-table-column
        property="confirmed"
        label="Confirmed Cases">
      </el-table-column>
      <el-table-column
        property="active"
        label="Active Cases">
      </el-table-column>
      <el-table-column
        property="recovered"
        label="Recovered Cases">
      </el-table-column>
      <el-table-column
        property="deceased"
        label="Deceased Cases">
      </el-table-column>
    </el-table>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
import covidInfoClient from '../rest/CovidInfoClient';

export default {
  data () {
    return {
      districtWiseMetrics: [],
      distictWiseData: []
    }
  },
  methods: {
    fetchDistrictWiseData: async function () {
      const vm = this;
      const distictWiseData = await covidInfoClient.fetchDistrictWiseData();
      vm.distictWiseData = distictWiseData.data;
    }
  },
  computed: {
    ...mapState(['selectedState'])
  },
  watch: {
    selectedState (newSelectedState) {
      const vm = this;
      for (let state of vm.distictWiseData) {
        if (state.statecode === newSelectedState) {
          vm.districtWiseMetrics = state.districtData;
          break;
        }
      }
    }
  },
  created () {
    const vm = this;
    vm.fetchDistrictWiseData();
  }
}
</script>

<style scoped>

</style>
