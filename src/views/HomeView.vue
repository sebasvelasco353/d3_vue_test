<template>
  <div class="home">
    <Dropdown hasAllOption hasNoneOption :options="categories" />
    <svg width="1800" height="1000"></svg>
  </div>
</template>

<script>
import {
  csv,
  group,
  select,
  scaleBand,
  scaleLinear,
  max,
  axisBottom,
  axisLeft
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

    var svg = select("svg");
    var margin = 200;
    var width = svg.attr("width") - margin;
    var height = svg.attr("height") - margin;

    var xScale = scaleBand().range([0, width]).padding(0.4);
    var yScale = scaleLinear().range([height, 0]);

    var g = svg.append("g")
      .attr("transform", "translate(" + 100 + "," + 100 + ")");

    xScale.domain(this.groupedVisualizationData.map(function (d) { return d.key; }));
    yScale.domain([0, max(this.groupedVisualizationData, function (d) { return d.value.length; })]);

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(axisBottom(xScale));

    g.append("g")
      .call(axisLeft(yScale).tickFormat(function (d) {
        return "$" + d;
      }).ticks(10))
      .append("text")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("value");
  },
  computed: {
    groupedVisualizationData() {
      return Array.from(group(this.$store.getters.getVisualizationData, d => d[this.categories[0]]), ([key, value]) => ({ key, value }))
    }
  }
}
</script>