### 自定义
```html
<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
 </el-tabs>
```
#扩展 slot 
###default
这里插入一个默认插槽
<slot></slot>

####footer
这里插入一个具名插槽
<slot name="footer"></slot>

