<template>
    <div class="head-container">
        <!-- 顶部 Tabs 标签页 -->
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="系统" name="first">
              <div class="tab_choice_container"></div>
                          <!-- 系统用抽屉组件 -->
                <el-drawer :with-header="flase" v-model="visible" :show-close="false" direction=ltr class="drawer">
                    <div class="drawer-container">
                        <div class="drawer-icon" @click="closeDrawer()"><img src="../assets/quit.svg" /></div>
                        <div class="drawer-setting">设置</div>
                        <div class="drawer-quit" @click="closeApp()">退出</div>
                    </div>
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
            <el-tab-pane label="模块" name="third">模块</el-tab-pane>
            <el-tab-pane label="流程" name="fourth">流程</el-tab-pane>
            <el-tab-pane label="窗口" name="fifth">窗口</el-tab-pane>
            <el-tab-pane label="帮助" name="sixth">帮助</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
//element plus组件
//设置默认打开'文件'标签
const activeName = ref('second')
//系统抽屉逻辑
const visible = ref(false)
function handleClick(tab) {
  if (tab.props.name === 'first') {
    visible.value = true
  }
}

function closeDrawer() {
  visible.value = false
  console.log(process)
}
//抽屉退出软件
function closeApp() {
      const electron = window.require('electron');
      const { ipcRenderer } = electron;
      ipcRenderer.send('close-app');
    }
</script>

<style lang='scss'>
.head-container{
  margin-bottom: -1px;
}
// 标签页通用属性
.tab_choice_container {
    height: 5.2vh;
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

//左边抽屉
.drawer {
  background-color: #32579b !important;
  width: 16vw !important;
  padding-left: 0px !important;
  position: relative;

  .drawer-container {
    position: absolute;
    left: -1vh;
    color: white;
    font-size: 20px;
    height: 20%;
    width: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .drawer-icon {
      margin-top: -50px;
      padding-bottom: 20px;
      padding-left: 18px;
      padding-top: 20px;
      height: 70px;
      width: 100% !important;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #5978ae;
      }
    }

    .drawer-setting,
    .drawer-quit {
      display: flex;
      align-content: center;
      padding: 20px;
      width: 100%;
      height: 45px;

      &:hover {
        background-color: #5978ae;
      }
    }
  }
}
</style>
