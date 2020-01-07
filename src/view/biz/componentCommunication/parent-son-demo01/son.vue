<template>
  <div class="son-box">
    我是子组件
    <div>
     子组件获取父组件的值： {{ getParent }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "son",
    data(){
      return{
        title:'this.$refs.sonRef.子中变量名',
        titleSon:'this.$children[0].子中变量名',
        getParent:'this.$parent.父中变量名'
      }
    },
    mounted(){
      this.getParent = this.$parent.son$parent // 通过$parent获取父组件中的数据
    },
    methods:{
      sonClick(){
        const a = 'this.$refs.sonRef.子中定义的方法名';
        return a;
      }
    }
  }
</script>

<style lang="scss" scoped>
.son-box{
  background-color: #67c23a;
  color:#fff;
  padding:20px;
}
</style>
