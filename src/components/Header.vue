<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color: blue">后台管理</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-dropdown style="cursor: pointer; display: flex; align-items: center">
        <span class="el-dropdown-link">
          张三
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </template>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'

export default {
  name: "Herder",
  components: {
    ArrowDown
  }
}
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>