<template>
  <div>
    <!-- 顶部 Tabs 标签页 -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <!-- 系统用抽屉组件 -->
      <el-tab-pane label="系统" name="first">
        <el-drawer v-model="visible" :show-close="true" direction=ltr>
          <template #header="{ titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
          </template>
          This is drawer content.
        </el-drawer>
      </el-tab-pane>
      <el-tab-pane label="项目" name="second">
        <div class="tab_choice_container" id="system">
          <div class="tab_chocie">
            <img src="../assets/file-icon/xinjian.svg" />
            <div>工作目录</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/dakai.svg" />
            <div>新建项目</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/baocun.svg" />
            <div>打开项目</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/lingcunwei.svg" />
            <div>保存项目</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/daoru.svg" />
            <div>另存项目</div>
          </div>
          <div class="tab_chocie">
            <img src="../assets/file-icon/xinjian.svg" />
            <div>导入项目</div>
          </div>
        </div>
      </el-tab-pane>
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
    <!-- 每个标签页的选项 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainBody from './MainBody.vue'


//element plus组件
//系统抽屉逻辑
const visible = ref(false)
//设置默认打开'文件'标签
const activeName = ref('second')

function handleClick(tab) {
  if (tab.props.name === 'first') {
    visible.value = true
  }
  activeName = 'second'
}
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
  height: 6vh;
  display: flex;
  justify-content: flex-start;

  //图标内部布局
  .tab_chocie {
    width: 5vw;
    height: 6vh;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    justify-content: center;

    &:hover {
      background-color: #cfe1f2;
    }
  }
}

//画布容器
//里面放mainbody组件
.demo-tabs {
  width: 100%;
  height: 100%;
}

.mainbody {
  width: 100vw;
  height: 58vh;
}
</style>
