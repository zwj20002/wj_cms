<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <WjCard title="分类商品数量（饼图）">
          <pieEchart :pieData="categoryGoodsCount" />
        </WjCard>
      </el-col>
      <el-col :span="10">
        <WjCard title="不同城市商品销量">
          <mapEchart :mapData="addressGoodsSale"></mapEchart>
        </WjCard>
      </el-col>
      <el-col :span="7">
        <WjCard title="分类商品数量（玫瑰图）">
          <roseEchart :roseData="categoryGoodsCount"></roseEchart>
        </WjCard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <WjCard title="分类商品的销量">
          <lineEchart v-bind="categoryGoodsSale"></lineEchart>
        </WjCard>
      </el-col>
      <el-col :span="12">
        <WjCard title="分类商品的收藏">
          <barEchart v-bind="categoryGoodsFavor"></barEchart>
        </WjCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import WjCard from '@/base-ui/card'
import pieEchart from '@/components/page-echarts/src/pie-echart.vue'
import {
  roseEchart,
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/page-echarts'
export default defineComponent({
  name: 'dashboard',
  components: {
    WjCard,
    pieEchart,
    roseEchart,
    lineEchart,
    barEchart,
    mapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => ({
        name: item.name,
        value: item.goodsCount
      }))
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values, title: '商品销量面积图' }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values, title: '商品销量收藏图' }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 25px;
}
</style>
