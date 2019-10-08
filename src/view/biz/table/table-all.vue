<!--
表格中存在tree,算总价问题
-->
<template>
  <div>
    <el-alert
      title="表格增加合计行，自动计算部分列的数据和"
      type="success"
      :closable="false">
    </el-alert>
    <el-table
      :data="tableData"
      height="500"
      style="width: 100%;margin-bottom: 20px;"
      default-expand-all
      :show-summary="true"
      :summary-method="getSummariesAdd"
      row-key="id"
      border>
      <el-table-column
        show-overflow-tooltip
        prop="objectName"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="name"
        label="评估人"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="workstate"
        label="工作状态"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="workProgress"
        label="进度"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="timelong"
        label="工时"
      >
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="weight"
        label="权重（%）"
      >
        <template v-if="!scope.row.children"
                  slot-scope="scope">
          <el-input v-model="scope.row.weight"
                    placeholder="请输入"
                    @change="changeweight(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="selfRating"
        label="自评分"
      >
        <template v-if="!scope.row.children"
                  slot-scope="scope">
          <el-input v-model="scope.row.selfRating"
                    placeholder="请输入" />
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
        tableData: [{
          id: 1,
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
    },
    methods:{
      /** 权重值变化，自评分值随着变化 */
      changeweight (row) {
        row.selfRating = row.weight
      },
      /** 计算合计的方法 */
      getSummariesAdd (param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '合计';
            return;
          }
          let values = []
          data.map(item => {
            values.push(Number(item[column.property]))
            if (item.children) {
              console.log(item.children)
              item.children.map(it => {
                values.push(Number(it[column.property]))
                // Number(it[column.property])
                console.log(it)
              })
            }
          });
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += 0;
          } else {
            // sums[index] = '';
            // sums[index].toString()
          }
        });

        for (var i = 0; i < sums.length; i++) {
          if (i === 6 || i === 5 || i === 0) {
            sums[i] = sums[i]
          } else {
            sums[i] = ''
          }
        }
        this.sumFive = sums[5]
        this.sumSix = sums[6]
        return sums;
      },
    }
  }
</script>

<style lang="scss">

</style>

