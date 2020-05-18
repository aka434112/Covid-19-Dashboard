<template>
  <v-app id="inspire">
    <div>
          <v-app-bar color="#235380" dark>
            <v-toolbar-title><v-icon x-large>mdi-virus-outline</v-icon> Covid-19 Dashboard</v-toolbar-title>
          </v-app-bar>
          <v-container fluid>
            <v-layout row wrap>
              <number-cards></number-cards>
              <leaflet-map></leaflet-map>
              <data-table></data-table>
            </v-layout>
          </v-container>
    </div>
  </v-app>
</template>

<script>
import leafletMap from './components/LeafletMap';
import numberCards from './components/NumberCards';
import dataTable from './components/DataTable';
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    leafletMap,
    numberCards,
    dataTable
  },
  methods: {
    ...mapActions(['FETCH_DISTRICT_WISE_DATA', 'FETCH_DISTRICT_WISE_DATA_VERSION_TWO'])
  },
  created () {
    const vm = this;
    vm.FETCH_DISTRICT_WISE_DATA();
  }
};
</script>

<style>
.v-application {
  font-family: 'Montserrat', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
