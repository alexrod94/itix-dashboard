<template>
  <div class="home mt-5 mx-5">
    <div class="relative overflow-x-auto shadow-md rounded-lg">
      <table
        class="w-full text-sm text-left text-gray-800 dark:text-white border border-black"
      >
        <thead
          class="text-xs text-gray-700  bg-gray-200 dark:bg-gray-900 dark:text-gray-400 glass text-2xl"
        >
          <tr>
            <th scope="col" class="px-6 py-3 dont-show"></th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -8 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -7 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -6 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -5 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -4 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -3 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -2 h
            </th>
            <th
              scope="col"
              class="px-6 py-3 border-black border text-center"
            >
              -1 h
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow :myData="myData" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import fakedata from "../assets/fakedata.json";
import TableRow from "../components/TableRow.vue";
export default {
  data() {
    return {
      myData: null,
    };
  },
  mounted() {
    this.myData = fakedata;
    console.log(this.myData);
  },
  components: { TableRow },
};
</script>

<style>
.text-small {
  font-size: 14px !important;
}

.dont-show {
  opacity: 0 !important;
}
</style>
