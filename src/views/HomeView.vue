<template>
  <div style="padding: 10px">
    <div style="padding: 10px 0">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>

    <div style="padding: 10px 0">
      <el-input v-model="search"  placeholder="请输入关键字" style="width: 20%" />
      <el-button type="primary" style="margin-left: 5px">查询</el-button>
    </div>

    <el-table :data="tableData" stripe border  style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="date" label="日期" sortable />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="address" label="地址" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="text" @click="handleEdit">编辑</el-button>
          <el-popconfirm title="确认删除吗?" >
            <template #reference>
              <el-button type="text">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin: 10px 0">
      <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize4"
          :page-sizes="[5, 10, 20, 25]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      total: 10,
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  },
  methods: {
    handleEdit() {

    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    }
  }
}


</script>
