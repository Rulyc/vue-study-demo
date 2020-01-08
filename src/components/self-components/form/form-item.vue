<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import mixins from '@/assets/js/mixins'
  import AsyncValidator from 'async-validator';
  export default {
    name: "cFromItem",
    mixins:[mixins],
    inject:['form'], // 注入依赖
    props:{
      // 表单的label元素
      label:{
        type:String,
        default:''
      },
      prop:{
        type:String
      }
    },
    data(){
      return{
        validateState:'', // 校验的状态
        validateMessage:'', // 校验不通过的提示信息
      }
    },
    computed:{
      // 从 Form 的 model 中动态得到当前表单组件的数据
       fieldValue () {
         return this.form.model[this.prop];
       },

    },
    mounted() {
      //渲染组件时，将实例缓存在form中
      if(this.prop){// 如果没有传入prop,则无需检验，也无需缓存
        /** vue组件的渲顺序时由内往外的，所以我们需要在FormItem 的 mounted 触发时，
         *   向Form派发一个事件on-form-item-add，并将当前的FormItem实例（this）传递给form
         *   此时，form的mounted还不会触发，我们需要在Form的created内监听自定义事件，
         *   Form 的 created 要先于 FormItem 的 mounted
         */
        this.dispatch('cForm','on-form-item-add',this)

        // 设置初始值，以便在重置时恢复默认值
        this.initialValue = this.fieldValue;
        // 监听input组件派发的两个事件
        this.setRules();
      }
    },
    // 当组件销毁前，将实例从form的缓存中移除
    beforeDestroy() {
      this.dispatch('cForm', 'on-form-item-remove', this)
    },
    methods:{
      /** 当触发这两个方法时，就意味着要进行一次校验 */
      setRules(){
        this.$on('on-form-change',this.onFieldChange)
        this.$on('on-form-blur', this.onFieldBlur);
      },
      getRules(){
        // 从form的rules中，获取当前FormItem的校验规则
        let formRules = this.form.rules;
        formRules = formRules ?formRules[this.prop]:[];
        return [].concat(formRules || []);
      },
      // 只支持blur和change,所以过滤出符合要求的rules规则
      getFilteredRule(trigger){
        const rules = this.getRules();
        return rules.filter(rule=> !rules.trigger || rules.trigger.indexOf(trigger) !== -1)
      },
      /**
       * 校验数据
       * @param trigger 检验类型
       * @param callback 回调函数
       * */
      validate(trigger,callback=function(){}){
        let rules = this.getFilteredRule(trigger)
        if(!rules || rules.length === 0 ){
          return true;
        }
        // 设置状态为校验中
        this.validateState = 'validating';

        // 以下为 async-validator 库的调⽤⽅法
        let descriptor = {};
        descriptor[this.prop] = rules;
        const validator = new AsyncValidator(descriptor)
        let model = {}
        model[this.prop] = this.fieldValue;
        validator.validate(model,{firstFields: true},errors =>{
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';
          callback(this.validateMessage);
        })
      },
      onFieldBlur() {
        this.validate('blur');
      },
      onFieldChange() {
        this.validate('change');
      }
    }
  }
</script>

<style scoped>

</style>
