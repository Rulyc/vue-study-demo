<template>
  <div class="son-box">
    我是子组件
    <div>
     子组件获取父组件的值： {{ getParent }}
    </div>
    <c-button @click="sonSendParent">子传递消息给父</c-button>
  </div>
</template>

<script>
  import cButton from '@/components/self-components/c-button'
  import mixins from '@/assets/js/mixins'
  export default {
    name: "sonComponent",
    mixins:[mixins],
    components:{
      cButton
    },
    data(){
      return{
        getParent: ''
      }
    },
    mounted(){
      // 通过$on来监听父组件广播的事件
      this.$on('on-message', this.showMessage)
    },
    methods:{
      showMessage(text){
        this.getParent = text
      },
      sonSendParent(){
       const params = {
         name:'张三',
         age:18,
         title:'父组件调用自定义dispatch方法获取数据'
       }
       debugger
        // 自定义派发事件，给父级组件传递消息
        this.dispatch('parentComponent','sendParent',params)
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
