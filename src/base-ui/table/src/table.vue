<template>
  <div class="wj-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}列表</div>
        <div class="handler">
          <slot name="handlerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handelSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80 "
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="操作" align="center" width="120">
        <template v-slot="scope">
          <div class="btn">
            <el-button
              type="primary"
              icon="Edit"
              circle
              @click="handleEditClick(scope.row)"
            >
            </el-button>
            <el-button
              type="danger"
              icon="Delete"
              circle
              @click="handleDeleteClick(scope.row)"
            >
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <div class="pagefooter">
          <el-pagination
            v-model:current-page="page.currentPage"
            v-model:page-size="page.pageSize"
            :page-sizes="[10, 20, 30]"
            :small="false"
            :disabled="false"
            :background="false"
            layout="total, sizes, prev, pager, next, jumper"
            :total="listCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      dafault: 0
    },
    pageName: {
      type: String,
      required: true
    },
    propList: { type: Array, required: true },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['selectionChange', 'update:page', 'editClick'],
  setup(props, { emit }) {
    const handelSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
      console.log({ ...props.page })
    }
    const store = useStore()
    //删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      const r = confirm('确定删除该数据吗？')
      console.log(item)
      if (r) {
        store.dispatch('system/deletePageDataAction', {
          pageName: props.pageName,
          id: item.id
        })
      } else {
        return
      }
    }

    const handleEditClick = (item: any) => {
      emit('editClick', item)
    }

    return {
      handelSelectionChange,
      handleSizeChange,
      handleCurrentChange,
      handleDeleteClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.btn {
  display: flex;
  padding-left: 10px;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: 700;
}
.handler {
  align-items: center;
}
.footer {
  margin-top: 15px;
}
.el-pagination {
  text-align: right;
  padding-left: 500px;
}
</style>
