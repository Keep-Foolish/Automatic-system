<template>
  <div>
    <!-- 顶部 Tabs 标签页 -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="系统" name="first">
        <!-- 每个标签页的选项 -->
        <div class="tab_choice_container" id="system">
          <div class="tab_chocie" @click="handle">
            <img src="../assets/file-icon/xinjian.svg" />
            <div>新建</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/dakai.svg" />
            <div>打开</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/baocun.svg" />
            <div>保存</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/lingcunwei.svg" />
            <div>另存为</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/daoru.svg" />
            <div>导入</div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="项目" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="模块" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="流程" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="窗口" name="fifth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="帮助" name="sixth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- 项目 标签页 -->
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
      <el-tab-pane class="mainbody" v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        <main-body></main-body>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainBody from './MainBody.vue'
//点击事件处理函数
//测试
function handle() {
  // 创建一个新的<div>元素
  var newDiv = document.createElement("div");

  // 添加一些文本内容到新的<div>元素
  newDiv.innerText = "这是一个新的<div>元素";

  // 获取目标元素（例如，id为"target"的元素）
  var targetElement = document.getElementsByClassName("demo-tabs");

  // 将新的<div>元素添加为目标元素的子元素
  targetElement.appendChild(newDiv);

}

//element plus组件
//设置默认打开文件
const activeName = ref('first')
//项目标签页
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: '项目1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: '项目2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const handleTabsEdit = (
  targetName,
  action
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: `项目${tabIndex}`,
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }
    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<style lang='scss'>
// 标签页通用属性
.tab_choice_container {
  height: 8vh;
  display: flex;
  justify-content: flex-start;
}

.tab_chocie {
  width: 4vw;
  height: 7vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}

.tab_chocie:hover {
  background-color: #cfe1f2;
}

//画布容器
.demo-tabs{
  width: 100%;
  height: 100%;
}
.mainbody{
  width: 100vw;
  height: 58vh;
}

</style>
