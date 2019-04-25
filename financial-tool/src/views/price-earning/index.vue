<template>
  <div>
    <form class="form">
      <div class="form-item">
        <label for="total-market-value">总市值：</label>
        <input id='total-market-value' type="text" placeholder="输入数字, 例如 15000000" ref="tmv"/>
      </div>
      <div class="form-item">
        <label for="net-profit">净利润：</label>
        <input id='net-profit' type="text" placeholder="输入数字, 例如 100000" ref="nt"/>
      </div>
      <div class="form-item">
        <label for="divident-rate">派息率：</label>
        <input id='divident-rate' type="text" placeholder="输入百分比, 例如10%" ref="dr"/>
      </div>
      <div class="form-item">
        <button type='button' class="form-button" v-on:click='calculate()'>提交</button>
      </div>
    </form>
    <section>
      <p>市盈率: {{pe}}</p>
      <p>年化回报率: {{ar}}</p>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pe: 0,
      ar: 0
    }
  },
  methods: {
    calculate () {
      const tmv = parseInt(this.$refs.tmv.value)
      const nt = parseInt(this.$refs.nt.value)
      const dr = parseFloat(Number(this.$refs.dr.value) / 100)
    }
  }
}
</script>
