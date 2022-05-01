<template>
  <div>
    DEMO
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {message } from 'ant-design-vue'

export default defineComponent({
  name: 'tempfile', // 路由组件名称
  isRouter: true, // 是否自动为路由
  isComponents: false, // 是否自动注册为公共组件
  setup() {
    const warning = (text: string ) => {
      message.warning(text, 2000)
    }
    warning('TEST DEMO')
  }
})
</script>
