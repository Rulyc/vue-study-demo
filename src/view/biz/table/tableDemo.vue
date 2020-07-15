<template>
 <div>
   <el-table
     :data="tableData"
     style="width: 100%;margin-bottom: 20px;"
     height="400"
     :span-method="arraySpanMethod"
     row-key="id"
     border
     default-expand-all
     :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
     <el-table-column
       prop="date"
       label="所属部门"
       sortable
       width="180">
     </el-table-column>
     <el-table-column
       prop="name"
       label="姓名"
       sortable
       width="180">
     </el-table-column>
     <el-table-column
       prop="address"
       label="报销金额">
     </el-table-column>
   </el-table>
 </div>
</template>

<script>
    export default {
        name: "tableDemo",
      data() {
        return {
          tableData: [{
            id: 1,
            date: '合计',
            name: '40',
            address: '',  // 注意有孩子节点，存在合并的，如合并3列，那么保留第一列得字段数据，二、三列数据要处理为''
            children: [{
              id: 2,
              date: '合计',
              name: '合计333333333',
              address: '',
              children: [{
                id: 311,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 321,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }]
            }, {
              id: 3,
              date: '合计',
              name: '王小虎',
              address: '',
              children: [{
                id: 31,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }]
            }, {
              id: 4,
              date: '合计',
              name: '王小虎',
              address: '',
               children: [{
                 id: 3122,
                 date: '2016-05-01',
                 name: '王小虎',
                 address: '上海市普陀区金沙江路 1519 弄'
               }, {
                 id: 3222,
                 date: '2016-05-01',
                 name: '王小虎',
                 address: '上海市普陀区金沙江路 1519 弄'
               }]
            }]
          }],
        };
      },
      methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
          if (row.children) {
            return {
              rowspan: 1,
              colspan: 2
            };

            }else {
            return {
              rowspan: 1,
              colspan: 1
            };
          }
        },
      }
    }
</script>

<style lang="scss" scoped>
  /** 去掉表格tree结构图标 */
 /deep/ .el-table [class*=el-table__row--level] .el-table__expand-icon{
    display: none !important;
  }
 /deep/ .el-table__indent{
    padding-left: 0px !important;
  }
 /deep/.el-table__placeholder{
   width: 0 !important;
 }
  /** 去掉表格tree结构图标 end */
</style>
