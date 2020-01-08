/**
* 表单封装：分为三层
   form 中
*/
<template>
    <div>
      <form>
        <slot></slot>
      </form>
    </div>
</template>

<script>
  export default {
    name: "cForm",
    provide(){ // 在form将整个实例向下提供
      return{
        form:this
      }
    },
    props:{
      // 表单控件绑定的数据对象
      model:{
        type:Object,
      },
      // 表单的校验规则定义
      rules: {
        type:Object
      }
    },
    data(){
      return{
        fields:[] // 用于缓存FormItem实例
      }
    },
    created() {
      // 通过$on监听FromItem派发出来的事件on-form-item-add
      this.$on('on-form-item-add', (field)=>{
        if(field){
          this.fields.push(field)
        }
      })
      // 通过$on监听FromItem派发出来的事件on-form-item--remove
      this.$on('on-form-item-remove', (field)=>{
        if(field.prop){
          this.fields.splice(this.fields.indexOf(field),1)
        }
      })
    }
  }
</script>

<style scoped>

</style>
