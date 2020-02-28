<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar> 
    <!-- 2020 16:47-->
  </div>
</template>
<script>
  import MainTabbar from 'components/content/mainTabBar/MainTabBar'

export default {
  components:{
    MainTabbar,
    
  }  
}
</script>
<style lang="scss">
  @import './assets/css/base.css';
</style>
