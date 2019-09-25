<template>
  <div>
    <h3>柱状图demo</h3>
    <div id="main" style="width: 500px;height: 250px;"></div>
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
