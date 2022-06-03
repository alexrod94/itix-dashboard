<template>
  <div class="home mt-5 mx-5">
    <div class="relative overflow-x-auto shadow-md rounded-lg">
      <table class="w-full text-sm text-left text-gray-800 dark:text-white">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-900 dark:text-gray-400 glass"
        >
          <tr>
            <th scope="col" class="px-6 py-3 dont-show"></th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -8h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -7h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -6h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -5h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -4h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -3h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -2h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -1h
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
  font-size: 8px !important;
}

.dont-show {
  opacity: 0 !important;
}
</style>
