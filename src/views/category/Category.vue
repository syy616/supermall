<template>
  <div class="cataegory" ref="aaa">
     <ul class="content">
       <li>1商品1</li>
       <li>2商品1</li>
       <li>3商品1</li>
       <li>4商品1</li>
       <li>5商品1</li>
       <li>6商品1</li>
       <li>7商品1</li>
       <li>8商品1</li>
       <li>9商品1</li>
       <li>10商品1</li>
       <li>11商品1</li>
       <li>12商品1</li>
       <li>13商品1</li>
       <li>14商品1</li>
       <li>15商品1</li>
       <li>16商品1</li>
       <li>17商品1</li>
       <li>18商品1</li>
       <li>19商品1</li>
       <li>20商品1</li>
       <li>21商品1</li>
       <li>22商品1</li>
       <li>23商品1</li>
       <li>24商品1</li>
       <li>25商品1</li>
       <li>26商品1</li>
       <li>27商品1</li>
       <li>28商品1</li>
       <li>29商品1</li>
       <li>30商品1</li>
       <li>31商品1</li>
       <li>32商品1</li>
       <li>33商品1</li>
       <li>34商品1</li>
       <li>35商品1</li>
       <li>36商品1</li>
       <li>37商品1</li>
       <li>38商品1</li>
       <li>39商品1</li>
       <li>40商品1</li>
       <li>41商品1</li>
       <li>42商品1</li>
       <li>43商品1</li>
       <li>44商品1</li>
       <li>45商品1</li>
       <li>46商品1</li>
       <li>47商品1</li>
       <li>48商品1</li>
       <li>49商品1</li>
       <li>50商品1</li>
       <li>51商品1</li>
       <li>52商品1</li>
       <li>53商品1</li>
       <li>54商品1</li>
       <li>55商品1</li>
       <li>56商品1</li>
       <li>57商品1</li>
       <li>58商品1</li>
       <li>59商品1</li>
       <li>60商品1</li>
       <li>61商品1</li>
       <li>62商品1</li>
       <li>63商品1</li>
       <li>64商品1</li>
       <li>65商品1</li>
       <li>66商品1</li>
       <li>67商品1</li>
       <li>68商品1</li>
       <li>69商品1</li>
       <li>70商品1</li>
       <li>71商品1</li>
       <li>72商品1</li>
       <li>73商品1</li>
       <li>74商品1</li>
       <li>75商品1</li>
       <li>76商品1</li>
       <li>77商品1</li>
       <li>78商品1</li>
       <li>79商品1</li>
       <li>80商品1</li>
       <li>81商品1</li>
       <li>82商品1</li>
       <li>83商品1</li>
       <li>84商品1</li>
       <li>85商品1</li>
       <li>86商品1</li>
       <li>87商品1</li>
       <li>88商品1</li>
       <li>89商品1</li>
       <li>90商品1</li>
       <li>91商品1</li>
       <li>92商品1</li>
       <li>93商品1</li>
       <li>94商品1</li>
       <li>95商品1</li>
       <li>96商品1</li>
       <li>97商品1</li>
       <li>98商品1</li>
       <li>99商品1</li>
       <li>100商品1</li>
     </ul>
  </div>
</template>

<script>
import BScroll  from 'better-scroll'

export default {
name:'Category',
  data() {
    return {
      betterscroll:null
    }
  },
  components: {

  },
  created(){

  },
  mounted(){
    this.betterscroll = new BScroll('.cataegory',{
      probeType:2,
      click:true,
      pullUpLoad:true
    });
    this.betterscroll.on('scroll',(position)=>{
      //console.log(position)
    })
    this.betterscroll.on('pullingUp',()=>{
      //上拉加载更多
      //这里可以请求第二页数据，请求完成后，并且将新的数据展示后必须要调用
      //finishPullUp()
      setTimeout(()=>{
        this.betterscroll.finishPullUp();
        console.log("上拉加载")
      },2000)
    })
  }
}
</script>

<style scoped>
.cataegory{
  height: 150px;
  width: 100%;
  background: #cccccc;
  overflow: hidden;
}
</style>
