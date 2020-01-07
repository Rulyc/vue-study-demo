<template>
  <div>
    <el-alert
      title="ref：给元素或组件注册引⽤信息； $parent / $children：访问⽗ / ⼦实例。"
      type="success"
      :closable="false">
    </el-alert>
    <el-alert
      title="这两种方法的弊端是，无法在跨级或兄弟组件之间通信。"
      type="warning"
      :closable="false">
    </el-alert>
    <div class="parent-box">

      我是父组件
      <div>通过ref获取子组件中的数据：{{ titleRef }}</div>
      <div>通过ref调用子组件中定义的方法：{{ titleMethodRef }}</div>
      <div>通过$children获取子组件中的数据： {{ title$Son }}</div>
      <son-component ref="sonRef"></son-component>
    </div>
  </div>

</template>

<script>
  import sonComponent from './son'
  export default {
    name: "parent",
    components:{
      sonComponent
    },
    data(){
      return{
        titleRef:'', // 通过ref获取子组件中的数据
        titleMethodRef:'', // 通过ref调用子组件中的方法
        title$Son: '', // 通过$so获取子组件中的数据
        son$parent:'this.$parent.父中变量名', // 子组件获取父组件中的数据
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData(){
        const son = this.$refs.sonRef
        this.titleRef = son.title // 通过ref进行获取子组件的数据
        this.titleMethodRef = son.sonClick() // 通过ref调用子组件的方法
        this.title$Son = this.$children[0].titleSon // 通过$children获取子组件的数据
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
