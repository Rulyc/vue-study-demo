<template>
  <div class="markdown">
<!--    <div v-html="readme"></div> // 最后在页面上使用-->
    <readme></readme>
    <viewCard :isShow="isShow">
      <div slot="view">
        <c-button size="large" type="info">info</c-button>
      </div>
      <div slot="code">eeeeeeeeeeeeeeeeee</div>
    </viewCard>
  </div>

</template>

<script>
  import viewCard from '@/components/viewCard.vue'
  import readme from '@/explain/button.md'// 引入md文件
  import cButton from '@/components/self-components/c-button'

  export default {
    name: "button-md",
    components:{
      readme, cButton,viewCard
    },
    data(){
      return{
        // readme:this.md2html(readme),// 在data里边声明
        isShow:false,
      }
    },
  }
</script>

<style scoped>

</style>
