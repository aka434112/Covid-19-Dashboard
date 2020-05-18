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

export default {
  data () {
    return {
      districtWiseMetrics: []
    }
  },
  computed: {
    ...mapState(['selectedState', 'distictWiseData'])
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
  }
}
</script>

<style scoped>

</style>
