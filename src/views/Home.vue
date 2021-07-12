<!-- Home.vue stellt die Startseite der Anwendung dar ->


<!--Diese Objekte werden verwendet-->
<template>
  <div class="home">
    <Map /> <!--Ausgabe der Map mit all ihren bestandteilen -->
    <div class="buttons">
      <b-button to="/newEvent">Create New Event</b-button> 
      <b-button @click="logout" style="margin-left: 10px;">Logout</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//Einbinden der Map auf der Startseite
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Map,
  },
  methods: {
    logout() {//bei Logout wird der Token gelöscht im store
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
};
</script>
