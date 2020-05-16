<template>
  <v-app id="inspire">
    <div>
          <v-app-bar color="#235380" dark>
            <v-toolbar-title><v-icon x-large>mdi-virus-outline</v-icon> Covid-19 Dashboard</v-toolbar-title>
          </v-app-bar>
          <number-cards></number-cards>
          <leaflet-map></leaflet-map>
    </div>
  </v-app>
</template>

<script>
import leafletMap from './components/LeafletMap';
import numberCards from './components/NumberCards';

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    leafletMap,
    numberCards
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
