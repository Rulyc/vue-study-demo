<template>
  <div>
<!--    <div v-html="readme"></div> // 最后在页面上使用-->
<!--    <readme></readme>-->
  </div>

</template>

<script>
  // import readme from '@/explain/button.md'// 引入md文件
  export default {
    name: "button-md",
    components:{
      // readme
    },
    data(){
      return{
        // readme:this.md2html(readme),// 在data里边声明
      }
    },
  }
</script>

<style scoped>

</style>
