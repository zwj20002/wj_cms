<template>
  <div class="nav-header">
    <el-icon
      v-if="!isFold"
      class="fold-menu"
      size="25px"
      @click="handleFoldClick"
      ><Fold
    /></el-icon>
    <el-icon
      size="25px"
      class="fold-menu"
      v-if="isFold"
      @click="handleFoldClick"
      ><Expand />
    </el-icon>
    <div class="content">
      <WjBreadcrumb :breadcrumbs="breadcrumbs"></WjBreadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import UserInfo from './user-info.vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { defineComponent, ref, computed } from 'vue'
import WjBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menu'

export default defineComponent({
  components: {
    UserInfo,
    WjBreadcrumb
  },
  emit: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    //面包屑的数据
    const menus = useStore()

    const breadcrumbs = computed(() => {
      const userMenus = menus.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped>
.fold-menu {
  cursor: pointer;
  top: 8.5px;
}
.nav-header {
  display: flex;
  width: 100%;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 20px;
}
</style>
