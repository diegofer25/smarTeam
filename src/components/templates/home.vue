<template>
  <div class="row">
    <div class="col-10 offset-1">
      <div class="row">
        <barchart :data="data" :title="charTitle"></barchart>
      </div>
    </div>
  </div>
</template>

<script>
import barchart from '../charts/barchart.js'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['user'])
  },
  data () {
    return {
      charTitle: 'Isso é um Titulo',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'GitHub Commits',
          backgroundColor: 'green',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }]
      }
    }
  },
  components: {
    barchart
  }
}
</script>
