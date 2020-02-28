<template>
  <div id="footer">
      <slot> </slot>
    </div>
</template>

<script>
export default {
name:'Footer',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
#footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 0px rgba(100,100,100,0.2); 
  display: flex;
}
</style>
