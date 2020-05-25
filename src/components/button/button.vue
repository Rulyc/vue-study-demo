<!--
* button按钮的封装
* 支持：按钮大小设置【large,small,mini】
* 支持：按钮类型设置【primary,warning,success,info,danger,default，text】
* 支持：禁用
* 支持：朴素按钮
* 支持：圆角按钮
* 支持：圆形按钮
* 支持：icon图标，icon图标位置【left,right】
-->
<template>
  <button
    @click="handleClick"
    class="c-button"
    :class="[size?'c-button-'+size:'',
             'c-button-'+type,
             disabled?'is-disabled':'',
             plain ? 'is-plain':'',
             radius?`is-radius`:'',
             circular?'is-circular':'',
             iconPositon?`icon-${iconPositon}`:'']"
    :disabled="disabled"
  >
    <c-icon v-if="icon" class="icon" :name="icon"></c-icon>
    <span v-if="!circular" class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import { isValidatorOneOf } from '@/assets/js/common.js'
  export default {
    name: "c-button",
    props:{
      icon:{ // 按钮中加入图标，非必填元素，默认为''
        type:String,
        required:false,
        default:''
      },
      iconPositon:{ // 按钮中图标的位置，非必填，默认为left
        type:String,
        default:'left'
      },
      disabled:{ // 按钮是否被禁用，默认不禁用
        type:Boolean,
        required:false,
        default:false
      },
      plain:{ // 朴素按钮
        type:Boolean,
        required:false,
        default:false
      },
      radius:{ // 圆角按钮
        type:Boolean,
        required:false,
        default:false
      },
      circular:{ // 圆形按钮
        type:Boolean,
        required:false,
        default:false
      },
      size:{ // 按钮的尺寸
        validator(value){
          return isValidatorOneOf(value,['large','small','mini'])
        },
      },
      type:{ // 按钮的类型 默认为default
        validator(value){
          return isValidatorOneOf(value,['primary','warning','success','info','danger','default','text'])
        },
        default:'default'
      }
    },
    methods:{
      handleClick(event){
        this.$emit('click',event)
      }
    }
  }
</script>

<style scoped>

</style>
