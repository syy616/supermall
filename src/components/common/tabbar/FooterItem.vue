<template>
  <div id="footeritem" @click="chooseItem">
      <div id="barimg">
          <div v-if="!isActive"><slot name="item-icon"></slot></div>
          <div v-else><slot name="item-icon-active"></slot></div>
      </div>
      <div :style="activeStyle">
          <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
name:'FooterItem',
props:{
  path:String,
  activeColor:{
    type:String,
    default:'#ff5777'
  }
},
  data() {
    return {
      // isActive:true
    }
  },
  components: {

  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    chooseItem(){
        var that=this;
        this.$router.replace(this.path);        
    }
  }
}
</script>

<style scoped>
#footeritem{
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 49px;
  font-size: 14px;
}
#barimg{
  width: 24px;
  height: 24px;
  margin-top: 4px;
  vertical-align: middle;
  margin-bottom: 3px;
}
#barimg img{
  width: 100%;
  height: 100%;
}

</style>
