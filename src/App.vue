<template>
  <div class="container">
    <Navbar/>
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted() {
    if (window.location.pathname==='/') {
      window.location.pathname= '/users'
    }
  }
}
</script>

<style  >
body{
  padding: 0;
  margin: 0;
}
</style>
