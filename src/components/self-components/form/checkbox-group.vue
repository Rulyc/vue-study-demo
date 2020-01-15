<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import { findComponentsDownward } from '@/assets/js/assist'
  import mixins from '@/assets/js/mixins'
  export default {
    name: "cCheckboxGroup",
    mixins:[mixins],
    props:{
      value: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentValue: this.value,
        childrens: []
      }
    },
    watch:{
      value () {
        this.updateModel(true);
      }
    },
    mounted(){
      this.updateModel(true);
    },
    methods:{
      /** 更新子组件组件绑定的数据事件 */
      updateModel(update){
        this.childrens = findComponentsDownward(this, 'cCheckbox') // 向下查找所有的子组件，找到cCheckbox
        if(this.childrens){ // 如果存在cCheckbox类型的子组件
          const { value } = this; // const value = this.value
          this.childrens.forEach(child => { // 遍历子组件数组
            child.model = value ; // 将当前组件的value赋值给每一个子组件的model
            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0; // 给子组件的currentValue赋值
              child.group = true; // 设置为复选框组合
            }
          })
        }
      },
      /** 在子组件中执行this.parent.change(参数)进行调用 */
      change(data){
        this.currentValue = data;
        this.$emit('input', data);
        this.$emit('change', data); // checkboxGroup标签的change事件
        this.dispatch('cFormItem', 'on-form-change', data); // 向上级组件formItem中派发on-form-change事件
      }
    }
  }
</script>

<style scoped>

</style>
