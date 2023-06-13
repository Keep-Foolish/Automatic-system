<template>
  <div class="container">
    <head-view/>
    <!-- 项目 标签页 -->
    <el-tabs v-model="editableTabsValue" type="card" editable class="demo-tabs" @edit="handleTabsEdit">
      <!-- 标签页的内容是除了头部以外的所有内容 -->
      <el-tab-pane class="mainbody" v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        <!-- 画板 -->
        <work-flow></work-flow>
        <!-- 属性 -->
        <show-attribute class="attribute-container"></show-attribute>
      </el-tab-pane>
    </el-tabs>
    <!-- 每个标签页的选项 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeadView from '../views/HeadView.vue'
import WorkFlow from '../views/WorkFlow.vue'
import ShowAttribute from '../views/ShowAttribute.vue';

//项目标签页逻辑
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
.container{
  height:80vh;
  display: flex;
  flex-direction: column;
}

.mainbody{
  position: relative;
  .attribute-container{
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 99999;
  }
}
</style>
