<template>
  <div class="home">
    <p>{{ $store.getters.getMsg }}</p>
    <Dropdown hasAllOption hasNoneOption :options="categories" />
  </div>
</template>

<script>
import {
  csv,
  group
} from "d3";
import Dropdown from "@/components/Dropdown.vue";

export default {
  name: 'HomeView',
  data() {
    return {
      categories: ["Genre", "Publisher", "Year"]
    }
  },
  components: {
    Dropdown
  },
  async mounted() {
    const visualizationData = await csv("./data.csv");
    this.$store.dispatch('setVisualizationData', visualizationData);
  },
  computed: {
    groupedVisualizationData() {
      return Array.from(group(this.$store.getters.getVisualizationData, d => d[this.categories[1]]), ([key, value]) => ({ key, value }))
    }
  }
}
</script>