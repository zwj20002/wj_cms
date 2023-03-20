<template>
  <div>
    <el-form label-width="70px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })
    const rules = {
      number: [
        {
          //必选项
          required: true,
          //不满足时进行提示的信息
          message: '手机号不能为空哦~',
          //触发方式
          trigger: 'blur'
        },
        {
          //字符长度
          pattern: /^[0-9]{11}$/,
          //不满足规则时进行提示的信息
          message: '手机号是11位数字哦~',
          //条件触发时的方式
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          message: '验证码不能为空~',
          trigger: 'blur'
        },
        {
          pattern: /^[0-9]{4}$/,
          message: '验证码是4位数字哦~',
          trigger: 'blur'
        }
      ]
    }
    return { phone, rules }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
