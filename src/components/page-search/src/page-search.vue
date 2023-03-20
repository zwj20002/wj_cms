<template>
  <div class="page-search">
    <wj-form v-bind="searchFormConfig" :formData="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="info" @click="handleResetClick"
            ><el-icon><RefreshRight /></el-icon>重置</el-button
          >
          <el-button type="success" @click="handleQueryClick">
            <el-icon><Search /></el-icon>搜索</el-button
          >
        </div>
      </template>
    </wj-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WjForm from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    WjForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    //双向绑定的属性应该是由配置文件的field来决定
    //1.优化一：formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref({
      formOriginData
    })

    //2.优化二：当用户点击重置
    const handleResetClick = () => {
      formData.value = { formOriginData }
      emit('resetBtnClick')
    }

    //3.优化三：当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped>
.header {
  color: orange;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
