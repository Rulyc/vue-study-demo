<template>
  <div>
    <el-alert
      title="组件封装第一篇"
      type="success"
      :closable="false">
    </el-alert>
    <el-row>
      <c-button>默认按钮</c-button>
      <c-button size="large">large大按钮</c-button>
      <c-button size="small">small小按钮</c-button>
    </el-row>
    <el-row>
      <!-- 如果子组件中没有$emit方法，则@click会监听不到，即不执行；需要写@click.native才可以     -->
      <c-button size="large" @click.native="defaultClick">默认按钮</c-button>
      <c-button size="large" type="primary" @click.native="primaryClick">primary</c-button>
      <c-button size="large" type="warning" @click="warningClick">warning</c-button>
      <c-button size="large" type="success" :disabled="true">success</c-button>
      <c-button size="large" type="info">info</c-button>
      <c-button size="large" type="danger">danger</c-button>
    </el-row>
  </div>
</template>

<script>
  import cButton from '@/components/self-components/c-button'
  export default {
    name: "Demo01",
    components:{
      cButton
    },
    methods:{
      /** defalut的点击事件 */
      defaultClick(){
        alert("我是default")
      },
      /** primary的点击事件 */
      primaryClick(){
        alert("我是primary")
      },
      /** warning的点击事件 */
      warningClick(){
        alert("我是warning")
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-row{
  margin:10px;
}
</style>
