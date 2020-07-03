<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div id="echarts" style="width: 100%;height:400px;"></div>
    </el-col>
  </el-row>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'SoldAnalysis',

  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      var myChart = echarts.init(document.getElementById('echarts'))

      var option = {
        title: {
          text: '衣服销量对比',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }

      myChart.setOption(option)
    },
  },
}
</script>

<style></style>
