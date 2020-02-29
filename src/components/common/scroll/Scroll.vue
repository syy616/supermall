<!-- 滑动插件封装 -->
<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot> 
    </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
    },
    pullUpLoad: {
        type: Boolean,
        default: false
    }
    },
data() {
return {
    bs:null,
    message:"泥猴"
}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {
    //创建Bs对象
    this.bs=new BScroll(this.$refs.wrapper,{
    click: true,
    probeType: this.probeType,
    pullUpLoad: this.pullUpLoad
    })

    //2.监听滚动位置
    if(this.probeType ===2 || this.probeType === 3){
    this.bs.on('scroll',(position)=>{
    this.$emit('scroll', position)
    })
 
    }

    // console.log(this.bs);
    // this.bs.refresh();
    // 3.监听上拉事件
    if(this.pullUpLoad){
    this.bs.on('pullingUp', () => {
    this.$emit('pullingUp')
    })
    }

},
methods:{
    scrollTo(x, y, time=300) {
    this.bs && this.bs.scrollTo(x, y, time)
    },
    finishPullUp() {
    this.bs && this.bs.finishPullUp()
    },
    refresh(){
    this.bs && this.bs.refresh()
    }
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>