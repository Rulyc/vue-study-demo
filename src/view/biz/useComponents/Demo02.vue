<template>
    <div>
      <el-alert
        title="组件封装第二篇之表单"
        type="success"
        :closable="false">
      </el-alert>
      <c-form ref="form" :model="formObj" :rules="formRules">
        <c-form-item label="姓名" prop="name" style="height: 70px;">
          <c-input v-model="formObj.name" @change="changeName"></c-input>
        </c-form-item>
        <c-form-item label="邮箱" prop="email" style="height: 70px;">
          <c-input v-model="formObj.email" @focus="focusEmail" @blur="blurEmail"></c-input>
        </c-form-item>
        <c-form-item label="是否选中" prop="check" style="height: 70px;">
          <c-check-box v-model="formObj.check" @change="checkedChange"></c-check-box>
        </c-form-item>
        <c-form-item label="是否选中" prop="checkArr" style="height: 70px;">
          <c-check-box-group v-model="formObj.checkArr" @change="checkedArrChange">
            <c-check-box  value="吃饭" label="chi" >
            </c-check-box>
            <c-check-box  value="跑步" label="pao">
            </c-check-box>
          </c-check-box-group>
        </c-form-item>
      </c-form>
      <c-button size="large" type="primary" @click="handleSubmit">提交</c-button>
      <c-button size="large" @click="handleReset">重置</c-button>
    </div>
</template>

<script>
  import cForm from '@/components/self-components/form/form'
  import cFormItem from '@/components/self-components/form/form-item'
  import cInput from '@/components/self-components/form/input'
  import cButton from '@/components/self-components/c-button'
  import cCheckBox from '@/components/self-components/form/checkbox'
  import cCheckBoxGroup from '@/components/self-components/form/checkbox-group'
  export default {
    name: "Demo02",
    components:{
      cForm,
      cFormItem,
      cInput,
      cButton,
      cCheckBox,
      cCheckBoxGroup
    },
    data(){
      return{
        formObj:{// 表单数据定义
          name:'',
          email:'',
          check: false,
          checkArr:[]
        } ,
        formRules:{// 表单检验规则
          name: [
            { required: true, message: '⽤户名不能 为空', trigger: 'blur' }
          ],
          email:[
            {required:true, message: '邮箱不能为空', trigger:'blur'},
            {type: 'email', message:'邮箱格式不正确', trigger:'change'}
          ],
          check: [
            { type:'boolean', required: true, message: '是否选中不能为空',trigger: 'change' }
          ],
          checkArr: [
            { type:'array', required: true, message: '是否选中不能为空',trigger: 'change' }
          ]
        },
      }
    },
    methods:{
      checkedArrChange(val){
        // this.formObj.checkArr = val
        console.log(this.formObj.checkArr,'ggsssssssssss',val)
      },
      checkedChange(val){
        console.log(this.formObj.check,'this.formObj.check')
        alert(val)
      },
      /** 邮箱获取焦点事件 */
      focusEmail(val){
        console.log(`邮箱获取焦点: ${val}`)
      },
      /** 名字输入框change事件 */
      changeName(val){
        console.log(`名称change事件: ${val}`)
      },
      /** 邮箱输入框失去焦点 */
      blurEmail(val){
        console.log(`邮箱失去焦点事件: ${val}`)
      },
      /** 提交按钮 */
      handleSubmit(){
        this.$refs.form.validate(valid=>{
          if(valid){
            alert('提交成功')
          }else{
            alert('失败')
          }
        })
      },
      /** 重置按钮 */
      handleReset(){
        this.$refs.form.resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
