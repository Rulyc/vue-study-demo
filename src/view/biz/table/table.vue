<!--
表格中存在tree,合并列问题
-->
<template>
  <div>
    <h3>动态合并表格列</h3>
    <el-table
      :data="tableData"
      height="500"
      :span-method="objectSpanMethod"
      style="width: 100%;margin-bottom: 20px;"
      default-expand-all
      row-key="id"
      border @expand-change="expandChange">
      <el-table-column
        show-overflow-tooltip
        width="200px"
        prop="objectName"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="workstate"
        label="工作项状态">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="workProgress"
        label="工作项进展">
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
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
        spanArr: [],
        row: [],
        expandedRows: false,
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
          }
        ],
        tableData: [{
          id: 1,
          num: 6,
          objectName: '项目1',
          name: '张三张三张三张三',
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
            name: '张三张三张三张三',
            workstate: '正常',
            workProgress: '50%',
            timelong: '3',
            weight: '10',
            selfRating: '10',
            remarks: '测试项',
          },{
            id: '1-2',
            objectName: '工作项2',
            name: '张三张三张三张三',
            workstate: '正常',
            workProgress: '50%',
            timelong: '3',
            weight: '10',
            selfRating: '10',
            remarks: '测试项',
          }]
        },
          {
            id: '2',
            objectName: '项目2',
            name: '张三张三张三张三',
            workstate: '',
            workProgress: '',
            timelong: '',
            weight: '',
            selfRating: '',
            remarks: '',
            children: [{
              id: '2-1',
              objectName: '工作项1',
              name: '张三张三张三张三',
              workstate: '正常',
              workProgress: '50%',
              timelong: '3',
              weight: '10',
              selfRating: '10',
              remarks: '测试项',
            },
              {
                id: '2-2',
                objectName: '工作项2',
                name: '张三张三张三张三',
                workstate: '正常',
                workProgress: '50%',
                timelong: '3',
                weight: '10',
                selfRating: '10',
                remarks: '测试项',
              },{
                id: '2-3',
                objectName: '工作项3',
                name: '张三张三张三张三',
                workstate: '正常',
                workProgress: '50%',
                timelong: '3',
                weight: '10',
                selfRating: '10',
                remarks: '测试项',
              },{
                id: '2-4',
                objectName: '工作项3',
                name: '张三张三张三张三',
                workstate: '正常',
                workProgress: '50%',
                timelong: '3',
                weight: '10',
                selfRating: '10',
                remarks: '测试项',
              },{
                id: '2-5',
                objectName: '工作项3',
                name: '张三张三张三张三',
                workstate: '正常',
                workProgress: '50%',
                timelong: '3',
                weight: '10',
                selfRating: '10',
                remarks: '测试项',
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
              name: '李四',
              workstate: '正常',
              workProgress: '50%',
              timelong: '3',
              weight: '10',
              selfRating: '10',
              remarks: '测试项',
            }]
          }
        ],
      }
    },
    mounted(){
      this.tableData.forEach((item,index)=>{
        item.show = true
      })
      let arrObject = []
      this.tableData.forEach((item,index)=>{
        arrObject.push(item)
        if(item.children){
          item.children.forEach((it,index)=>{
            arrObject.push(it)
          })
        }
      })
      this.setdates(arrObject)
    },
    methods:{
      /** 合并列数的方法 */
      setdates (arr) {
        // eslint-disable-next-line one-var
        var obj = {}, k;
        for (var i = 0, len = arr.length; i < len; i++) {
          k = arr[i].name;
          if (obj[k]) { obj[k]++; } else { obj[k] = 1; }
        }
        console.log(obj, '88')
        // 保存结果{el-'元素'，count-出现次数}
        for (var o in obj) {
          console.log(typeof (o))
          // if (o === 'undefined') {
          //   this.spanArr.push(0) // 0代表不合并
          // } else {
            for (let i = 0; i < obj[o]; i++) {
              if (i === 0) {
                this.spanArr.push(obj[o])
              } else {
                this.spanArr.push(0) // 0代表不合并
              }
            }
          }
        // }
        console.log(this.spanArr, 'uuuuuu');
      },
      /** 表格中树展开或关闭触发事件 */
      expandChange (row, expandedRows) {
        let arrObject = [] // 接收表格中树数据的转化
        this.spanArr = []
        this.tableData.forEach((item, index) => {
          // show字段主要是用来区分当前表格中哪些树是展开的
          if (row.id === item.id) {
            // 如果是当前点击的行，就将当前是否展开的属性赋值给show这个字段
            item.show = expandedRows
          }
          // 得到表格中数据的集合
          arrObject.push(item)
          // 如果字段show为true(树展开)
          if (item.show) {
            if (item.children) {
              item.children.forEach((it, index) => {
                arrObject.push(it)
              })
            }
          } else {
            // 节点是关闭状态  如果数据存在子节点
            if (item.children) {
              // 节点关闭状态 ，如果是表格中最后一棵树，需要push进数组中
              if (item === this.tableData[this.tableData.length - 1]) {
                item.children.forEach((it, index) => {
                  arrObject.push(it)
                })
              } else {
                // 其他情况，push任意值进数组，但不能不push
                item.children.forEach((it, index) => {
                  arrObject.push(22)
                })
              }
            }
          }
        })
        console.log(arrObject, 'arrObject')
        // 调用合并列数的方法  0 为不合并
        this.setdates(arrObject)
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        // console.log(row,rowIndex,columnIndex ,'eee')
        if (columnIndex == 3 || columnIndex == 4 || columnIndex == 5) {
          let _row = this.spanArr[rowIndex] ?  this.spanArr[rowIndex] : 0
          console.log(_row,'v')
          return {
            rowspan: _row,
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

