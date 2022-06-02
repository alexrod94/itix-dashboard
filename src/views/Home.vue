<template>
  <div class="home">
    <div class="relative overflow-x-auto shadow-md">
      <table class="w-full text-sm text-left text-gray-800 dark:text-white">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3"></th>
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
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="item in myData"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap border-black border"
            >
              {{ item.lineName }}<br /><span class="text-small">{{
                item.lineDesc
              }}</span>
            </th>
            <td
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import fakedata from "../assets/fakedata.json";
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
};
</script>

<style>
.text-small {
  font-size: 8px !important;
}

.red {
  background: rgb(255, 0, 0, 0.3);
}

.yello {
  background: rgba(240, 213, 11, 0.3);
}
.green {
  background: rgb(0, 255, 0, 0.3);
}
</style>
