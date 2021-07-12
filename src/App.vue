<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <router-view style="min-height: 90vh" />
    </main>
    <router-view name="footer"></router-view>
  </div>

</template>

<script>
export default {
  name: "App",
  mounted() {
    // this.$router.push('/createProfile');
    this.getEvents();
    setInterval(() => {
      this.getEvents();
    }, 1000);
  },
  methods: {
    getEvents() {
      if (!localStorage.getItem('token')) return;
      this.axios.get('/events', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((d) => this.$store.state.events = d.data);
      // console.log(this.$store.state.events);
    }
  }
};
</script>

<style>
.buttons{
  position: fixed;
  top: 10px;
  left: 10px;
}
:root {
  --interaction-color: #ff9950;
  --danger-color: #ee684f;
  --warning-color: #ffc700;
  --text-icon-color: #00000;
  --notclickable-color: #cec6c6;
  --background-color: #bbbbbb;
  --secondary-text-icon-color: #a8a8a8;
  --visual-information-color: #346957;
  --disabled-color: #f4f4f4;
  --white-color: #ffffff;
}
h1 {
  font-size: 2.25rem;
  color: var(--text-icon-color);
  margin-top: 4.25rem;
}
h2 {
  font-size: 1.625rem;
  color: var(--text-icon-color);
  margin-top: 4.25rem;
  word-wrap: break-word;
}
h3 {
  font-size: 1.25rem;
  color: var(--text-icon-color);
}
h4 {
  font-size: 1.063rem;
  color: var(--text-icon-color);
}
body {
  font-size: 1rem;
  color: var(--text-icon-color);
  background-color: var(--background-color);
}
p {
  font-size: 0.875rem;
  color: var(--text-icon-color);
  hyphens: auto;
}
*:focus {
  outline: 0;
}
</style>
