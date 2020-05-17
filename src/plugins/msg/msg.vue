<template>
    <div>
      <div class="msg active" ref="msg" :class="{active:msgStatus}">
        <div class="msg-warpper">{{text}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "vue-msg",
        props:{
          msg:String,
        },
      data(){
          return{
            text: '',
            msgStatus:false
          }
      },
      methods:{
          msgPlugin(msg, time = 2000){
            alert(msg)
            this.text = msg
            this.msgStatus = true
            setTimeout(()=>{
              this.msgStatus = false
            },time)
          }
      }

    }
</script>

<style lang="scss" scoped>
.msg{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,50%);
  width:0;
  min-height: 0;
  text-align: center;
  border-radius: 5px;
  background: rgba(0,0,0,0.5);
  color:#fff;
  transition: all 0.5s;
  z-index:-1;
  opacity: 0;
}
  .active{
    width: 150px;
    /*background: red;*/
    min-height: 25px;
    opacity: 1;
    z-index:10;
  }
</style>
