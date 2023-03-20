<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'
//定义props
const props = withDefaults(
  defineProps<{
    height?: string
    width?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOption } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOption(props.options)
  })
})
</script>

<style scoped lang="less"></style>
