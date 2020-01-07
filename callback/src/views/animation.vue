<template>
  <section class='ball-wrap'>
    <div v-on:click='eClick' class='ball' ref='ball1'>1</div>
    <div v-on:click='logInOrder' class='ball' ref='ball2'>2</div>
    <div class='ball' ref='ball3'>3</div>
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
  .ball:nth-of-type(2) {
    top: 150px
  }
  .ball:nth-of-type(3) {
    top: 300px
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
      // this.originCB()
      this.promiseCB()
      // this.generatorCB()
      // this.asyncCB().then(v => console.log(v)).catch(e => console.error(e))
    },
    originCB () {
      let index = 0
      const _self = this
      function move (dom) {
        let counter = 0
        let timer = setInterval(() => {
          if (dom.offsetLeft >= 325) {
            ++index
            clearInterval(timer)
            if (index <= 2) start(index)
          } else {
            dom.style.left = `${++counter}px`
          }
        }, 10)
      }
      function start (index) {
        console.log(index)
        const domArr = [_self.$refs.ball1, _self.$refs.ball2, _self.$refs.ball3]
        move(domArr[index])
      }
      start(index)
    },
    promiseCB () {
      const domArr = [this.$refs.ball1, this.$refs.ball2, this.$refs.ball3]
      var p = Promise.resolve(0)
      for (let i = 0; i < domArr.length; i++) {
        p = p.then((res) => {
          return new Promise((resolve, reject) => {
            move(res, resolve)
          })
        })
      }
      function move (index = 0, resolve) {
        console.log(index)
        let counter = 0
        let timer = setInterval(() => {
          if (domArr[index].offsetLeft >= 325) {
            ++index
            clearInterval(timer)
            resolve && resolve(index)
          } else {
            domArr[index].style.left = `${++counter}px`
          }
        }, 10)
      }
      // new Promise((resolve, reject) => {
      //   move(0, resolve)
      // }).then((res) => {
      //   return new Promise((resolve, reject) => {
      //     move(res, resolve)
      //   })
      // }).then((res) => {
      //   move(res)
      // })
      return p.catch(err => console.error(`错误：${err}`))
    },
    generatorCB () {
      const domArr = [this.$refs.ball1, this.$refs.ball2, this.$refs.ball3]
      function move (index = 0) {
        console.log(index)
        return new Promise((resolve, reject) => {
          let counter = 0
          let timer = setInterval(() => {
            if (domArr[index].offsetLeft >= 325) {
              ++index
              clearInterval(timer)
              resolve(index)
            } else {
              domArr[index].style.left = `${++counter}px`
            }
          }, 10)
        }) 
      }
      function * spawn () {
        let ret = 0
        for (let i = 0; i < domArr.length; i++) {
          ret = yield move(ret)
        }
        console.log('generator finish')
        return '看完了撒'
      }
      function run (gen) {
        var g = gen()
        function next (index) {
          var ret = g.next(index)
          if (ret.done) {
            console.log(ret)
            return ret.value
          }
          ret.value.then((index) => {
            next(index)
          })
        }
        next(0)
      }
      return run(spawn)
    },
    async asyncCB () {
      const domArr = [this.$refs.ball1, this.$refs.ball2, this.$refs.ball3]
      function move (index = 0) {
        console.log(index)
        return new Promise((resolve, reject) => {
          let counter = 0
          let timer = setInterval(() => {
            if (domArr[index].offsetLeft >= 325) {
              ++index
              clearInterval(timer)
              resolve(index)
            } else {
              domArr[index].style.left = `${++counter}px`
            }
          }, 10)
        }) 
      }
      try {
        let ret = 0
        for (let i = 0; i < domArr.length; i++) {
          ret = await move(ret)
        }
      } catch (error) {
        console.error(error)
      }
      console.log('async finished')
      return '你还想看啥？'
    },
    async logInOrder () {
      function timeOut (ms) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(`时间：${ms}`)
          }, ms)
        })
      }
      var timeArr = [2000, 1000, 3000]
      const timeRet = timeArr.map(async (v, k) => {
        return await timeOut(v)
      })
      for (const text of timeRet) {
        console.log(await text)
      }
    }
  }
}
</script>