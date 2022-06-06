<template>
  <td
    class="px-6 py-4 border-black border text-center text-5xl font-bold glass proportional-nums"
    :class="this.color"
  >
    {{ items }}%
  </td>
</template>

<script>
export default {
  props: {
    items: Number,
  },
  computed: {
    color() {
      if (this.items < 70) {
        return "bg-red-400";
      } else if (this.items >= 70 && this.items < 85) {
        return "bg-yellow-300";
      } else {
        return "bg-green-300";
      }
    },
  },
};
</script>

<style></style>
