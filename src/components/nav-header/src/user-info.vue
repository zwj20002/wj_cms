<template>
  <div>
    <div class="flex flex-wrap items-center">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="default"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="user">{{ name }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="layout">退出登录</el-dropdown-item>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'
import router from '@/router'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => {
      return store.state.login.userInfo.name
    })
    //退出登录逻辑
    const layout = () => {
      // console.log('123')
      LocalCache.deleteCache('token')
      router.push('/login')
    }
    return { name, layout }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.user {
  padding-left: 10px;
}
</style>
