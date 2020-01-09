<template>
  <input
    class="c-input__inner"
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
        currentValue: this.value
      }
    },
    watch:{
      // 当value发生变化时，给this.currrentValue赋值
      value: {
        handler (val) {
          this.currentValue = val
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
