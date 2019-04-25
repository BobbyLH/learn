<template>
  <div>
    <form class="form">
      <div class="form-item">
        <label for="year">年数：</label>
        <input id='year' type="text" placeholder="输入数字, 例如 3" ref="year"/>
      </div>
      <div class="form-item">
        <label for="growth">增长率：</label>
        <input id='growth' type="text" placeholder="输入百分比, 例如10%" ref="growth"/>
      </div>
      <div class="form-item">
        <label for="freecash">自由现金流：</label>
        <input id='freecash' type="text" placeholder="输入数字, 例如140000000" ref="freecash"/>
      </div>
      <div class="form-item">
        <label for="discount">贴现率：</label>
        <input id='discount' type="text" placeholder="输入百分比, 例如5%" ref="discount"/>
      </div>
      <div class="form-item">
        <label for="perpetual">永续增长率：</label>
        <input id='perpetual' type="text" placeholder="输入百分比, 例如2%" ref="perpetual"/>
      </div>
      <div class="form-item">
        <button type='button' class="form-button" v-on:click='calculate()'>提交</button>
      </div>
    </form>
    <section>
      <span>绝对现金流: {{value}}</span>
    </section>
  </div>
</template>
<script>
import './index.scss'
export default {
  data () {
    return {
      value: 0
    }
  },
  methods: {
    calculate () {
      const year = parseInt(this.$refs.year.value)
      const growth = parseFloat(this.$refs.growth.value) / 100
      const freecash = Number(this.$refs.freecash.value)
      const discount = parseFloat(this.$refs.discount.value) / 100
      const perpetual = parseFloat(this.$refs.perpetual.value) / 100
      console.log(year, growth, freecash, discount, perpetual)
      if (year && growth && freecash && discount && perpetual) {
        let cashCount = 0
        for (let i = 1; i <= year; i++) {
          let growCash
          if (i === year) {
            growCash = freecash * Math.pow((1 + growth), i - 1) * (1 + perpetual) / (discount - perpetual)
            console.log(555, growCash)
          } else {
            growCash = freecash * Math.pow((1 + growth), i)
          }
          const disCash = growCash / Math.pow((1 + discount), i)
          cashCount += disCash
          console.log(i, cashCount, growCash, disCash)
        }
        if (cashCount > 100000000) {
          return this.value = Math.round(cashCount/100000000) + '亿'
        } else if (cashCount > 10000) {
          return this.value = Math.round(cashCount/10000) + '万'
        } else {
          return this.value = Math.round(cashCount) + '元'
        }

      } else {
        return this.value = '请输入完整的数据'
      }
    },
  }
}
</script>
