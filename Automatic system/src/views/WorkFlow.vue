<template>
    <div class="container" ref="container" @scroll="checkScroll">
        <!-- 画布 -->
        <div class="graph">
            <el-button @click="add">{{ index }}</el-button>
        </div>
        <!-- 属性 -->
        <show-attribute class="attribute-container"></show-attribute>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import ShowAttribute from '../views/ShowAttribute.vue';

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
    position: relative;
    .attribute-container {
        position: absolute;
        top: -9px;
        border-radius: 5px;
        right: 1px;
        z-index: 99999;
    }
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
  