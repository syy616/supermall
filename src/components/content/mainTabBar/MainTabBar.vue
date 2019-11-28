<template>
  <div class="app">
    <FooterBar> 
        <FooterItem path="/home" activeColor="pink">
          <img slot="item-icon" src="~assets/images/tabbar/home.svg"  alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg"  alt="">
          
          <div slot="item-text">首页</div>
        </FooterItem>
        <FooterItem path="/category" activeColor="pink">
          <img slot="item-icon" src="~assets/images/tabbar/category.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/category_active.svg" alt="">
          
          <div slot="item-text">分类</div>
        </FooterItem>
        <FooterItem path="/cart" activeColor="pink">
          <img slot="item-icon" src="~assets/images/tabbar/shopcart.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/shopcart_active.svg" alt="">
          
          <div slot="item-text">购物车</div>
        </FooterItem>
        <FooterItem path="/profile" activeColor="deepPink">
          <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt="">
          <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt="">
          
          <div slot="item-text">我的</div>
        </FooterItem>
      </FooterBar> 
  </div>
</template>

<script>
 import FooterBar from "../tabbar/Footer"
 import FooterBarItem from "com/common/tabbar/FooterItem"

export default {
name:'MainTabBar',
  data() {
    return {
     
    }
  },
  components: {
   FooterBar,
   FooterBarItem
  }
}
</script>

<style scoped>

</style>
