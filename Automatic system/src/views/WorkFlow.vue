<template>
    <div class="container" ref="container" @scroll="checkScroll">
        <!-- 画布 -->
        <div class="graph" :style="graphStyle">
            <el-button @click="add">{{ index }}</el-button>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref, reactive } from 'vue';

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
    height: 100%;
    width: 100%;
}

.graph {
    background: linear-gradient(to bottom, #ff0000, #0000ff);
    width: 100%;
    transition: height 0.3s ease;
    /* 添加过渡效果 */
}
</style>
  