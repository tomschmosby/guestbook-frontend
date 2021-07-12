<template>
  <div>
    <b-form-input v-model="loginEmail" placeholder="Email"></b-form-input>
      <b-form-input v-model="loginPassword" placeholder="Password" type="password"></b-form-input>
        <b-button @click="logIn">Login</b-button>
      <b-button to="/CreateProfile" variant="outline-secondary">Sign Up</b-button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        loginEmail: '',
        loginPassword: '',       
      };
    },methods: {
      logIn() {
        this.axios.post('/login', {
          loginEmail: this.loginEmail,
          loginPassword: this.loginPassword,    
        }).then((res) => {
          console.log(res.data)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id', res.data.id)
          this.$router.push('/');
          // alert('Event angelegt');
        });
      },
    },
  }
</script>

<style>

</style>