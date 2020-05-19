<!--
* button按钮的封装
* 支持：按钮大小设置【large,small,mini】
* 支持：按钮类型设置【primary,warning,success,info,danger,default，text】
* 支持：禁用
-->
<template>
  <button
    class="c-button"
    :class="[size?'c-button-'+size:'',
             'c-button-'+type,
             disabled?'is-disabled':'',
             plain ? 'is-plain':'']"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
  import { isValidatorOneOf } from '@/assets/js/common.js'
  export default {
    name: "c-button",
    props:{
      disabled:{ // 按钮是否被禁用，默认不禁用
        type:Boolean,
        required:false,
        default:false
      },
      plain:{
        type:Boolean,
        required:false,
        default:false
      },
      size:{ // 按钮的尺寸
        validator(value){
          return isValidatorOneOf(value,['large','small','mini'])
        },
        // default: 'small'
      },
      type:{ // 按钮的类型 默认为default
        validator(value){
          return isValidatorOneOf(value,['primary','warning','success','info','danger','default','text'])
        },
        default:'default'
      }
    }
  }
</script>

<style scoped>

</style>
