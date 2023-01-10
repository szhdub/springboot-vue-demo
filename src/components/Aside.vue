<template>
  <div>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        style="width: 200px; min-height: calc(100vh - 50px)"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>选项1</span>
        </template>
          <el-menu-item index="1-1">选项1-1</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>选项2</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>选项3</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

export default {
  name: "Aside",
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
  }
}
</script>

<style scoped>

</style>