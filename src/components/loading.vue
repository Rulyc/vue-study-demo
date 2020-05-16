<template>
  <div style="position: absolute;
    z-index: 2000;
    background-color: hsla(0,0%,100%,.9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity .3s;">
    <div class="loading">
      <!--      <div>-->
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <!--      </div>-->
    </div>
  </div>

</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style>
  .loading{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 40px;
    display: flex;
    align-items: center;
    z-index:1000
  }
  .item{
    width: 6px;
    height: 40px;
    background: gray;
    margin: 0 3px;
    border-radius: 10px;
    animation: loading 0.8s infinite;
  }
  .item:nth-child(2){
    animation-delay: 0.1s;
  }
  .item:nth-child(3){
    animation-delay: 0.2s;
  }
  .item:nth-child(4){
    animation-delay: 0.3s;
  }
  .item:nth-child(5){
    animation-delay: 0.4s;
  }
  .item:nth-child(6){
    animation-delay: 0.5s;
  }
  .item:nth-child(7){
    animation-delay: 0.6s;
  }
  .item:nth-child(8){
    animation-delay: 0.7s;
  }
  @keyframes loading{
    0%{
      height: 0;
    }
    50%{
      height: 40px;
    }
    100%{
     height:  0
    }
  }
</style>
