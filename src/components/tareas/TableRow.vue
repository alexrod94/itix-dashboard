<template>
  <tr
    class="bg-blue-300 even:bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700"
    v-for="item in myData"
  >
    <td class="px-6 py-4 text-center text-md glass">
      {{ item.hour }}
    </td>
    <td class="px-6 py-4 text-center text-md glass">
      {{ item.plan }}
    </td>
    <td class="px-6 py-4 text-center text-md glass">
      {{ item.real }}
    </td>
    <td class="px-6 py-4 text-center text-md glass">
      {{ item.scrap }}
    </td>
    <td class="px-6 py-4 text-center text-md glass">
      {{ item.downtime }}
    </td>
    <td class="px-6 py-4 text-center text-md glass">
      <span v-for="i in item.comment">{{ i }}<br /></span>
    </td>
    <td class="px-6 py-4 text-center text-md glass">
      {{ item.totalh }}
    </td>
    <TableCell :items="item.oee" />
  </tr>
</template>

<script>
import TableCell from "./TableCell.vue";
export default {
  props: {
    myData: Object,
  },
  components: { TableCell },
  mounted() {
    console.log(this.myData);
  },
};
</script>

<style></style>
