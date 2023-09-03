<template>
  <div class="work_container">
    <Echart :options="data.echartData.options" :height="data.echartData.height" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import Echart from '@/components/Echart.vue'
const data = reactive({
  echartData: {
    height: 300,
    options: {
      title: {
        text: 'Test Watch',
        textStyle: {
          fontSize: 12,
          color: '#83868F'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [],
          type: 'line',
          showSymbol: true,
          symbol: 'circle',
          areaStyle: {},
          color: '#DCB282',
          lineStyle: {
            color: '#DCB282'
          },
          itemStyle: {
            color: 'rgba(220, 178, 130, 0.15)'
          }
        }
      ]
    }
  }
})

onMounted(() => {
  setTimeout(() => {
    /* 模拟ajax请求获取后端数据 */
    const xAxisDataList = ['重大缺陷', '一般缺陷', '优化需求']
    const seriesDataList = [10, 28, 38]

    data.echartData.options.xAxis.data = xAxisDataList
    data.echartData.options.series[0].data = seriesDataList
  }, 500)
})

</script>

<style scoped lang="scss">
.work_container {
  padding: 8px 16px;
}
</style>
