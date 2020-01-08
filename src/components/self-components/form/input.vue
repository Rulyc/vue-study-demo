<template>
  <input
    :type="type"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  >
</template>

<script>
  import mixins from '@/assets/js/mixins'
  export default {
    name: "cInput",
    mixins:[mixins],
    props:{
      // input框上实时响应的数据
      value:{
        type:[String, Number],
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
        currentValue: this.value
      }
    },
    watch:{
      // 当value发生变化时，给this.currrentValue赋值
      value: {
        handler (val) {
          if (val) {
            this.currentValue = val
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods:{
      handleInput(event){
        const value = event.target.value; //获取当前的值
        this.currentValue = value // input响应当前的值
        this.$emit('input', value)
        // 向FormItem派发一个change事件，以及值
        this.dispatch('cFormItem', 'on-form-change', value)
      },
      handleBlur(){
        // 向FormItem派发一个blur事件，以及值
        this.dispatch('cFormItem', 'on-form-blur', this.currentValue)
      }
    }
  }
</script>

<style scoped>

</style>
