import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  props: ['chartData', 'options'],
  extends: Line,
  mixins: [reactiveProp],
  mounted: function () {
    this.renderChart(this.chartData, this.options)
  }
}
