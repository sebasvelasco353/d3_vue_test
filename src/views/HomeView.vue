<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { csv } from "d3";
import { nest } from "d3-collection"

export default {
  name: 'HomeView',
  data() {
    return {
      reportes: []
    }
  },
  components: {
    HelloWorld
  },
  async mounted() {
    // get Data from public/data.csv
    this.reportes = await csv("/data.csv");
  },
  methods: {
    onGroupData() {
      return nest().key(function(d) {return d.DEPARTAMENTO;}).entries(this.reportes);
    }
  }
}
</script>