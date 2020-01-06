/**
 * button按钮的封装
 * 支持：按钮大小设置【large,small,default】
 * 支持：按钮类型设置 【primary, warning,success,info,danger,default】
 * 支持：按钮禁用
*/
<template>
  <button
    class="c-button"
    :class="['c-button-size-'+ size, 'c-button-type-'+ type, disabled?'is-disabled':'']"
    :disabled="disabled"
    @click="handelClick"
  >
    <slot></slot>
  </button>
</template>

<script>
  // 检验是否有匹配的项
 function isValidator(value, validList){
    const ret = validList.find(v => v == value)
    if(ret){
      return true;
    }else{
      return false;
    }
  }
  export default {
    name: "c-buttom",
    props:{
      // 是否禁用按钮，默认不禁用
      disabled:{
        type:Boolean,
        default:false
      },
      // 按钮的型号，默认为default
      size:{
        validator (value) {
          return isValidator(value, ['small', 'large', 'default']);
        },
        default: 'default'
      },
      // 按钮的类型,默认为default
      type:{
        validator(value) {
          return isValidator(value, ['primary', 'warning','success','info','danger','default']);
        },
        default:'default'
      }
    },
    data(){
      return{

      }
    },
    methods:{
      handelClick(event){
        /*
        如果没有这个方法，则父组件中直接应用时，
          绑定@click="方法名"方法会监听不到，导致方法不执行，
          需要使用@click.native = "方法名"
         */
        this.$emit('click',event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  // 默认按钮的颜色
  .c-button{
    font-size: 14px;
    /*background-color: #409eff;*/
    /*border-color: #409eff;*/
    border-radius: 4px;
    padding: 12px 20px;
    display: inline-block;
    border: 1px solid #dcdfe6;
    color: #606266;
    outline: none;
    background-color: #fff;
    &.is-disabled{
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    &:hover{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  // 大按钮
  .c-button-size-large{
    padding:10px 20px;
  }
  // 小按钮
  .c-button-size-small{
    font-size:12px;
    padding:9px 15px;
  }
  // 类型为primary
  .c-button-type-primary {
    background-color: #409eff;
    border-color: #409eff;
    color:#fff;
    &:hover,&.is-disabled{
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  // 类型为warning
  .c-button-type-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,&.is-disabled{
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }
  // 类型为success
  .c-button-type-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &.is-disabled,&:hover{
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;

    }
  }
  // 类型为info
  .c-button-type-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &.is-disabled,&:hover{
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  // 类型为danger
  .c-button-type-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &.is-disabled,&:hover{
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
</style>
