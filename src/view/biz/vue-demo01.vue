<template>
  <div>
    <el-alert
      title="v-if和v-for哪个优先级更高？ 如果两个同时出现，应该怎么优化得到更好的性能？"
      type="success"
      :closable="false">
    </el-alert>
    <div v-if="isFolder">
      <p v-for="child in children" >{{child.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vue-demo01",
    data(){
      return{
        children: [
          {title:'foo'},
          {title:'bar'},
        ]
      }
    },
    computed: {
      isFolder() {
        return this.children && this.children.length > 0
      }
    },

    mounted(){
      console.log(this.$options.render,'vue源码中的render')
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
