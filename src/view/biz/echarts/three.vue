<!--
折线图
-->
<template>
  <div>
    <el-alert
      title="echarts-圆形图"
      type="success"
      :closable="false">
    </el-alert>
    <div id="main" style="width: 400px;height: 150px;"></div>
  </div>

</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "one",
    mounted(){
      this.dd()
    },
    methods:{
      dd(){
        var myChart = echarts.init(document.getElementById("main"))
        var option = {
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['视频广告','联盟广告','邮件营销','直接访问','搜索引擎']
          },
          tooltip:{
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
              ]
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
