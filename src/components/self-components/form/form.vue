/**
* 表单封装：分为三层
   form 中
*/
<template>
    <div>
      <form>
        <slot></slot>
      </form>
    </div>
</template>

<script>
  export default {
    name: "cForm",
    props:{
      // 表单控件绑定的数据对象
      model:{
        type:Object,
      },
      // 表单的校验规则定义
      rules: {
        type:Object
      }
    }
  }
</script>

<style scoped>

</style>
