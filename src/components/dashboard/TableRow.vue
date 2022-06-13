<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    v-for="item in myData"
  >
    <th
      scope="row"
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.lineName }}<br /><span class="text-lg">{{ item.lineDesc }}</span>
    </th>
    <TableCell v-for="cellItem in item.lineOEE" :items="cellItem" />
  </tr>
</template>

<script>
import TableCell from "./TableCell.vue";
export default {
  props: {
    myData: Object,
  },
  components: { TableCell },
};
</script>

<style></style>
