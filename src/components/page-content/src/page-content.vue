<template>
  <div class="page-content">
    <wj-table
      :listData="dataList"
      v-bind="contentTableConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
      :title="titles"
      :pageName="pageName"
      @editClick="editClick"
    >
      <!-- 1.header里面的插槽 -->
      <template #handlerHandler>
        <el-button class="new" @click="handleNewClick"
          >新建{{ title }}</el-button
        >
      </template>
      <!-- 2.列里面的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>

      <!-- <template #handler="scope">
        <div class="handle-btns">
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </div>
      </template> -->
      <template #header> </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </wj-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
// import { usePermission } from '@/hooks/use-permission'
import WjTable from '@/base-ui/table'
export default defineComponent({
  components: {
    WjTable
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const titles = ref(props.title)
    const store = useStore()

    //获取操作的权限
    // const isCreate = usePermission(props.pageName, 'create')
    // const isUpdate = usePermission(props.pageName, 'update')
    // const isDelete = usePermission(props.pageName, 'delete')
    // const isQuery = usePermission(props.pageName, 'query')

    //1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => {
      getPageData()
    })
    //2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      // if (isQuery) return
      const { formOriginData, ...obj } = queryInfo
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize - 10,
          size: pageInfo.value.pageSize,
          ...obj
        }
      })
    }
    getPageData()
    //3.获取用户列表
    const dataList = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })
    const dataCount = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })
    //4.获取其他的动态插槽名
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )
    // 5.监听父组件的点击事件
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const editClick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      titles,
      otherPropSlots,
      handleNewClick,
      editClick
      // isCreate,
      // isUpdate,
      // isDelete
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.new {
  background-color: orangered;
  color: #fff;
}
.new:hover {
  background-color: brown;
}
</style>
