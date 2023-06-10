<template>
    <div class="container" ref="container" @scroll="checkScroll">
        <div class="graph" :style="graphStyle">
            <el-button @click="add">{{ index }}</el-button>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref, reactive,onUnmounted } from 'vue';

const index = ref(1);
const container = ref(null);
const graphStyle = reactive({
    height: '1000px',
});

const add = () => {
    index.value++;
};

const checkScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = container.value;
    if (scrollTop + clientHeight >= scrollHeight) {
        graphStyle.height = `${parseInt(graphStyle.height) + 200}px`;
    }
};

onMounted(() => {
    container.value.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  // 取消滚动事件监听器
  container.value.removeEventListener('scroll', handleScroll)
})
</script>
  
<style lang='scss'>
.container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    /* 添加滚动条样式 */
    scrollbar-width: thin;
    scrollbar-color: #888888 #f0f0f0;
}

.graph {
    background-color: aquamarine;
    width: 100%;
    transition: height 0.3s ease;
    /* 添加过渡效果 */
}

//electron默认不显示滚动条
//设置滚动条

.container::-webkit-scrollbar {
    width: 8px;
    /* 设置滚动条宽度 */
}

.container::-webkit-scrollbar-track {
    background: #f0f0f0;
    /* 设置滚动条背景颜色 */
}

.container::-webkit-scrollbar-thumb {
    background-color: #888888;
    /* 设置滚动条滑块颜色 */
    border-radius: 4px;
    /* 设置滚动条滑块圆角 */
}

.container::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
    /* 设置滚动条滑块鼠标悬停时的颜色 */
}</style>
  