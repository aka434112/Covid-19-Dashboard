<template>
  <v-flex xs12 sm7>
    <el-table ref="singleTable" height="60vh" empty-text="Please select a state" :data="districtWiseMetrics" style="width: 100% !important;">
      <el-table-column
        property="district"
        label="District">
      </el-table-column>
      <el-table-column
        label="Confirmed Cases">
        <template v-slot="{ row }"><span class="el-step__title">{{row.confirmed}}</span> <span class="delta-count el-step__description is-error" v-if="row.delta.confirmed">(+{{row.delta.confirmed}})</span></template>
      </el-table-column>
      <el-table-column
        label="Active Cases">
        <template v-slot="{ row }"><span class="el-step__title">{{row.active}}</span></template>
      </el-table-column>
      <el-table-column
        label="Recovered Cases">
        <template v-slot="{ row }"><span class="el-step__title">{{row.recovered}}</span> <span class="delta-count el-step__description is-success" v-if="row.delta.recovered">(+{{row.delta.recovered}})</span></template>
      </el-table-column>
      <el-table-column
        label="Deceased Cases">
        <template v-slot="{ row }"><span class="el-step__title">{{row.deceased}}</span> <span class="delta-count el-step__description is-wait" v-if="row.delta.deceased">(+{{row.delta.deceased}})</span></template>
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
      vm.distictWiseData = await covidInfoClient.fetchDistrictWiseData();
      // let districtWiseStatus = await covidInfoClient.fetchDistrictStatus();
      // districtWiseStatus = districtWiseStatus.zones;
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
.el-step__description {
  font-weight: 600;
}
</style>
