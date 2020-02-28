<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>  
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            >
            <!-- @pullingUp="loadMore"   -->
    <home-swiper :banners="banners"/>
    <RecommendView :recommend="recommend"></RecommendView>
    <FeatureView/>
    <TabControl class="tab-control" 
    :titles="['流行','新款','精选']"
    @tabClick="tabClickChange"/>
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
      isShowBackTop: false
    }
  },
  created(){
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted(){

    //监听每张图片加载后，刷新scroll视图
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('itemImageLoad',()=>{
      console.log('111111')
      refresh()
    })
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

      //  this.$refs.scroll.finishPullUp()
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
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    // loadMore() {
    //   this.getHomeGoods(this.currentType)
    // },
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

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
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
