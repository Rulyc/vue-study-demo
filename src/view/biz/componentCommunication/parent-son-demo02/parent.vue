<template>
  <div>
    <el-alert
      title="是⾃⾏实现的 dispatch（派发） 和 broadcast ⽅法（广播）"
      type="success"
      :closable="false">
      <slot>
        <div>需要额外传入组件的name作为第一个参数</div>
        <div>无冒泡机制</div>
        <div>参数过多，可传入对象</div>
      </slot>
    </el-alert>
    <div class="parent-box">
      <div>我是父组件</div>
      <c-button @click="handleClick">触发事件</c-button>
      <son-component></son-component>

      <div>
        获取子组件中的数据:
        {{ params.name }} -- {{ params.age }} -- {{ params.title }}
      </div>
    </div>
  </div>
</template>

<script>
  import cButton from '@/components/self-components/c-button'
  import mixins from '@/assets/js/mixins'
  import sonComponent from './son'
  export default {
    name: "parentComponent",
    mixins:[mixins],
    components:{
      sonComponent,
      cButton
    },
    data(){
      return{
        params:{}
      }
    },
    mounted(){
      // 通过$on来监听子组件的派发事件
      this.$on('sendParent', this.sendParent)
    },
    methods:{
      handleClick(){
        // 自定义广播事件
        this.broadcast('sonComponent','on-message','父组件调用自定义broadcast方法获取数据')
      },
      sendParent(params){
       this.params = params
      }
    }
  }
</script>

<style lang="scss" scoped>
.parent-box{
  text-align: left;
  background-color: #ccc;
  /*color:#fff;*/
  padding:20px;
  div:not(:first-child){
    margin-top:10px
  }
}
</style>
