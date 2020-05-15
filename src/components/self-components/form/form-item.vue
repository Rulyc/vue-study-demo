<template>
  <div>
    <label v-if="label" :class="{ 'c-form-item-label-required': isRequired }">{{ label }}</label>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="c-form-item-message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
  import mixins from '@/assets/js/mixins'
  import AsyncValidator from 'async-validator';
  export default {
    name: "cFormItem",
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
        initialValue:'', // 记录数据
        isRequired: false, // 是否为必填
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
        //将this作为参数，派发到form组件中，在form中，需要在created中进行$on监听派发的事件
        this.dispatch('cForm','on-form-item-add',this)

        // 设置初始值，以便在重置时恢复默认值
        this.initialValue = this.fieldValue;
        // 监听input组件派发的两个事件
        this.setRules();
      }
    },
    // 当组件销毁前，将实例从form的缓存中移除
    beforeDestroy() {
      //将this作为参数，派发到form组件中，在form中，需要在created中进行$on监听派发的事件
      this.dispatch('cForm', 'on-form-item-remove', this)
    },
    methods:{
      fieldValues () {
        return this.form.model[this.prop];
      },
      /** 当触发这两个方法时，就意味着要进行一次校验 */
      setRules(){
        let rules = this.getRules();
        if(rules.length){
          rules.every((rule)=>{
            // 如果当前校验规则中有必填项，则标记出来
            this.isRequired = rule.required;
          })
        }
        // 监听input派发来的on-form-change事件
        this.$on('on-form-change',this.onFieldChange)
        // 监听input派发来的on-form-blur事件
        this.$on('on-form-blur', this.onFieldBlur);
      },
      /** 失去焦点时触发校验规则 */
      onFieldBlur() {
        this.validate('blur');
      },
      /** 内容改变时触发校验规则 */
      onFieldChange() {
        this.validate('change');
      },
      /**  从form的rules中，获取当前FormItem的校验规则 */
      getRules(){
        let formRules = this.form.rules; // 获取表单的检验规则
        // 当前formItem存在校验规则，则记录住校验规则，否则记录为[]
        formRules = formRules ? formRules[this.prop]:[];
        // 返回当前formItem校验规则集合
        console.log([].concat(formRules || []),'[].concat(formRules || []')
        return [].concat(formRules || []);
      },
      /** 所以过滤出符合要求的rules规则(只支持blur和change),*/
      getFilteredRule (trigger) {
        const rules = this.getRules(); // 获得当前触发的formItem的校验信息
        console.log(rules,'rules')
        // 只返回校验事件符合要求的rules规则
        return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
      },
      /**
       * 校验数据
       * @param trigger 校验类型
       * @param callback 回调函数  --- 回调主要是给form用的，
       *        form中可以通过提交按钮一次性校验所有的formitem
       */
      validate(trigger,  callback = function () {}) {
        let rules = this.getFilteredRule(trigger); // 当前获取blur和change的校验规则
        if (!rules || rules.length === 0) {
          // return true;
          if (!this.required) {
            this.validateState = '';
            callback();
            return true;
          }else {
            rules = [{required: true}];
          }
        }
        this.validateState = 'validating';// 设置状态为校验中
        // 以下为 async-validator 库的调用方法
        let descriptor = {};
        descriptor[this.prop] = rules;
        const validator = new AsyncValidator(descriptor);
        let model = {};
        model[this.prop] = this.fieldValues();
        console.log(model,'model,lllll')
        // 调用AsyncValidator开源库中的校验方法
        validator.validate(model, { firstFields: true }, errors => {
          console.log(errors,'errors')
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';
          callback(this.validateMessage);
        });
      },
      /** 对当前数据进行重置 */
      resetField(){
        this.validateState = '' // 清空校验状态
        this.validateMessage = '' // 清空错误信息
        this.form.model[this.prop] = this.initialValue; // 还原当前formItem的值为默认值
      },
    }
  }
</script>

<style lang="scss" scoped>
  .c-form-item-label-required:before {
    content: '*'; color: red;
  }
  .c-form-item-message {
    color: red;
    font-size:12px;
  }
</style>
