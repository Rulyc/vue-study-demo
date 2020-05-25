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
</style>
