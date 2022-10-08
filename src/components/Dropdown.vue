<template>
  <div class="dropdown">
    <select name="dropdownSelect" id="dropdownSelect">
      <option value="all" v-if="hasAllOption">Todos</option>
      <option value="none" v-if="hasNoneOption">Ninguno</option>
      <option v-for="(item, index) in options" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>
<script>

export default {
  name: 'DropdownComponent',
  props: {
    options: Array,
    hasNoneOption: Boolean,
    hasAllOption: Boolean
  }
}
</script>
<style scoped>

</style>
