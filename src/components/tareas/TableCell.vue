<template>
  <td class="px-6 py-4 text-center text-md glass" :class="this.color">
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
        return "bg-yellow-100";
      } else {
        return "bg-green-200";
      }
    },
  },
};
</script>

<style></style>
