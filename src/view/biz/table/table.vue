<!--
表格中存在tree,合并列问题
-->
<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      style="width: 100%;margin-bottom: 20px;"
      default-expand-all
      lazy="true"
      :load="load"
      row-key="id"
      border>
      <el-table-column
        width="200px"
        prop="objectName"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop="workstate"
        label="工作项状态">
      </el-table-column>
      <el-table-column
        prop="workProgress"
        label="工作项进展">
      </el-table-column>
      <el-table-column
        prop="name"
        label="评估人">
      </el-table-column>
      <el-table-column
        label="评估分数">
      </el-table-column>
      <el-table-column
        label="加减分说明">
      </el-table-column>
      <!--  处理人，处理分数，加减分说明循环处理      -->
      <el-table-column
        v-for="(item,key) in columns"
        :key="item.id"
        :label="item.nameDesc"
        :align="item.align"
        :width="item.width"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <span>{{ scope.$index==0 ? item.nameHandle : ''}}</span>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
  export default {
    name: "one",
    data() {
      return {
        columns: [
          {
            nameHandle: 'crl1',
            nameDesc:'处理人',
            sortable:false,
            align:'center',
            minWidth:'90px'
          },
          {
            nameHandle: 'fenshu',
            nameDesc:'处理分数',
            sortable:false,
            align:'center',
            minWidth:'85px'
          },
          {
            nameHandle: 'shuoming',
            nameDesc: '加减分说明',
            sortable:false,
            align:'center',
            minWidth:'110px'
          },
          {
            nameHandle: 'crl2',
            nameDesc:'处理人',
            sortable:false,
            align:'center',
            minWidth:'90px'
          },
          {
            nameHandle: 'fenshu',
            nameDesc:'处理分数',
            sortable:false,
            align:'center',
            minWidth:'85px'
          },
          {
            nameHandle: 'shuoming',
            nameDesc: '加减分说明',
            sortable:false,
            align:'center',
            minWidth:'110px'
          },
          {
            nameHandle: 'crl2',
            nameDesc:'处理人',
            sortable:false,
            align:'center',
            minWidth:'90px'
          },
          {
            nameHandle: 'fenshu',
            nameDesc:'处理分数',
            sortable:false,
            align:'center',
            minWidth:'85px'
          },
          {
            nameHandle: 'shuoming',
            nameDesc: '加减分说明',
            sortable:false,
            align:'center',
            minWidth:'110px'
          }
        ],
        tableData: [{
          id: 1,
          num: 6,
          objectName: '项目1',
          name: '张三',
          workstate: '',
          workProgress: '',
          timelong: '',
          weight: '',
          selfRating: '',
          remarks: '',
          // crl1: '处理人1',
          // crl2: '处理人2',
          // fenshu: '',
          children: [{
            id: '1-1',
            objectName: '工作项1',
            name: '',
            workstate: '正常',
            workProgress: '50%',
            timelong: '3',
            weight: '10',
            selfRating: '10',
            remarks: '测试项',
          }, {
            id: '1-2',
            objectName: '工作项2',
            name: '',
            workstate: '正常',
            workProgress: '50%',
            timelong: '4',
            weight: '10',
            selfRating: '10',
            remarks: '测试描述',
          }]
        },
          {
            id: '2',
            objectName: '项目2',
            name: '张三',
            workstate: '',
            workProgress: '',
            timelong: '',
            weight: '',
            selfRating: '',
            remarks: '',
            children: [{
              id: '2-1',
              objectName: '工作项1',
              name: '',
              workstate: '正常',
              workProgress: '50%',
              timelong: '3',
              weight: '10',
              selfRating: '10',
              remarks: '测试项',
            }, {
              id: '2-2',
              objectName: '工作项2',
              name: '',
              workstate: '正常',
              workProgress: '50%',
              timelong: '4',
              weight: '10',
              selfRating: '10',
              remarks: '测试描述',
            }]
          },
          {
            id: '3',
            num: 3,
            objectName: '项目3',
            name: '李四',
            workstate: '',
            workProgress: '',
            timelong: '',
            weight: '',
            selfRating: '',
            remarks: '',
            children: [{
              id: '3-1',
              objectName: '工作项1',
              name: '',
              workstate: '正常',
              workProgress: '50%',
              timelong: '3',
              weight: '10',
              selfRating: '10',
              remarks: '测试项',
            }, {
              id: '3-2',
              objectName: '工作项2',
              name: '',
              workstate: '正常',
              workProgress: '50%',
              timelong: '4',
              weight: '10',
              selfRating: '10',
              remarks: '测试描述',
            }]
          }
        ],
      }
    },
    mounted(){

    },
    methods:{
      load(tree, treeNode, resolve) {
        console.log(tree,treeNode)
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // console.log(row,rowIndex,columnIndex ,'eee')
        if (columnIndex == 3 || columnIndex == 4 || columnIndex == 5) {
          return {
            rowspan: row.num,
            colspan: 1
          }
        }
        if (columnIndex>5) {
          return {
            rowspan: columnIndex+10,
            colspan: 1
          }
        }
      }
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

