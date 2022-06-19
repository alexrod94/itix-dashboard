<template>
  <div class="grid grid-cols-6 gap-2 py-2">
    <div class="grid grid-col-2">
      <div class="col-span-2 w-100 table-cell">TURNO NOCHE</div>
      <div class="col-span-2 table-cell">A</div>
      <div class="col-span-2 table-cell">P</div>
      <div class="col-span-2 table-cell">Q</div>
      <div class="col-span-2 table-cell">OEE</div>
    </div>
    <DayTable v-for="item in myData" :item="item" />
  </div>
</template>

<script>
// import DayTableLeft from "./DayTableLeft.vue";
import DayTable from "./DayTable.vue";
export default {
  components: {
    // DayTableLeft,
    DayTable,
  },
  props: {
    myData: Array,
  },
};
</script>

<style></style>
