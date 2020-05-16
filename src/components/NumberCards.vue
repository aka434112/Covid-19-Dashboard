<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Confirmed Cases" type="error" description="12333" :closable="false"></el-alert>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Active Cases" type="warning" description="12333" :closable="false"></el-alert>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Deceased Cases" type="info" description="12333" :closable="false"></el-alert>
      </v-flex>
      <v-flex xs6 sm3>
        <el-alert center class="number-card" title="Recovered Cases" description="12333" type="success" :closable="false"></el-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'NumberCards',

    data: () => ({

    }),
  }
</script>

<style>
  .number-card {
    min-height: 75px !important;
    width: 90% !important;
    margin: 2% !important;
  }
  .el-alert__title {
    font-size: 15px !important;
  }
  .el-alert__description {
    font-size: 25px !important;
  }
</style>
