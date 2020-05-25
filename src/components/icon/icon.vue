<!--
* 矢量图标进行封装
-->
<template>
  <i class="c-icon" :class="name"></i>
</template>

<script>
  export default {
    name: "c-icon",
    props:{
      name:{ // 图标名字
        type:String,
        required:false,
        default:''
      }
    }
  }
</script>

<style scoped lang="scss">
  @keyframes spin{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  /deep/.c-icon.c-icon-icon_loading{
    animation: spin 3s infinite linear;
  }
</style>
