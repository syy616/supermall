<!--  -->
<template>
<div class="back-up">
    <img src="~assets/images/common/top.png" alt="">
</div>
</template>

<script>
export default {
data() {
return {

}
},
//生命周期 - 创建完成（访问当前this实例）
created() {

},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {

}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.back-up{
position: fixed;
bottom: 60px;
right: 10px;
width: 43px;
height: 43px;
}
.back-up img{
    width:100%;
    height: 100%;

}
</style>