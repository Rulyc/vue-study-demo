<template>
    <div>
      <el-alert
        title="组件封装第二篇之表单"
        type="success"
        :closable="false">
      </el-alert>
      <c-form :model="formObj" :rules="formRules">
        <c-form-item label="姓名">
          <c-input></c-input>
        </c-form-item>
      </c-form>
    </div>
</template>

<script>
  import cForm from '@/components/self-components/form/form'
  import cFormItem from '@/components/self-components/form/form-item'
  import cInput from '@/components/self-components/form/input'
  export default {
    name: "Demo02",
    components:{
      cForm,
      cFormItem,
      cInput
    },
    data(){
      return{
        formObj:{} , // 表单数据定义
        formRules:{}, // 表单检验规则
      }
    }
  }
</script>

<style scoped>

</style>
