<template>
  <div class="home">
    <Map />
    <div class="buttons">
      <b-button to="/newEvent">Create New Event</b-button>
      <b-button @click="logout" style="margin-left: 10px;">Logout</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map.vue";

export default {
  name: "Home",
  components: {
    Map,
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
};
</script>
