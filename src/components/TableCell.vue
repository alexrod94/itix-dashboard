<template>
  <td class="px-6 py-4 border-black border text-center" :class="this.color">
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
        return "bg-red-200";
      } else if (this.items > 70 && this.items < 85) {
        return "bg-yellow-200";
      } else {
        return "bg-green-200";
      }
    },
  },
};
</script>

<style></style>
