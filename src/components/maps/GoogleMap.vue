<template>
  <gmap-map
    :center="center"
    :zoom="16"
    style="width: 500px; height: 300px">
    <gmap-marker
      :position="markers.position"
      :clickable="true"
      :draggable="true"
      @click="center=markers.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>

  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBzgL5bJIC6JYnqtmwpqYpE2-Z7CuKTuU8',
      v: '3'
      // libraries: 'places'
    }
  })

  export default {
    name: 'googlemap',
    data () {
      return {
        center: {lat: 5.857536, lng: -55.117138},
        markers: {
          position: {lat: 5.857536, lng: -55.117138}
        }
      }
    }
  }
</script>
