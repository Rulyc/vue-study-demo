<template>
  <div style="height: 70%;">
    <el-row :gutter="20">
      <el-col :span="6"
              style="padding-top:5px;">
            <span>考核周期：
              <span>2019年11月考核</span>
            </span>
      </el-col>
      <el-col :span="4">
        <span>姓名：<span>张三</span></span>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;">
      <el-table :data="tableData1"
                ref="table"
                height="100%"
                :span-method="objectSpanMethod"
                :summary-method="getSummaries"
                :show-summary="true"
                style="width: 100%;margin-bottom: 20px;"
                default-expand-all
                row-key="id"
                @expand-change="expandChange"
                border
                class="showAll" size="small">
        <el-table-column width="200px"
                         prop="objectName"
                         label="名称">
        </el-table-column>
        <el-table-column prop="workStatus"
                         align="center"
                         width="60px"
                         label="状态"
                         show-overflow-tooltip>
          <template  slot-scope="scope">
            <span v-if="scope.row.workStatus=='1'">{{"提前"}}</span>
            <span v-else-if="scope.row.workStatus=='2'">{{"正常"}}</span>
            <span v-else-if="scope.row.workStatus=='3'">{{"滞后"}}</span>
            <span v-else-if="scope.row.workStatus=='4'">{{"已完成"}}</span>
            <span v-else-if="scope.row.workStatus=='5'">{{"暂停"}}</span>
            <span v-else-if="scope.row.workStatus=='6'">{{"中止"}}</span>
            <span v-else-if="scope.row.workStatus=='7'">{{"未启动"}}</span>
          </template>
        </el-table-column>
        <el-table-column width="65px"
                         prop="workProgress"
                         align="center"
                         label="进度(%)">
        </el-table-column>
        <el-table-column width="45px"
                         prop="timelong"
                         align="center"
                         label="工时">
        </el-table-column>
        <el-table-column width="80px"
                         prop="weight"
                         align="center"
                         label="权重(%)">
        </el-table-column>
        <el-table-column width="80px"
                         prop="selfRating"
                         align="center"
                         label="自评分">
        </el-table-column>
        <el-table-column prop="selfDiffScoreDescribe"
                         width="150px"
                         label="加减分说明">
        </el-table-column>
        <el-table-column prop="remarks"
                         width="350px"
                         label="工作内容">
        </el-table-column>
        <el-table-column prop="name"
                         label="评估人">
        </el-table-column>
        <el-table-column prop="kpiScore"
                         label="评估分数">
        </el-table-column>
        <el-table-column prop="assesseDiffScoreDescribe"
                         label="加减分说明"
                         width="300">
        </el-table-column>
        <el-table-column v-for="(item,index) in columns"
                         :key="index"
                         :label="item.label"
                         :prop="item.value"
                         :width="item.width"
        >
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'table-col',
    props: {
      // 弹窗是否打开
      visible: {
        type: Boolean,
        required: false,
        default: false
      },
      // 打开弹窗传递的id
      rowID: {
        type: String,
        required: false,
        default: ''
      }
    },
    created () {
    },
    data () {
      return {
        allRowNum:0, // 所有项目的行数
        spanArrSum:0, //非指标项目的行数
        spanArrFirstSum:0, //首次进入非指标项目的行数
        spanArrSumArr:[], // 处理分数、加减分说明等col合并数组
        allRowNumArr:[], // 处理人col合并数组
        spanArr: [], // 表格动态变化过程中的col合并数组
        objectListTable: [], // 非指标项目集合
        // 处理人数据集合
        handlerInfoList: [
          {approverDiffScoreDescribe1: null,approverName1: "张三",level1: 0,score1: 100},
          { approverDiffScoreDescribe1: null, approverName1: '谌小仲', level1: 0, score1: 100 },
          { approverDiffScoreDescribe1: null, approverName1: '王五', level1: 0, score1: 100 },
        ],
        tableData1: [], // 表格数据
        // 后台返回的表格数据
        tableData: [
          {
            id: '1191670059258875904',
            isFixed: false,
            approverName1: '张三',
            approverName2: '王五',
            approverName3: '李四',
            approverDiffScoreDescribe1: '',
            approverDiffScoreDescribe2: '',
            approverDiffScoreDescribe3: '',
            score1: 100,
            score2: 100,
            score3: 100,
            kpiScore: 99,
            name: "王五",
            num: 2,
            objectName: "项目1",
            remarks: null,
            selfRating: null,
            timelong: null,
            weight: null,
            workProgress: null,
            workStatus: null,
            assesseDiffScoreDescribe: 'null',
            children:[
              {
                id: "11916698122256666",
                name: "王五",
                objectName: "工作项1",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '',
                approverName2: '',
                approverName3: '',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: null,
                score2: null,
                score3: null,
              },
              {
                id: "2222222333322999999",
                name: "王五",
                objectName: "工作项2",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 100,
                score2: 100,
                score3: 100,
              }
            ]
          },
          {
            id: '11916700592588759042',
            isFixed: false,
            approverName1: '张三',
            approverName2: '王五',
            approverName3: '李四',
            approverDiffScoreDescribe1: '',
            approverDiffScoreDescribe2: '',
            approverDiffScoreDescribe3: '',
            score1: 100,
            score2: 100,
            score3: 100,
            kpiScore: 88,
            name: "王五",
            num: 2,
            objectName: "项目2",
            remarks: null,
            selfRating: null,
            timelong: null,
            weight: null,
            workProgress: null,
            workStatus: null,
            assesseDiffScoreDescribe: 'null333',
            children:[
              {
                id: "119166981222566662",
                name: "王五",
                objectName: "工作项1",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '',
                approverName2: '',
                approverName3: '',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: null,
                score2: null,
                score3: null,
              },
              {
                id: "22222223333229999992",
                name: "王五",
                objectName: "工作项2",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 100,
                score2: 100,
                score3: 100,
              },
              {
                id: "00000000002",
                name: "王五",
                objectName: "工作项3",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 100,
                score2: 100,
                score3: 100,
              }
            ]
          },
          {
            id: '11916700592588759042a',
            isFixed: false,
            approverName1: '张三',
            approverName2: '王五',
            approverName3: '李四',
            approverDiffScoreDescribe1: '',
            approverDiffScoreDescribe2: '',
            approverDiffScoreDescribe3: '',
            score1: 100,
            score2: 100,
            score3: 100,
            kpiScore: 100,
            name: "aaa兰",
            num: 2,
            objectName: "项目3",
            remarks: null,
            selfRating: null,
            timelong: null,
            weight: null,
            workProgress: null,
            workStatus: null,
            assesseDiffScoreDescribe: null,
            children:[
              {
                id: "119166981222566662a",
                name: "aaa兰",
                objectName: "工作项1",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '',
                approverName2: '',
                approverName3: '',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: null,
                score2: null,
                score3: null,
              },

              {
                id: "00000000002a",
                name: "aaa兰",
                objectName: "工作项2",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 100,
                score2: 100,
                score3: 100,
              }
            ]
          },
          {
            id: '9',
            isFixed: true,
            approverName1: '',
            approverName2: '',
            approverName3: '',
            approverDiffScoreDescribe1: '',
            approverDiffScoreDescribe2: '',
            approverDiffScoreDescribe3: '',
            score1: null,
            score2: null,
            score3: null,
            kpiScore: '',
            name: "",
            num: 2,
            objectName: "指标项目1",
            remarks: null,
            selfRating: null,
            timelong: null,
            weight: null,
            workProgress: null,
            workStatus: null,
            assesseDiffScoreDescribe: null,
            children:[
              {
                id: "99",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 50,
                score2: 40,
                score3: 60,
                name: "",
                objectName: "指标1",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                kpiScore: '',
              },
              {
                id: "999",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 101,
                score2: 102,
                score3: 103,
                name: "",
                objectName: "指标2",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                kpiScore: '',
              }
            ]
          },
          {
            id: '91',
            isFixed: true,
            approverName1: '',
            approverName2: '',
            approverName3: '',
            approverDiffScoreDescribe1: '',
            approverDiffScoreDescribe2: '',
            approverDiffScoreDescribe3: '',
            score1: null,
            score2: null,
            score3: null,
            kpiScore: '',
            name: "",
            num: 2,
            objectName: "指标项目2",
            remarks: null,
            selfRating: null,
            timelong: null,
            weight: null,
            workProgress: null,
            workStatus: null,
            assesseDiffScoreDescribe: null,
            children:[
              {
                id: "991",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 50,
                score2: 40,
                score3: 60,
                name: "",
                objectName: "指标项1",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                kpiScore: '',
              },
              {
                id: "9991",
                approverName1: '张三',
                approverName2: '王五',
                approverName3: '李四',
                approverDiffScoreDescribe1: '',
                approverDiffScoreDescribe2: '',
                approverDiffScoreDescribe3: '',
                score1: 101,
                score2: 102,
                score3: 103,
                name: "",
                objectName: "指标项2",
                remarks: "垃圾数据22019-11-05周报：已完成",
                selfDiffScoreDescribe: null,
                selfRating: 100,
                timelong: 8,
                weight: 100,
                workProgress: 100,
                workStatus: "4",
                kpiScore: '',
              }
            ]
          },
        ],
      };
    },
    watch: {
      visible: {
        handler(n) {
          if (n) {
            this.objectListTable = [] // 非指标项目集合
            this.columns= [] // 动态表头
            this.tableData1 = [] // 表格数据绑定
            this.spanArrSum = 0; // 非指标项目的行数
            this.spanArrFirstSum = 0; // //首次进入非指标项目的行数
            this.allRowNum = 0  //所有项目的行数
            this.tableData1 = this.tableData  // 请求回来的数据赋值给this.tableData1
            // 为表格中的数据都增加一个show字段，用于判断树是否显示
            this.tableData1.forEach((item, index) => {
              item.show = true
              if(item.children){
                this.allRowNum += (item.children.length+1)
              }
              if(item.isFixed == false){
                this.objectListTable.push(item)
              }
            })
            let arrObject = []
            this.objectListTable.forEach((item, index) => {
              arrObject.push(item)
              if (item.children ) {
                this.spanArrSum += (item.children.length+1)
                this.spanArrFirstSum += (item.children.length+1)
                item.children.forEach((it, index) => {
                  arrObject.push(it)
                })
              }
            })
           // 调用表格数据合并的计算方法
            this.setdates(arrObject)
            this.handlerInfoList.forEach((item,index) => {
              console.log(item,'item1111111')
              var approverName = 'approverName' + (index + 1);
              var score = 'score' + (index + 1);
              var approverDiffScoreDescribe = 'approverDiffScoreDescribe' + (index + 1)
              this.columns.push({ label: '处理人', value: approverName, width: '100px' })
              this.columns.push({ label: '处理分数', value: score, width: '100px' })
              this.columns.push({ label: '加减分说明', value: approverDiffScoreDescribe, width: '100px' })
            })
          }
        },
        deep: true,
        immediate: true
      },
    },
    methods: {
      /** elementUI表格绑定的合并方法 */
      objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 8 || columnIndex === 9 || columnIndex === 10) {
          let _row = this.spanArr[rowIndex]
          if (rowIndex < this.spanArrFirstSum) {
            if (_row) {
              return {
                rowspan: _row == 99 ? 0 : _row,
                colspan: _row==99 ?0:1
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          }
          else{
              return {
                rowspan: 1,
                colspan: 1
              }
          }
        }
        else if (columnIndex === 11 || columnIndex === 14 || columnIndex === 17) {
          let row2 = this.allRowNumArr[rowIndex]
          return {
            rowspan: row2,
            colspan: 1
          }
        }
        else if ((columnIndex === 12 || columnIndex === 13 || columnIndex === 15 ||
          columnIndex === 16 || columnIndex === 18 || columnIndex === 19)) {
          if (rowIndex < this.spanArrFirstSum) {
            let _row1 = this.spanArrSumArr[rowIndex]
            // console.log(_row1,'ffffffffff_row1')
            return {
              rowspan: _row1,
              colspan: 1
            }
          } else{
            return {
              rowspan: 1,
              colspan: 1
            }
          }
        }
      },
      /**  合计方法 */
      getSummaries (param) {
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
              item.children.map(it => {
                values.push(Number(it[column.property]))
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
          if (i === 5 || i === 4 || i === 0) {
            sums[i] = sums[i]
          } else {
            sums[i] = ''
          }
        }
        return sums;
      },
      /** 表格中树展开或关闭触发事件 */
      expandChange (row, expandedRows) {
        let arrObject = [] // 接收表格中树数据的转化
        this.spanArr = [] // 合并表格行数rowspan数据集合
        this.objectListTable.forEach((item, index) => { // objectListTable是排除不合并表格数据的集合
          // show字段主要是用来区分当前表格中哪些树是展开的
          if (row.id === item.id) {
            // 如果是当前点击的行，就将当前是否展开的属性赋值给show这个字段
            item.show = expandedRows
          }
          // 得到表格中需要合并数据的集合
          arrObject.push(item)
          // 如果字段show为true(树展开)
          if (item.show) {
            item.children.forEach((it, index) => {
              arrObject.push(it)
            })
          } else {

            // 节点是关闭状态  如果数据存在子节点
            if (item.children) {
                // 其他情况，push任意值进数组，但不能不push
                item.children.forEach((it, index) => {
                  arrObject.push(22)
                })
              }
            }
        })
        // 获取上半部分需要合并的行数
        if (!row.isFixed) {
          if (row.show) {
            this.spanArrSum += row.children.length
          } else {
            this.spanArrSum -= row.children.length
          }
        }
        // 获取当前表格所呈现出来的所有行数，即处理人需要合并的行数
        if(expandedRows){
          this.allRowNum += row.children.length
        }else {
          this.allRowNum -= row.children.length
        }
        // 调用合并列数的方法  0 为不合并
        this.setdates(arrObject)
      },
      /** 合并列数的方法 */
      setdates: function (arr) {
        console.log(arr, '合并列数方法中拿到的数组')
        // 转化数组,得到name的集合，如果name不存在，代表需要隐藏，这时候用22这个数字进行代替
        var kpiObjArr = []
        for (var i = 0, len = arr.length; i < len; i++) {
          if (arr[i] == 22) {
            kpiObjArr.push(22)
          } else {
            kpiObjArr.push(arr[i].name)
          }
        }
        console.log(kpiObjArr, 'kpiObjArrkpiObjArrkpiObjArrkpiObjArr')
        this.spanArrSumArr = [] // 清空处理分数、加减分说明等col合并数组
        // 获取处理分数、加减分说明等col合并数组
        for(let i =0 ; i < this.spanArrSum ; i++){
          if(i===0){
            this.spanArrSumArr.push(this.spanArrSum)
          }else{
            this.spanArrSumArr.push(0)
          }
        }
        this.allRowNumArr = [] // 清空处理人col合并数组
        // 获取处理人col合并数组
        for(let i =0 ; i < this.allRowNum ; i++){
          if(i===0){
            this.allRowNumArr.push(this.allRowNum)
          }else{
            this.allRowNumArr.push(0)
          }
        }
        // 获取最终的col合并集合
        this.spanArr = this.arrFunction(kpiObjArr,0)
      },
      /** 数组数据处理方法 */
      arrFunction(list,index){
          var a=0;
          var reg = new RegExp("[\\D]");
          for (var i=index;i<list.length;i++){
            if( reg.test(list[i])){
              a=i;
              break;
            }
          }
          var s=index;
          for (var i=index+1;i<list.length;i++){
            s++; //记录终结点
            if(list[a]==list[i]){
              list[i]=0;
            }else if(reg.test(list[i])&&list[a]!=list[i]){
              break;
            }
          }
          var count=0;
        list[index] = 1
          for (var i = index + 1; i < list.length; i++) {
            if (list[i] ==0) {
              count++;
              list[i] = 22;
              list[index+count] = 0;
              list[index]=count+1;
            }
            if(list[i]==22){
              list[i] = 99;
            }
          }
          if(s<list.length-1){
            list=this.arrFunction(list,s);
          }
          return list;
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
