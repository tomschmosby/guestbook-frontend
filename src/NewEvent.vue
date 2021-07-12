<template>
    <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-form-input v-model="eventName" placeholder="Eventname"></b-form-input>
      <b-form-input v-model="snifferMacadresse"></b-form-input>
      <b-form-input v-model="longitude"></b-form-input>
      <b-form-input v-model="latitude"></b-form-input>
      <b-button @click="createEvent">Erstellen</b-button>
    </b-row>
  </b-container>
</template>

<script>
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
          eventName: this.eventName,
        }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(() => {
          alert('Event angelegt');
        });
      }
    },
  }
</script>

<style>

</style>