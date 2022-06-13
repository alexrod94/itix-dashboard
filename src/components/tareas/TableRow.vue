<template>
  <tr
    class="bg-blue-300 even:bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700"
    v-for="item in myData"
  >
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.hour }}
    </td>
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.plan }}
    </td>
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.real }}
    </td>
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.scrap }}
    </td>
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      {{ item.downtime }}
    </td>
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
      <span v-for="i in item.comment">{{ i }}<br /></span>
    </td>
    <td
      class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
    >
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
