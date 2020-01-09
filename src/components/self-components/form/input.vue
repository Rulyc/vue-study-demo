/**
* form支持两种事件来触发检验
*  1、blur： 失去焦点时触发，常见的有输入框失去焦点时触发校验
*  2、change: 实时输入时触发或选择器选择项目时触发校验等
   即：
      我们需要在input上绑定原生事件@input，每当输入框数据发生变化时，都会执行handleInput()方法
   ，此时，通过自定义的dispatch向上级组件formItem派发自定义事件on-form-change;
      绑定原生得@blur，会在input失去焦点时触发执行handleBlur()方法，此时，通过自定义得dispatch向
   上级组件formItem派发自定义事件on-form-blur

   派发后，在上级组件formItem中，我们需要在created中用$on对派发的自定义事件进行监听
*
<template>
  <input
    class="c-input__inner"
    :type="type"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
    @focus="handleFocus"
    @change="handleChange"
  >
</template>

<script>
  import mixins from '@/assets/js/mixins'
  export default {
    name: "cInput",
    mixins:[mixins],
    props:{
      // input框上实时响应的数据  实现双向数据绑定第一步
      value:{
        type:String,
        default:''
      },
      // input框的类型
     type:{
       type: String,
       default: 'text'
      }
    },
    data(){
      return{
        currentValue: this.value  // 实现双向数据绑定第二步
      }
    },
    watch:{
      // 当value发生变化时，给this.currrentValue赋值
      value: { // 实现双向数据绑定第三步
        handler (val) {
          this.currentValue = val
        },
        deep: true,
        immediate: true
      }
    },
    methods:{
      handleInput(event){
        // 实现双向数据绑定 第四步
        const value = event.target.value; //获取当前的值
        this.currentValue = value // input响应当前的值
        this.$emit('input', value)
        // 向FormItem派发一个change事件，以及值
        this.dispatch('cFormItem', 'on-form-change', value)
      },
      /** 原生input框的change方法 */
      handleChange(){
        this.$emit('change', this.currentValue)  // 绑定change事件
      },
      /** 原生input框的blur方法 */
      handleBlur(){
        this.$emit('blur',this.currentValue)  // 绑定失去焦点事件
        // 向FormItem派发一个blur事件，以及值
        this.dispatch('cFormItem', 'on-form-blur', this.currentValue)
      },
      /** 原生input框的focus方法 */
      handleFocus(){
        this.$emit('focus',this.currentValue)  // 绑定失去焦点事件
      }
    }
  }
</script>

<style lang="scss" scoped>
.c-input__inner{
  background-color: #fff;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  outline: none;
  border:1px solid #dcdfe6;
  display: inline-block;
  padding: 0 15px;
}
</style>
