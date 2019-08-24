<!--
折线图
-->
<template>
  <div>
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        align="center"
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        label="燃尽图">
        <template slot-scope="scope">
          <div class="main" style="width: 300px;height:80px; left:10%"></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="milepostRow"
        align="center"
        label="步骤条">
        <template slot-scope="scope">
          <div :style="scope.row.milepostRow.milepostActive == 1 || scope.row.milepostRow.milepostActive == 2 ? Style: Style1">
            <el-steps :active="scope.row.milepostRow.milepostActive" >
              <el-step v-for="(value, key) in scope.row.milepostRow.milepost"
                       v-if="key<scope.row.milepostRow.milepostActive+1"
                       v-show="key+1==scope.row.milepostRow.milepostActive ||
                              key+1 == scope.row.milepostRow.milepostActive-1 ||
                              key+1==scope.row.milepostRow.milepostActive+1"
                       :class="scope.row.milepostRow.milepostActive== key+1 ? scope.row.milepostRow.stepActive: '' "
                       :title="value.title"
              >
              </el-step>
            </el-steps>
          </div>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "one",
    data() {
      return {
        tableData: [],
        Style: 'position: relative; left:10%; padding-right:20% ',
        Style1: 'position: relative; left:10%;'
      }
    },
    mounted(){
        this.getList()
        setTimeout(()=>{

        },1000)
    },
    methods:{
        getList(){
            this.tableData = [
              {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                list:['迭代一', '迭代二','迭代三'],
                milepostRow:{
                  milepost: [
                    {title: '迭代一' },
                    {title: '迭代二'},
                    {title: '迭代三'},
                  ],
                  // 默认步骤数
                  milepostActive: 2,
                  // 动态添加类名
                  stepActive: 'stepActive'
                }

              },
              {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                list:['迭代一', '迭代二', '迭代三', '迭代四', '迭代五'],
                milepostRow: {
                  milepost: [
                    {title: '迭代一' },
                    {title: '迭代二'},
                    {title: '迭代三'},
                    {title: '迭代四'},
                    {title: '迭代五'}
                  ],
                  // 默认步骤数
                  milepostActive: 3,
                  // 动态添加类名
                  stepActive: 'stepActive'
                },
              }
            ]
          setTimeout(()=>{
            this.dd()
          })

        },
      dd(){
        for(var i = 0; i< this.tableData.length;i++){
          var myChart = echarts.init(document.getElementsByClassName("main")[i])
          var option = {
//            title: {
//              text: '燃尽图：',
//            },
            tooltip: {
              trigger: 'axis'
            },
//            legend: {
//              right: 40,
//              data: this.tableData[i].list
//            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              splitLine: {
                show: false
              },
              data: this.tableData[i].list
            },
            yAxis: {
              splitLine: {
                show: false
              },
              type: 'value',
              splitNumber:3
          },
            series: [
              {
                name: '剩余工作量',
                type: 'line',
                // stack: '剩余工作量',
                data: [5, 4.5, 2.8],
                itemStyle: {
                  normal: {
                    // 折点颜色样式
                    color: 'green',
                    lineStyle: {
                      // 折线颜色样式
                      color: 'green'
                    }
                  }
                },
                // data: this.opinionData,
              },
              {
                name: '任务量',
                type: 'line',
                data: [6,4,2,0],
                itemStyle: {
                  normal: {

                    // 折点颜色样式
                    color: 'orange',
                    lineStyle: {
                      // 折线颜色样式
                      color: 'orange',
                      type:'dashed'
                    }
                  }
                },
              },
            ]
          }
          myChart.setOption(option)
        }

      },
    }
  }
</script>

<style lang="scss">
  .el-step.is-horizontal.stepActive{
    .el-step__head.is-finish{
      .el-step__line{
        // 当前步骤数横线样式设置
        .el-step__line-inner{
          width: 50% !important;
          border-width: 1px !important;
        }
      }
      // 当前步骤数圆圈样式设置
      .el-step__icon.is-text{
        background: #409eff;
        color:#fff;
      }
    }
  }
  .el-table td:last-child div {
    text-align: left;

  }
</style>

