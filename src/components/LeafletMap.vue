<template>
  <v-flex xs12 sm5>
    <l-map :zoom="zoom" :center="center" style="height: 65vh; width: 97%;margin: 2%;">
      <l-tile-layer :url="url" :attribution="attribution"/>
      <l-geo-json :geojson="geojson" :options="options"/>
    </l-map>
  </v-flex>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import 'leaflet/dist/leaflet.css';
import geoJSON from './GeoJSON'

const opacityOfSelectedState = 0.5;
const defaultOpacityOfState = 0.2;

export default {
  name: 'Map',
  data: () => ({
    geojson: geoJSON,
    enableTooltip: true,
    center: [23, 82.7],
    zoom: 4,
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: "Map data &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors, <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>",
    previouslySelectedState: null
  }),
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  methods: {
    highlightSelectedState (state) {
      const vm = this;
      const styleForSelectedState = {fillOpacity: opacityOfSelectedState};
      console.log(state.feature.properties.ST_CODE);
      if (!vm.previouslySelectedState) {
        vm.previouslySelectedState = state;
        state.setStyle(styleForSelectedState);  //highlights selected.
        return;
      }
      vm.previouslySelectedState.setStyle({fillOpacity: defaultOpacityOfState}); //resets layer color
      state.setStyle(styleForSelectedState);  //highlights selected.
      vm.previouslySelectedState = state;
    }
  },
  computed: {
    options() {
      return {
        weight: 1,
        opacity: 0.3,
        fillOpacity: defaultOpacityOfState,
        onEachFeature: this.onEachFeatureFunction
      };
    },
    onEachFeatureFunction() {
      const vm = this;
      if (!vm.enableTooltip) {
        return () => {};
      }
      return (feature, state) => {
        state.bindTooltip(
          `<div>${feature.properties.ST_NM}</div>`,
          { permanent: false, sticky: true }
        );
        state.on("click", function () {
          vm.highlightSelectedState(state);
        });
      };
    }
  }
}
</script>

<style scoped>

</style>
