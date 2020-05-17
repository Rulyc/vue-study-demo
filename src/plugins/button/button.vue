<template>
    <div>
      <button :class=" type=='warn' ? 'warn' : type=='error' ? 'error' : 'defaultBtn'">
        <slot></slot>
      </button>
    </div>
</template>

<script>
    export default {
        name: "vue-button",
        props:{
          type:{
            type:String,
            default: 'defaultBtn'
          }
        }
    }
</script>

<style lang="scss" scoped>
button{
  color:#fff;
  border:none;
}
  .defaultBtn{
    background: blue;
  }
  .warn{
    background: orange;
  }
  .error{
    color:red;
  }
</style>
