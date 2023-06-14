<template>
  <div>
    <!-- element plue属性组件 -->
    <el-descriptions v-show="isVisible" :column="1" :size="size" :border="true" class="attribute-container">
      <template #extra>
        <div class="title-container">
        <div>属性</div>
        <el-button color="#fff" class="close-button"><img src="../assets/close.svg"/></el-button>
        </div>
      </template>
      <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
      <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
  
<script setup>
import { computed, ref } from 'vue'

const isVisible = true

const size = ref('1')
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>
  
<style lang='scss' scoped>
/* 属性框标题部分 */
.title-container{
  height: 32px;
  width: 18vw;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -12px;
  // position: absolute;
  .close-button{
    position: relative;
    right: 0px;
    top:0px;
    &:hover{
      background-color: rgb(246, 86, 71);
    }
  }
}
.el-descriptions {
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 1);
}

.attribute_container {
  border-radius: 3px;
  width: 18vw;
  z-index: 9999;
}
</style>