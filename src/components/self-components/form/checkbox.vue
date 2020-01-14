/**  checkbox组件
*
*/
<template>
  <label>
    <span>
      <input type="checkbox"
             :disabled="disabled"
             :checked="currentValue"
             @change = "change"
      >
    </span>
    <slot></slot>
  </label>
</template>

<script>
  import mixins from '@/assets/js/mixins'
  export default {
    name: "cCheckbox",
    mixins:[mixins],
    props:{
      value:{
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default:true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default:''
      }
    },
    data(){
      return{
        currentValue: this.value
      }
    },
    watch:{
      value(val){
        if(val === this.trueValue || val === this.falseValue){
          this.updateModel();
        }else {
          throw 'Value should be trueValue or falseValue.';
        }
      }
    },
    methods:{
      /** 监听，当父级修改时，同步修改内部的currentValue */
      updateModel () {
        this.currentValue = this.value === this.trueValue;
      },
      change(event){
        // debugger
        if(this.disabled){ // 当前复选框被禁用，则直接停止
          return false;
        }

        const checked = event.target.checked; // 获取当前复选框的是否选中的状态
        console.log(event,'llll')
        this.currentValue = checked ? checked : ''; // 赋值

        const value = checked ? this.trueValue : this.falseValue
        this.$emit('input', value)
        this.$emit('change', value)
        // 向上级form-item派发on-form-change事件
        this.dispatch('cFormItem', 'on-form-change', value)
      }
    }
  }
</script>

<style scoped>

</style>
