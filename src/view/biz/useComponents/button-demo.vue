<template>
  <div>
    <el-alert
      title="组件封装之button按钮Demo"
      type="success"
      :closable="false">
    </el-alert>
    <el-row>
<!--      <c-button>默认按钮</c-button>-->
<!--      <c-button size="large">large大按钮</c-button>-->
<!--      <c-button size="small">small小按钮</c-button>-->
    </el-row>
    <el-row>
      <!-- 如果子组件中没有$emit方法，则@click会监听不到，即不执行；需要写@click.native才可以     -->
<!--      <c-button size="large" @click.native="defaultClick">默认按钮</c-button>-->
<!--      <c-button size="large" type="primary" @click.native="primaryClick">primary</c-button>-->
<!--      <c-button size="large" type="warning" @click="warningClick">warning</c-button>-->
<!--      <c-button size="large" type="success" :disabled="true">success</c-button>-->
<!--      <c-button size="large" type="info">info</c-button>-->
<!--      <c-button size="large" type="danger">danger</c-button>-->
    </el-row>
    <el-row>
      <c-button type="primary">primary按钮</c-button>
      <c-button type="warning">warning按钮</c-button>
      <c-button type="success">success按钮</c-button>
      <c-button type="info">info按钮</c-button>
      <c-button type="danger">danger按钮</c-button>
      <c-button type="default">default按钮</c-button>
      <c-button type="text">text按钮</c-button>
    </el-row>
    <h2>禁用按钮</h2>
    <el-row>
      <c-button type="primary" disabled>primary按钮</c-button>
      <c-button type="warning" disabled>warning按钮</c-button>
      <c-button type="success" disabled>success按钮</c-button>
      <c-button type="info" disabled>info按钮</c-button>
      <c-button type="danger" disabled>danger按钮</c-button>
      <c-button type="default" disabled>default按钮</c-button>
      <c-button type="text" disabled>text按钮</c-button>
    </el-row>
    <h2>plain</h2>
    <el-row>
      <c-button plain>朴素按钮</c-button>
      <c-button type="primary" plain>primary按钮</c-button>
      <c-button type="warning" plain>warning按钮</c-button>
      <c-button type="success"plain>success按钮</c-button>
      <c-button type="info" plain>info按钮</c-button>
      <c-button type="danger" plain>danger按钮</c-button>
    </el-row>
    <h2>plain && disabled</h2>
    <el-row>
      <c-button plain disabled>朴素按钮</c-button>
      <c-button type="primary" disabled plain>primary按钮</c-button>
      <c-button type="warning" disabled plain>warning按钮</c-button>
      <c-button type="success" disabled plain>success按钮</c-button>
      <c-button type="info" disabled plain>info按钮</c-button>
      <c-button type="danger" disabled plain>danger按钮</c-button>
    </el-row>
    <h2>按钮尺寸</h2>
    <el-row>
      <c-button @click="defaultClick">默认</c-button>
      <c-button size="large">large按钮</c-button>
      <c-button size="small">small按钮</c-button>
      <c-button size="mini">mini按钮</c-button>
    </el-row>

    <h2>圆角按钮</h2>
    <el-row>
      <c-button radius>默认</c-button>
      <c-button size="large" radius>large按钮</c-button>
      <c-button size="small" radius>small按钮</c-button>
      <c-button size="mini" radius>mini按钮</c-button>
    </el-row>

    <h2>圆形按钮</h2>
    <el-row>
      <c-button plain disabled icon="c-icon-shangchuan" circular></c-button>
      <c-button type="primary" size="large"  plain icon="c-icon-xiazai" circular></c-button>
      <c-button type="warning" size="small" plain icon="c-icon-icon_loading" circular></c-button>
      <c-button type="success"  plain icon="c-icon-setup" circular></c-button>
      <c-button type="info"  plain icon="c-icon-setup" circular></c-button>
      <c-button type="danger"  size="mini" plain icon="c-icon-setup" circular></c-button>
    </el-row>

    <h2>icon,默认居左</h2>
    <el-row>
      <c-button plain icon="c-icon-shangchuan">朴素按钮</c-button>
      <c-button type="primary"  plain icon="c-icon-xiazai">primary按钮</c-button>
      <c-button type="warning" plain loading>warning按钮</c-button>
      <c-button type="success"  plain icon="c-icon-setup">success按钮</c-button>
      <c-button type="info"  plain icon="c-icon-setup">info按钮</c-button>
      <c-button type="danger"  plain icon="c-icon-setup">danger按钮</c-button>
    </el-row>

    <h2>iconPosition,默认居左，加入iconPositon="right"居右</h2>
    <el-row>
      <c-button plain icon="c-icon-shangchuan" iconPositon="right">朴素按钮</c-button>
      <c-button type="primary"  plain icon="c-icon-xiazai" iconPositon="right">primary按钮</c-button>
      <c-button type="warning"  plain loading iconPositon="right">warning按钮</c-button>
      <c-button type="success"  plain icon="c-icon-setup" iconPositon="right">success按钮</c-button>
      <c-button type="info"  plain icon="c-icon-setup" iconPositon="right">info按钮</c-button>
      <c-button type="danger"  plain icon="c-icon-setup" iconPositon="right">danger按钮</c-button>
    </el-row>

    <h2>按钮组合</h2>
    <el-row>
      <c-button-group>
        <c-button  icon="c-icon-shangchuan" type="primary" iconPositon="right">朴素按钮</c-button>
        <c-button  icon="c-icon-xiazai" type="primary" iconPositon="right">primary按钮</c-button>
        <c-button  icon="c-icon-xiazai" type="primary" iconPositon="right">primary按钮</c-button>
        <c-button  icon="c-icon-xiazai" type="primary" iconPositon="right">primary按钮</c-button>
      </c-button-group>
    </el-row>

    <h2>按钮组合</h2>
    <el-row>
      <c-button-group>
        <c-button plain  icon="c-icon-shangchuan" type="primary" iconPositon="right">朴素按钮</c-button>
        <c-button plain icon="c-icon-xiazai" type="primary" iconPositon="right">primary按钮</c-button>
        <c-button plain icon="c-icon-xiazai" type="primary" iconPositon="right">primary按钮</c-button>
        <c-button plain icon="c-icon-xiazai" type="primary" iconPositon="right">primary按钮</c-button>
      </c-button-group>
    </el-row>
  </div>
</template>

<script>
  // import cButton from '@/components/self-components/c-button'
  import axios from 'axios'
  import cButton from '@/components/button/button'
  export default {
    name: "Demo01",
    components:{
      cButton
    },
    mounted(){
      // axios.get('http://localhost:3000/demo')
      //   .then(e => {
      //     console.log(e,'ggggggggggggg')
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
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
