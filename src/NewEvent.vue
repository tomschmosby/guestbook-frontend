<template>
    <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-form-input v-model="eventName"></b-form-input>
      <b-form-input v-model="snifferMacadresse"></b-form-input>
      <b-form-input v-model="longitude"></b-form-input>
      <b-form-input v-model="latitude"></b-form-input>

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
      }
    }
  }
</script>

<style>

</style>