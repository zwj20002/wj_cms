<template>
  <div class="goods">
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      title="商品"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          fit="cover"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }} </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
