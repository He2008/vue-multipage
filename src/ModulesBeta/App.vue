<template>
  <div id="app">
    <div class="chart" ref="chart" style="width: 300px; height: 300px"></div>
    <button type="button" class="el-button el-button--default el-button--small">
      <span>Element Button</span>
    </button>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChat();
  },
  methods: {
    initChat() {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.setOption({
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss">
.el-button {
  color: red;
  font-size: 14px;
}
</style>
