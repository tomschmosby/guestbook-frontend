<template>

  <b-container fluid>
    <p>
      Welcome to Guestbook
    </p>
    <b-row>
      <b-form-input v-model="profileFirstname" placeholder="Firstname"></b-form-input>
      <b-form-input v-model="profileLastname" placeholder="Lastname"></b-form-input>
    
      <b-form-input v-model="profileadress" placeholder="Adress"></b-form-input>
      <b-form-input v-model="profileZipcode" placeholder="Zip-Code"></b-form-input>
      <b-form-input v-model="profileCity" placeholder="City"></b-form-input>
      <b-form-input v-model="userMacadresse" placeholder="Phone MAC Adress"></b-form-input>
      <b-form-input v-model="profileEmail" placeholder="Email"></b-form-input>
      <b-form-input v-model="profilePassword" placeholder="Password" type="password"></b-form-input>
      <b-button @click="createProfile">Create Profile</b-button>
      <b-button to="/login" variant="outline-secondary">Login</b-button>
  
    </b-row>
  </b-container>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        profileFirstname: '',
        profileLastname: '',
        profileadress: '',
        profileZipcode: '',
        profileCity: '',
        userMacresse: '',
        profileEmail: '',
        profilePassword: '',
      };
    },
    methods: {
      createProfile() {
        this.axios.post('/profiles', {
          name: `${this.profileFirstname} ${this.profileLastname}`,
          address: `${this.profileadress} ${this.profileZipcode} ${this.profileCity}`,
          userMacadresse: this.userMacadresse,
          profileEmail: this.profileEmail,
          profilePassword: this.profilePassword,
        }).then((res) => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.id)
          console.log(res.data)
          this.$router.push('/');
          // alert('Profile angelegt');
        });
      }
    },
  }
</script>

<style>

</style>