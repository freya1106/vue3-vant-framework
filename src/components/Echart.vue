<template>
  <div :style="{'height': props.height + 'px'}" ref="echartElement"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, watch, defineProps, onBeforeUnmount, ref } from 'vue'

/* 变量定义 */
const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  },
  height: {
    type: Number,
    default: 500
  }
})

let echartInstance = ref()
const echartElement = ref()

watch(
  () => props.options,
  (options) => {
    echartInstance.value.setOption(options)
  },
  { deep: true }
)

/* 生命周期函数 */
onMounted(() => {
  initEchart()
})

onBeforeUnmount(() => {
  if (!echartInstance.value) {
    return
  }
  echartInstance.value.dispose()
  echartInstance.value = null
})

/* 自定义函数 */
const initEchart = () => {
  echartInstance.value = echarts.init(echartElement.value)
  echartInstance.value.setOption(props.options)
}
</script>

<style scoped>
</style>
