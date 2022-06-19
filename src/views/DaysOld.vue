<template>
  <div class="grid grid-cols-12">
    <div class="col-span-2 flex flex-row">
      <div class="myRotate">hola</div>
      <p>hola</p>
    </div>
    <div class="day col-span-2" v-for="item in myData">
      <div class="morning grid grid-cols-3">
        <div class="col-span-3">{{ item.dayName }}</div>
        <div class="col-span-2">
          {{ item.t1.aNumerator }}/{{ item.t1.aDenominator }}
        </div>
        <div class="col-span-1">{{ item.t1.aoee }}%</div>
        <div class="col-span-2">
          {{ item.t1.pNumerator }}/{{ item.t1.pDenominator }}
        </div>
        <div class="col-span-1">{{ item.t1.poee }}%</div>
        <div class="col-span-2">
          {{ item.t1.qNumerator }}/{{ item.t1.qDenominator }}
        </div>
        <div class="col-span-1">{{ item.t1.qoee }}%</div>
        <div class="col-span-3">{{ item.t1.oee }}</div>
      </div>
      <div class="morning grid grid-cols-3">
        <div class="col-span-2">
          {{ item.t2.aNumerator }}/{{ item.t2.aDenominator }}
        </div>
        <div class="col-span-1">{{ item.t2.aoee }}%</div>
        <div class="col-span-2">
          {{ item.t2.pNumerator }}/{{ item.t2.pDenominator }}
        </div>
        <div class="col-span-1">{{ item.t2.poee }}%</div>
        <div class="col-span-2">
          {{ item.t2.qNumerator }}/{{ item.t2.qDenominator }}
        </div>
        <div class="col-span-1">{{ item.t2.qoee }}%</div>
        <div class="col-span-3">{{ item.t2.oee }}</div>
      </div>
      <div class="morning grid grid-cols-3">
        <div class="col-span-2">
          {{ item.t3.aNumerator }}/{{ item.t3.aDenominator }}
        </div>
        <div class="col-span-1">{{ item.t3.aoee }}%</div>
        <div class="col-span-2">
          {{ item.t3.pNumerator }}/{{ item.t3.pDenominator }}
        </div>
        <div class="col-span-1">{{ item.t3.poee }}%</div>
        <div class="col-span-2">
          {{ item.t3.qNumerator }}/{{ item.t3.qDenominator }}
        </div>
        <div class="col-span-1">{{ item.t3.qoee }}%</div>
        <div class="col-span-3">{{ item.t3.oee }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: null,
    };
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

.myRotate {
  transform: rotate(-90deg);
  margin-left: 100%;
  margin-right: -85%;
}
</style>
