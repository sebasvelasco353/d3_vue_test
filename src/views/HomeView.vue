<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as d3 from "d3";

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  async mounted() {
    const data = await d3.csv("/data.csv");
    console.log(data);
    console.log("----------------------------------------------------- here -----------------------------");
  },
}
</script>