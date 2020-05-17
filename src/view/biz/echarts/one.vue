<template>
  <div>
<!--    <loading></loading>-->
    <el-alert
      title="echarts-柱状图"
      type="success"
      :closable="false">
    </el-alert>
    <div id="main" style="width: 500px;height: 250px;"></div>
    <div  @click="submit">4444444444</div>
    <vue-button type="warn">警告按钮</vue-button>
    <vue-msg ref="msg" ></vue-msg>
  </div>
</template>

<script>
  // import vueMsg from '@/plugins/msg/msg'
  import echarts from 'echarts'
  import loading from '@/components/loading'
  export default {
    name: "one",
    components:{
      loading,
    },
    mounted(){
      this.dd()
    },
    methods:{
      submit(){
        this.$nextTick(()=>{
          console.log(this.$refs.msg)
          this.$refs.msg.msgPlugin("请输入电话", 5000)
        })
      },
      dd(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
          // 鼠标移入显示的提示信息
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}"
          },
          // 横轴坐标值
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          // 纵轴坐标值
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
    }
  }
</script>

<style scoped>

</style>
