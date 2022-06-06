<template>
  <tr
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    v-for="item in myData"
  >
    <th
      scope="row"
      class="px-6 py-4 font-large text-xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.lineName }}<br /><span class="text-small">{{
        item.lineDesc
      }}</span>
    </th>
    <TableCell v-for="cellItem in item.lineOEE" :items="cellItem" />

    <!-- <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[0] < 70,
        yellow: item.lineOEE[0] > 70 && item.lineOEE[0] < 85,
        green: item.lineOEE[0] >= 85,
      }"
    >
      {{ item.lineOEE[0] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[1] < 70,
        yellow: item.lineOEE[1] > 70 && item.lineOEE[1] < 85,
        green: item.lineOEE[1] >= 85,
      }"
    >
      {{ item.lineOEE[1] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[2] < 70,
        yellow: item.lineOEE[2] > 70 && item.lineOEE[2] < 85,
        green: item.lineOEE[2] >= 85,
      }"
    >
      {{ item.lineOEE[2] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[3] < 70,
        yellow: item.lineOEE[3] > 70 && item.lineOEE[3] < 85,
        green: item.lineOEE[3] >= 85,
      }"
    >
      {{ item.lineOEE[3] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[4] < 70,
        yellow: item.lineOEE[4] > 70 && item.lineOEE[4] < 85,
        green: item.lineOEE[4] >= 85,
      }"
    >
      {{ item.lineOEE[4] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[5] < 70,
        yellow: item.lineOEE[5] > 70 && item.lineOEE[5] < 85,
        green: item.lineOEE[5] >= 85,
      }"
    >
      {{ item.lineOEE[5] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[6] < 70,
        yellow: item.lineOEE[6] > 70 && item.lineOEE[6] < 85,
        green: item.lineOEE[6] >= 85,
      }"
    >
      {{ item.lineOEE[6] }}%
    </td>
    <td
      class="px-6 py-4 border-black border text-center"
      :class="{
        red: item.lineOEE[7] < 70,
        yellow: item.lineOEE[7] > 70 && item.lineOEE[7] < 85,
        green: item.lineOEE[7] >= 85,
      }"
    >
      {{ item.lineOEE[7] }}%
    </td> -->
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
