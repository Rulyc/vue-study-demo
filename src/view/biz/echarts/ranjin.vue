<!--
表格中放入燃尽图
-->
<template>
  <div>
    <el-alert
      title="echarts-折线图"
      type="success"
      :closable="false">
    </el-alert>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="main" style="width: 100%;height:200px;"></div>
        <div class="main" style="width: 100%;height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <el-alert
          title="小技巧"
          type="info"
          :closable="false" style="text-align: left;">
          <div>
            <h5>去掉折线图的拐点</h5>
            <pre>
              symbol: 'none',  //取消折点圆圈
            </pre>
            </div>
          <div>
            <h5>自适应屏幕缩放</h5>
            <pre>
              pie.setOption(option);
              window.addEventListener("resize", () => { pie.resize();});
            </pre>
          </div>
          <div>
            <h5>折线图纵坐标取消网格线/刻度线/坐标值属性</h5>
            <pre>
              yAxis: {
                splitLine: {
                  show: false  // 取消网格线
                },
                axisTick: {
                  show: false // 去掉刻度线
                },
                axisLabel: {
                  show: false, //取消坐标值
                }
              },
            </pre>
          </div>
          <div>
            <h5>横坐标只显示最大值和最小值</h5>
            <pre>
              xAxis: {
                // 只显示最大值和最小值
                axisLabel: {
                 margin: 10,
                 interval: 100000,
                 showMinLabel: true,
                 showMaxLabel: true,
                 fontSize:10,
                 color: "blue" //刻度线标签颜色
                }
              },
            </pre>
          </div>
        </el-alert>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "one",
    data() {
      return {
        // 燃尽图的数据
        list:['2018.03.11', '2018.03.12','2018.03.13','2018.03.14', '2018.03.15',
          '2018.03.16','2018.04.11', '2018.04.12','2018.04.13','2018.04.14',
          '2018.04.14','2018.04.15','2018.05.11', '2018.05.12','2018.05.13','2018.05.14', '2018.05.15'],
      }
    },
    mounted(){
      this.dd();
      this.echarts()
    },
    methods: {
      /** 燃尽图*/
      dd(){
          var myChart = echarts.init(document.getElementsByClassName("main")[0])
          var max = 100
          var y = []
          var len = this.list.length
          for(var i = len; i>0;i--){
          y.push((max/(len-1))*(i-1))
          }
          var option = {
            visualMap: [{
              show: false,
              type: 'continuous',
              seriesIndex: 0,
              min: 0,
              max: 400
            }, {
              show: false,
              type: 'continuous',
              seriesIndex: 1,
              dimension: 0,
              min: 0,
              max: this.list.length - 1
            }],
           title: {
             text: '燃尽图：',
           },
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              splitLine: {
                show: false
              },
              data: this.list
            },
            yAxis: {
              type:'value',
              min:0,
              max:max,
              interval:25
            },
            series: [
              {
                name: '剩余工作量',
                type: 'line',
                // stack: '剩余工作量',
                data: [95,75,70,60,50,60,40,50,30,20,30,0],
                itemStyle: {
                  normal: {
                    // 折点颜色样式
                    color: '#f85ca4',
                    lineStyle: {
                      // 折线颜色样式
                      color: '#f85ca4'
                    }
                  }
                },
                // data: this.opinionData,
              },
              {
                name: '任务量',
                type: 'line',
                data: y,
                symbol: 'none',  //取消折点圆圈
                itemStyle: {
                  normal: {

                    // 折点颜色样式
                    color: '#99adf3',
                    lineStyle: {
                      // 折线颜色样式
                      color: '#99adf3',
                      // type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                  }
                },
              },
            ]
          }
          myChart.setOption(option)
          window.addEventListener("resize", () => { myChart.resize();});
        },
      echarts(){
        var myChart1 = echarts.init(document.getElementsByClassName("main")[1])
        var data = [
         ["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],
         ["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],
         ["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],
         ["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],
         ["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],
         ["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],
         ["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],
         ["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],
         ["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],
         ];
        var dateList = data.map(function (item) {
          return item[0];
        });
        var valueList = data.map(function (item) {
          return item[1];
        });

       var option = {
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
            max: dateList.length - 1
          }],
          title: [{
            left: 'center',
          }],
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [{
            data: dateList
          }],
          yAxis: [{
            splitLine: {show: false}
          }],
          grid: [{
            bottom: '60%'
          }],
          series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
          }]
        };
        myChart1.setOption(option)
        window.addEventListener("resize", () => { myChart1.resize();});
      }
    },
  }
</script>

<style lang="scss">
</style>

