<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-list-item">
        <router-link class="nav-item" to="/">首页</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-item" to="/discounted-cashflow">绝对估值计算法</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-item" to="/price-earning">市盈率</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-item" to="/sharp-ratio">夏普比率</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import './index.scss' 
</script>

<style>
  img {
    width: 500px;
  }
</style>
