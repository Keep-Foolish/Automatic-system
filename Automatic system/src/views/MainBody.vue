<template>
    <div class="container" ref="container" @scroll="checkScroll">
        <div class="graph" :style="graphStyle">
            <el-button @click="add">{{ index }}</el-button>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref, reactive,onUnmounted, setBlockTracking } from 'vue';

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

</script>
  
<style lang='scss'>
.container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}

.graph {
    background: linear-gradient(to bottom, #ff0000, #0000ff);
    width: 100%;
    transition: height 0.3s ease;
    /* 添加过渡效果 */
}
</style>
  