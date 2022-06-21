<template>
  <div class="py-5">
    <DayRow1 :myData="t1" />
    <DayRow2 :myData="t2" />
    <DayRow3 :myData="t3" />
  </div>
</template>

<script>
import DayRow1 from "../components/days/DayRow1.vue";
import DayRow2 from "../components/days/DayRow2.vue";
import DayRow3 from "../components/days/DayRow3.vue";
export default {
  components: {
    DayRow1,
    DayRow2,
    DayRow3,
  },
  data() {
    return {
      t1: null,
      t2: null,
      t3: null,
      lineName: "",
    };
  },
  async mounted() {
    this.callData();
    const res = await fetch("http://cirrux.es:5000/api/line/week/WA047-01");
    const finalRes = await res.json();
    this.lineName = finalRes.lineName;
    this.t1 = finalRes.t1.data;
    this.t2 = finalRes.t2.data;
    this.t3 = finalRes.t3.data;
    this.$emit("newName", this.lineName);
  },
  methods: {
    callData() {
      setInterval(async () => {
        const res = await fetch("http://cirrux.es:5000/api/line/week/WA047-01");
        const finalRes = await res.json();
        this.lineName = finalRes.lineName;
        this.t1 = finalRes.t1.data;
        this.t2 = finalRes.t2.data;
        this.t3 = finalRes.t3.data;
        this.$emit("newName", this.lineName);
      }, 30000);
    },
  },
};
</script>

<style></style>
