<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cFromItem",
    props:{
      // 表单的label元素
      label:{
        type:String,
        default:''
      },
      prop:{
        type:String
      }
    }
  }
</script>

<style scoped>

</style>
