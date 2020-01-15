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
      updateModel(update){
        debugger
        this.childrens = findComponentsDownward(this, 'cCheckbox')
        if(this.childrens){
          const { value } = this; // const value = this.value
          this.childrens.forEach(child => {
            child.model = value ;
            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0;
              child.group = true;
            }
          })
        }
      },
      change(data){
        console.log(data,'kkkkkkkkk ')
        this.currentValue = data;
        console.log(this.currentValue,'kkkkkkkkk ')
        console.log()
        this.$emit('input', data);
        this.$emit('change', data);
        this.dispatch('cFormItem', 'on-form-change', data);
      }
    }
  }
</script>

<style scoped>

</style>
