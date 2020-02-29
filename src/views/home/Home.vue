<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>  
    <TabControl class="tab-control" 
    :titles="['流行','新款','精选']"
    @tabClick="tabClickChange"
    ref="tabControl1" 
    v-show="isTabFixed"/>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
            >
    <home-swiper :banners="banners" @swiperimageload="swiperimageload"/>
    <RecommendView :recommend="recommend"></RecommendView>
    <FeatureView/>
    <TabControl :titles="['流行','新款','精选']"
                @tabClick="tabClickChange"
                ref="tabControl2"/>
    <goods-list :goods="showgoods" ></goods-list>
    </Scroll>
    <BcakTop @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/Feature'
 
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/tabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getHomeMultidata,getGoodsList} from 'network/home.js'
   import {debounce} from "common/untils";

  import Scroll  from 'components/common/scroll/Scroll'
  import BcakTop from 'components/content/backtop/Backtop'

export default {
name:'Home', 
 components: {
    
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BcakTop
  },
  data() {
    return {
      banners:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:"pop",
      isShowBackTop: false,
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  created(){
    //请求首页多个数据
    this.getHomeMultidata()
    //请求商品列表
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted(){

    //监听每张图片加载后，刷新scroll视图
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('itemImageLoad',()=>{
      // console.log('111111')
      refresh()
    })

    //赋值  找tabcontrol的offsettop，实现吸顶效果
    //组件没有offsettop属性，但是每个组件都有$el,可以获取每个组件里面的元素
    //可以获取元素的offsettop
    //这个计算的结果是不准确的，因为图片有可能还没加载完，所以计算不正确
    // console.log(this.$refs.tabControl.$el.offsetTop);
    //应该监听轮播图的加载，如果加载完成就再计算其offsettop
    // this.tabOffsetTop=0;
  },
  computed:{
    showgoods(){
      return this.goods[this.currentType].list;
    }
  },
      destroyed() {
      console.log('home destroyed');
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
  methods:{
    // 网络请求相关方法
    getHomeMultidata() {
        //1.请求多个数据
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list;

    });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getGoodsList(type,page).then(res=>{
      console.log(res.data);
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1;
      //完成上拉加载更多
      this.$refs.scroll.finishPullUp()
      })
    },
    //事件监听相关方法
    tabClickChange(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex=index;
        this.$refs.tabControl2.currentIndex=index;

    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // 1.判断backtop是否显示
      this.isShowBackTop = (-position.y) > 1000

      //2.决定tapcontrol是否吸顶（position：fixed）
      this.isTabFixed = (-position.y)>this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperimageload(){
    console.log(this.$refs.tabControl2.$el.offsetTop);
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
    }
  }
}
</script>

<style scoped>
 #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
/*  这些是在浏览器原生滚动的时候的样式
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
    .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
