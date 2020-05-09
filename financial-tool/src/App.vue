<template>
  <div id="app">
    <header-tab></header-tab>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTab from './components/Header';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeaderTab
  }
}
</script>

<style>
  h2{
    color:#f00;
  }
  #app {
    text-align: center;
    color: #2c3e50;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    text-align: left;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>