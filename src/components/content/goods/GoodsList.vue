<!--  -->
<template>
<div class="goods">
<GoodsListItem v-for="(item,index) in goods" :goodsItem="item" :key="index"/>  
</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
name:"GoodsList",
components:{
    GoodsListItem
},
props:{
    goods:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>