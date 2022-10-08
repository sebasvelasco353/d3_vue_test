<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import {
  csv,
  group
} from "d3";

export default {
  name: 'HomeView',
  data() {
    return {
      reportes: [],
      reportesGrouped: [],
      categories: ["Genre", "Publisher", "Year"]
    }
  },
  components: {
  },
  async mounted() {
    // get Data from public/data.csv
    this.reportes = await csv("./data.csv");
    this.reportesGrouped = this.onGroupData();
    console.log(this);
  },
  methods: {
    onGroupData() {
      return Array.from(group(this.reportes, d => d[this.categories[1]]), ([key, value]) => ({ key, value }))
    }
  }
}
</script>