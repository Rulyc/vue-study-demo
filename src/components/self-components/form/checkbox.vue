/**  checkbox组件
*
*/
<template>
  <label>
    <span>
      <input type="checkbox"
             v-if="group"
             :disabled="disabled"
             :value="label"
             :checked="currentValue"
             v-model="model"
             @change = "change"
      >
      <input type="checkbox"
             v-else
             :disabled="disabled"
             :checked="currentValue"
             @change = "change"
      >
    </span>
    <slot><span v-if="group">{{label}}</span></slot>
  </label>
</template>

<script>
  import mixins from '@/assets/js/mixins'
  import { findComponentUpward } from '@/assets/js/assist'
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
      },
      label:{
        type:[String, Number, Boolean]
      }
    },
    data(){
      return{
        currentValue: this.value,
        model: [],
        group: false,
        parent: null,
      }
    },
    watch:{
      value(val){
        // if(val === this.trueValue || val === this.falseValue){
        //   this.updateModel();
        // }else {
        //   throw 'Value should be trueValue or falseValue.';
        // }
      }
    },
    mounted(){
      this.parent = findComponentUpward(this, 'cCheckboxGroup')
      if(this.parent){
        this.group = true;
      }
      if(this.group){
        this.parent.updateModel(true)
      }else{
        this.updateModel()
      }
    },
    methods:{
      /** 监听，当父级修改时，同步修改内部的currentValue */
      updateModel () {
        this.currentValue = this.value === this.trueValue;
        console.log(this.currentValue, 'this.currentValue1111')
      },
      change(event){
        if(this.disabled){ // 当前复选框被禁用，则直接停止
          return false;
        }

        const checked = event.target.checked; // 获取当前复选框的是否选中的状态
        this.currentValue = checked  // 赋值

        const value = checked ? this.trueValue : this.falseValue
        this.$emit('input', value)
        if(this.group){
          console.log(this.model,'modelggg');
          this.parent.change(this.model)
        }else{
          this.$emit('change', value)
          // 向上级form-item派发on-form-change事件
          this.dispatch('cFormItem', 'on-form-change', value)
        }
      }
    }
  }
</script>

<style scoped>

</style>
