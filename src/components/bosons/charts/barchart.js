import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  props: ['chartData', 'options'],
  extends: Bar,
  mixins: [reactiveProp],
  mounted: function () {
    this.renderChart(this.chartData, this.options)
  }
}
