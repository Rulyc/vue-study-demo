<!--
折线图
-->
<template>
  <div>
    <div id="main" style="width: 250px;height: 150px;"></div>
    <div class="components-container">
      <!--    <aside>-->
      <!--      Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.-->
      <!--      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">Documentation</a>-->
      <!--    </aside>-->
      <div>
        <tinymce v-model="content" :height="300" />
      </div>
      <!--    <div class="editor-content" v-html="content" />-->
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts'
  import Tinymce from '@/components/Tinymce'
  export default {
    name: "one",
    components: { Tinymce },
    data() {
      return {
        content:
          `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
      }
    },
    mounted(){
      this.dd()
    },
    methods:{
      dd(){
        var myChart = echarts.init(document.getElementById("main"))
        var option = {
          // 标题
          titile: {
            text: '折线图堆叠'
          },
          // 鼠标移入提示
          tooltip: {
            trigger: 'axis'
          },
          // 标注
          legend: {
            data: ['邮件营销', '联盟广告']
          },
          // 网格位置设置
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            }
          ]
        }
        myChart.setOption(option)
      },
    }
  }
</script>

<style scoped>

</style>
