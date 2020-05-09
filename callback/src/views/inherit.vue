<template>
  <section class='ball-wrap'>
    <div v-on:click='eClick' class='ball' ref='ball1'>1</div>
  </section>
</template>
<style>
  .ball-wrap{
    position: relative;
    width: 750px;
    height: 500px;
    background: lightblue;
  }
  .ball{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: indigo;
    color: honeydew;
    line-height: 100px;
  }
</style>
<script>
export default {
  name: 'animation',
  data () {
    return {
      todos: []
    }
  },
  methods:{
    eClick () {
      this.method()
    },
    method () {
      // class Dad {
      //   constructor (name, height, money) {
      //     this.name = name
      //     this.height = height
      //     this.money = money
      //   }
      //   report () {
      //     console.log(`父亲的姓名是:${this.name}；身高是:${this.height}；存款有:${this.money}`)
      //   }
      //   static check () {
      //     console.log('没问题')
      //   }
      // }
      // class Son extends Dad {
      //   constructor (name, height, money, self) {
      //     super(name, height, money)
      //     this.self = self
      //   }
      // }
      function Dad ({name, height, money}) {
        this.name = name
        this.height = height
        this.money = money
      }
      Dad.prototype.report = function () {
        console.log(`父亲的姓名是:${this.name}；身高是:${this.height}；存款有:${this.money}`)
      }
      // var dad1 = new Dad({name: 'bob', height: '180cm', money: '20000$'})
      // dad1.report()
      function Son (name) {
        this.name = name
      }
      Son.prototype = new Dad({name: 'bobby', height: '180cm', money: '20000$'})
      Son.prototype.sayName = function () {
        console.log(`姓名：${this.name}`)
      }
      Son.prototype.useMoney = function (val) {
        // this.money = val
        Son.prototype.money = val
      }
      var son1 = new Son('aaa')
      var son2 = new Son('bbb')
      son1.report()
      son2.report()
      son1.useMoney('123')
      son1.report()
      son2.report()
      console.log(Son.prototype.money)
    }
  },
}
</script>