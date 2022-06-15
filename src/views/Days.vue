<template>
  <div class="grid grid-cols-5">
    <div class="day" v-for="item in myData">
      <div class="morning">
        <p>{{ item.dayName }}</p>
        <DayTableVue :el="item.t1" />
      </div>
      <div class="afternoon">
        <DayTableVue :el="item.t2" />
      </div>
      <div class="evening">
        <DayTableVue :el="item.t3" />
      </div>
    </div>
  </div>
</template>

<script>
import DayTableVue from "../components/days/DayTable.vue";
export default {
  data() {
    return {
      myData: null,
    };
  },
  components: {
    DayTableVue,
  },
  async mounted() {
    this.callData();
    const data = await fetch(`http://cirrux.es:5000/api/line/week/WA047-01`);
    const res = await data.json();
    this.myData = res.days;
    const name = res.lineName;
    this.$emit("newName", name);
  },
  //   components: { TableRow },
  methods: {
    callData() {
      setInterval(async () => {
        const data = await fetch(`http://cirrux.es:5000/api/line/week/WA047-0`);
        const res = await data.json();
        this.myData = res.days;
        console.log(this.myData);
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
