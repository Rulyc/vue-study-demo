<!--
折线图
-->
<template>
  <div>
    <el-alert
      title="echarts-折线图"
      type="success"
      :closable="false">
    </el-alert>
    <div id="main" style="width: 350px;height: 150px;"></div>
  </div>

</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "one",
    data() {
      return {
      }
    },
    mounted(){
      this.dd()
    },
    methods:{
      dd(){
        var myChart = echarts.init(document.getElementById("main"))
        var option = {
          // 标题
          titile: {
            text: '折线图堆叠'
          },
          // 鼠标移入提示
          tooltip: {
            trigger: 'axis'
          },
          // 标注
          legend: {
            data: ['邮件营销', '联盟广告']
          },
          // 网格位置设置
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            }
          ]
        }
        myChart.setOption(option)
      },
    }
  }
</script>

<style scoped>

</style>
