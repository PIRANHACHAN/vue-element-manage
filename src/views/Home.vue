<template>
  <div>
    <el-row :gutter="20">
      <el-col :key="i" :md="6" :sm="12" :xs="24" v-for="(item, i) in images">
        <el-image :src="item"></el-image>
      </el-col>
      <el-col :span="24">
        <div id="echarts" style="width: 100%;height:400px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Home',
  data() {
    return {
      images: [
        require('../assets/2.jpg'),
        require('../assets/2.jpg'),
        require('../assets/2.jpg'),
        require('../assets/2.jpg')
      ]
    }
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      var myChart = echarts.init(document.getElementById('echarts'))

      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }

      myChart.setOption(option)
    }
  }
}
</script>
