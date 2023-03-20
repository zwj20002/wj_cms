<template>
  <div class="menu">
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="menu"
      title="菜单"
    ></PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'wj-menu',
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
<!-- row-key="id"
,
:tree-props="{ children: 'children' }" -->
