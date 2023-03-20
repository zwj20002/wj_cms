<template>
  <div class="user">
    <div class="search">
      <PageSearch
        :searchFormConfig="searchFormConfig"
        @resetBtnClick="handleResetClick"
        @queryBtnClick="handleQueryClick"
      ></PageSearch>
    </div>
    <div class="content">
      <pageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="user"
        title="用户"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      >
      </pageContent>
      <pageModal
        :modalConfig="modalConfigRef"
        ref="pageModalRef"
        :defaultInfo="defaultInfo"
        pageName="user"
      ></pageModal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import PageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
export default defineComponent({
  name: 'user',
  components: { PageSearch, pageContent, pageModal },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    //处理密码
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
      console.log('123')
    }

    //2.动态添加部门以及角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return {
          title: item.name,
          value: item.id
        }
      })
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return {
          title: item.name,
          value: item.id
        }
      })
      return modalConfig
    })

    //3.调用hook获取公共变量以及函数
    const [handleNewData, pageModalRef, handleEditData, defaultInfo] =
      usePageModal(newCallback, editCallback)
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      modalConfigRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
