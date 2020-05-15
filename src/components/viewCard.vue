<template>
  <div class="view-card">
    <div class="view-card-header">
      <slot name="view"></slot>
    </div>
    <div>
      <div class="view-card-code" v-if="show">
        <slot name="code"></slot>
      </div>
      <div class="view-card-footer">
        <span @click="showConfig">{{ show ? '隐藏代码' : '显示代码' }}</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "viewCard",
    props:{
      isShow:{
        type:Boolean,
        required:false,
        default:false
      }
    },
    data () {
      return {
        show: false
      }
    },
    watch:{
      isShow: {
        handler (n) {
          if (n) {
            this.show = n
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods:{
      showConfig(){
        debugger
        this.show = !this.show;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .view-card{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    &:hover{
      box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
    }

    .view-card-header{
      padding: 24px;
    }

    .view-card-code{
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      height: auto;
      transition: height .2s;
      padding:18px 24px;
    }

    .view-card-footer{
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      line-height: 44px;
      &:hover{
        color:#409eff;
      }
    }
  }
</style>
