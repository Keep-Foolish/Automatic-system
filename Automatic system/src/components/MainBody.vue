<template>
    <div>
        <div style="height:100%;width:100%">
            <div class="graph-container">
                <el-button @click="add">{{ index }}</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const index = ref(1)
const add = () => {
    index.value++
}
</script>

<style lang='scss'>
.graph-container {
    background-color: aquamarine;
    height: 58vh;
    width: 100vw;
}
</style>
