<!-- NewEvent ist die Seite mit dem Dialog um eine Neues Event an zu legen -->


<!--Diese Objekte werden verwendet-->
<template>
    <b-container fluid>
    <b-row>
      <b-form-input v-model="eventName" placeholder="Eventname"></b-form-input>
      <b-form-input v-model="snifferMacadresse" placeholder="Sniffer ID (MAC-Adresse)"></b-form-input>
      <b-form-input v-model="latitude" placeholder="Latitude"></b-form-input>
      <b-form-input v-model="longitude" placeholder="Longitude"></b-form-input>
      <b-form-input v-model="maxguests" placeholder="Maximum Guests"></b-form-input>
      <b-button @click="createEvent">Create Event</b-button>
      <b-button to="/" variant="outline-secondary">Close</b-button>
    </b-row>
  </b-container>
</template>


<script>
// poste die eingegebenen Inhalte zum Endpunkt /event ins backend
  export default {
    data() {
      return {
        eventName: '',
        snifferMacadresse: '',
        longitude: '',
        latitude: '',        
      };
    },
    methods: {
      createEvent() {
        this.axios.post('/event', {
          name: this.eventName,
          sniffer: this.snifferMacadresse,
          longitude: this.longitude,
          latitude: this.latitude,
          maxguests: this.maxguests,
        }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(() => {
          this.$router.push('/');
          // alert('Event angelegt');
        });
      },
    },
  }
</script>

<style>

</style>