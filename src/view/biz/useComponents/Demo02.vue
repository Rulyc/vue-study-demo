<template>
    <div>
      <el-alert
        title="组件封装第二篇之表单"
        type="success"
        :closable="false">
      </el-alert>
      <c-form ref="form" :model="formObj" :rules="formRules">
        <c-form-item label="姓名" prop="name" style="height: 70px;">
          <c-input v-model="formObj.name"></c-input>
        </c-form-item>
        <c-form-item label="邮箱" prop="email" style="height: 70px;">
          <c-input v-model="formObj.email"></c-input>
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
  export default {
    name: "Demo02",
    components:{
      cForm,
      cFormItem,
      cInput,
      cButton
    },
    data(){
      return{
        formObj:{// 表单数据定义
          name:'',
          email:''
        } ,
        formRules:{// 表单检验规则
          name: [
            { required: true, message: '⽤户名不能 为空', trigger: 'blur' }
          ],
          email:[
            {required:true, message: '邮箱不能为空', trigger:'blur'},
            {type: 'email', message:'邮箱格式不正确', trigger:'blur'}
          ]
        },
      }
    },
    methods:{
      handleSubmit(){
        this.$refs.form.validate(valid=>{
          if(valid){
            alert('提交成功')
          }else{
            alert('失败')
          }
        })
      },
      handleReset(){
        this.$refs.form.resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
