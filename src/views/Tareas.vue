<template>
  <div class="tasks mt-5 mx-5 my-5">
    <div class="relative shadow-md rounded-lg">
      <table
        class="w-full text-sm py-3 text-left text-gray-800 dark:text-white border border-black"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-900 dark:text-gray-400 glass"
        >
          <tr>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Hora
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Plan
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Real
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Scrap
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Paros
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Comentarios
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              Plan<br />Total/h
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-large text-3xl text-gray-900 bg-gray-200 dark:text-white whitespace-nowrap border-black border glass"
            >
              OEE
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
import fakedata from "../assets/fakedata-2.json";
import TableRow from "../components/tareas/TableRow.vue";
export default {
  data() {
    return {
      myData: null,
    };
  },
  async mounted() {
    this.callData();
    const data = await fetch(`http://cirrux.es:5000/api/line/detail/WA047-01`);
    const res = await data.json();
    this.myData = res.elements;
    const name = res.lineName;
    this.$emit("newName", name);
  },
  components: { TableRow },
  methods: {
    callData() {
      setInterval(async () => {
        const data = await fetch(
          `http://cirrux.es:5000/api/line/detail/WA047-01`
        );
        const res = await data.json();
        this.myData = res.elements;
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
