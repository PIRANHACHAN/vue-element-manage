<template>
  <div>
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      // date
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="dateFilterList"
        :filter-method="filterHandler"
      >
      </el-table-column>
      // name
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180"
        column-key="name"
        :filters="nameFilterList"
        :filter-method="filterHandler"
      >
      </el-table-column>
      // address
      <el-table-column prop="address" label="地址"> </el-table-column>
      // tag
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[
          { text: '家', value: '家' },
          { text: '公司', value: '公司' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Application',
  data() {
    return {
      tableData: [],
      dateFilterList: [],
      nameFilterList: [],
    }
  },
  methods: {
    getData() {
      axios.get('/mock/tabls').then(
        (res) => {
          this.tableData = res.data
          for (let i = 0; i < this.tableData.length; i++) {
            this.dateFilterList.push({
              text: this.tableData[i].date,
              value: this.tableData[i].date,
            }),
              this.nameFilterList.push({
                text: this.tableData[i].name,
                value: this.tableData[i].name,
              })
          }
        },
        (err) => {
          //
        }
      )
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style></style>
