
<template>
  <div class="contain" :style="{height:(screenHeight)+'px'}">
    <el-header style="height:60px;background: rgb(84, 92, 100); "></el-header>
    <el-container>
      <el-aside width="200px">
        <div class="contain-left" style="height: 100%;">
          <!--自定义颜色-->
          <el-menu
            :default-active="menuPath"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="rgb(191, 203, 217)"
            active-text-color="#ffd04b"
            @select="handleselect"
            @open="handleOpen"
            router
            style="height: 100%;"
          >
            <template v-for="item in $router.options.routes">
              <!-- index 为number类型, 而index需要string类型 -->
              <el-submenu v-if="item.children" :key="item.id" :index="'/' + item.name">
                <template slot="title">
                  <i :class="item.iconCls" />
                  {{ item.name }}
                </template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"  class="menuItem">
                  <div class="itemContain">
                    <!--<i class="iconfont" :class="child.class"></i>-->
                    <!--路由的名称-->
                    <span>{{child.name}}</span>
                    <!--<el-badge class="mark listbadge" :value="value" />-->
                  </div>
                </el-menu-item>
              </el-submenu>

            </template>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div class="contain-right">
          <!--跳转到相应的界面-->
          <router-view :key="activeDate"></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      screenHeight: document.documentElement.clientHeight ,// 屏幕高度
      selectMenuPath: '',
      menuPath: '/login',
      value: '/login',
      activeDate: ''
      // containerHeight: ''
    }
  },
  created () {
    var arr = this.$route.path.split('/')
    var path = '/' + arr[1]
    this.menuPath = path
    this.selectMenuPath = path
    console.log(this.menuPath, 'this.menuPath')
  },
  watch: {
    menuPath () {
      var arr = this.$route.path.split('/')
      var path = '/' + arr[1]
      return path
    },
    'screenHeight': function (val) { // 监听屏幕高度变化
      var oIframe = document.getElementById('app')
      // alert(this.$store.getters.screenHeight)
      oIframe.style.height = (Number(val) - 40) + 'px'
    }
  },
  mounted(){
    var _this = this
    window.onresize = function () { // 定义窗口大小变更通知事件
      // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
  },
  computed: {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleselect (val) {
      console.log(val, '33')
      if (this.selectMenuPath === val) {
        //    location.reload();
        this.activeDate = new Date() + 1
        console.log(this.activeDate, 'ddd')
      }
      this.selectMenuPath = val
    }
  }
}
</script>

<style lang="scss">
  .el-menu{
    border:none;
  }
  .el-menu-vertical-demo.el-menu{
    text-align: left;
  }
  .contain {
    height:100%;
    .el-container{
      height:100%;
    }
    /*margin:0 20px 0 20px;*/
    .contain-right {
      overflow: hidden;
      //  background: #F5FAFF;
      /*background: #F1F3F8;*/
      //  position: absolute;
      //  right: 0;
      //  width: calc(100% - 270px);
      height: calc(100% - 70px);
      border-top-right-radius: 10px;
      padding: 0;
      margin: 0;
    }
  }
</style>
