<template>
    <div class="container" ref="container" @scroll="checkScroll">
        <!-- 画布 -->
        <div class="graph">
            <el-button @click="add">{{ index }}</el-button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const index = ref(1);
const container = ref(null);

const add = () => {
    index.value++;
};

</script>
  
<style lang='scss'>
.container {
    height: 100%;
    width: 100%;
}

.graph {
    background: linear-gradient(to bottom, #ff0000, #0000ff);
    width: 100%;
    transition: height 0.3s ease;
    /* 添加过渡效果 */
    height: 79vh;
    border-radius: 8px;
}
</style>
  