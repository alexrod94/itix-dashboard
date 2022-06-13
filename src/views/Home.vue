<template>
  <div class="home overflow-y-hidden mt-5 mx-5 h-content">
    <div class="relative overflow-x-auto shadow-md rounded-lg">
      <table
        class="w-full text-sm text-left text-gray-800 dark:text-white border border-black"
      >
        <thead
          class="text-xs text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-gray-400 glass text-2xl"
        >
          <tr>
            <th scope="col" class="px-6 py-3 dont-show"></th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -8 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -7 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -6 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -5 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -4 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -3 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
              -2 h
            </th>
            <th scope="col" class="px-6 py-3 border-black border text-center">
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
import TableRow from "../components/dashboard/TableRow.vue";
export default {
  data() {
    return {
      myData: null,
    };
  },
  async mounted() {
    this.callData();
    const data = await fetch(`${process.env.VUE_APP_API_URL}line/WA047`);
    const res = await data.json();
    this.myData = res.data;
    const name = res.lineName;
    this.$emit("newName", name);
  },
  components: { TableRow },
  methods: {
    callData() {
      setInterval(async () => {
        const data = await fetch(`${process.env.VUE_APP_API_URL}line/WA047`);
        const res = await data.json();
        this.myData = res.data;
        const name = res.lineName;
        this.$emit("newName", name);
      }, 5000);
    },
  },
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
