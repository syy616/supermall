<template>
  <div id="app">

    <main-tabbar></main-tabbar>
    <router-view></router-view>
    <!-- 2020 -->
  </div>
</template>
<script>
  import MainTabbar from 'components/content/mainTabbar/MainTabBar'

export default {
  components:{
    MainTabbar,
    
  }  
}
</script>
<style lang="scss">
  @import './assets/css/base.css';
</style>
