<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="table-cell col-span-3">{{ item.dayName }}</div>
      <div class="table-cell col-span-2">
        {{ item.aNumerator }}/{{ item.aDenominator }}
      </div>
      <div class="table-cell col-span-1">{{ item.aoee }}%</div>
      <div class="table-cell col-span-2">
        {{ item.pNumerator }}/{{ item.pDenominator }}
      </div>
      <div class="table-cell col-span-1">{{ item.poee }}%</div>
      <div class="table-cell col-span-2">
        {{ item.qNumerator }}/{{ item.qDenominator }}
      </div>
      <div class="table-cell col-span-1">{{ item.qoee }}%</div>
      <div class="table-cell glass col-span-3" :class="this.color">
        {{ item.oee }}%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    color() {
      if (this.item.oee < 70) {
        return "bg-red-400";
      } else if (this.item.oee >= 70 && this.item.oee < 85) {
        return "bg-yellow-300";
      } else {
        return "bg-green-300";
      }
    },
  },
};
</script>

<style></style>
