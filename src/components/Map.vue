<!-- in der Map.vue wird die Map Konfiguriert->


<!--Diese Objekte werden verwendet-->
<template>
  <div class="home-map">
    <transition name="fade">
    </transition>
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      @load="onMapLoad"
      :zoom.sync="$store.state.mapState.zoom"
      :pitch.sync="$store.state.mapState.pitch"
      :center.sync="$store.state.mapState.center"
      :bearing.sync="$store.state.mapState.bearing"
      class="home-map"
    >
      <!-- Verwenden der Marker -->
      <MglMarker
        v-for="marker in mapMarker"
        :key="marker.ts"
        :coordinates="[marker.longitude, marker.latitude]"
      >
        <MglPopup anchor="top">
          <div class="popup-body">
            <p>
              {{marker.name}}
              <br>
              {{marker.macadressen.length}} / {{marker.maxguests}}
            </p>
            <b-icon v-if="marker._id === id" icon="trash" style="cursor:pointer;" @click="deleteEvent(marker._id)" />
          </div>
        </MglPopup>
      </MglMarker>

      <MglGeolocateControl v-if="showControls" />
      <MglNavigationControl v-if="showControls" />
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
// Importieren der Abhängigkeiten
import { 
  MglMap,
  MglMarker,
  MglPopup,
  MglGeolocateControl,
  MglNavigationControl,
} from "vue-mapbox";
export default {
  name: "MapComponent",
  components: {
    // MenuButton,
    MglMap,
    MglMarker,
    MglPopup,
    MglGeolocateControl,
    MglNavigationControl,
  },
  data() {
    return {
      accessToken: //mit dem Accesstocen wird die Verbindung zur Mapbox Api hergestellt 
        "pk.eyJ1IjoidG9tYnVlcmtsZSIsImEiOiJjazNzdDhpa2YwODg0M2RvMW5sam1kbWs0In0.UNkxzp2ZEsyGrOfc0zsF5g", 
      mapStyle: "mapbox://styles/tombuerkle/ckqtyylzt08il18qljo5elcmv", //verwenden des angelegten Styles
      showMap: false,
      showControls: false,
      showTreePopup: false,
      zoom: undefined,
    };
  },
  methods: {
    async onMapLoad(/*event*/) {
      if (this.$store.state.mapLoaded) {
        this.showControls = true;
        setTimeout(() => (this.showMap = true), 250);
      } else {
        this.showMap = true;

        setTimeout(() => (this.showControls = true), 500);
        this.$store.state.mapLoaded = true;
      }
    },
    deleteEvent(id) {
      this.axios.delete('/event', {
        data: {
          id
        }, 
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(() => {
          alert('Event gelöscht');
        });
    }
  },
  computed: {
    mapMarker() {
      return this.$store.state.events;
    },
    id() {
      return localStorage.getItem('id');
    },
  },
  created() {
    this.mapbox = Mapbox;
  },
  mounted() {},
};
</script>

<style scoped>
.home-map {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
.popup-body {
  margin: 0.5rem;
  margin-right: 1rem;
}
.popup-text {
  color: var(--background-color);
}
</style>
