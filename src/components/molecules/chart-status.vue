<template>
  <q-card flat>
    <q-card-main>
      <doughnut
        :chart-data="dataChart"
        :options="chartOptions">
      </doughnut>
      <div class="row justify-center">
        <q-btn class="col-auto offset-auto" @click.stop="randomize" :color="userTheme">Randomizar</q-btn>
      </div>
    </q-card-main>
  </q-card>
</template>

<script>
import { doughnut } from './../bosons/charts/'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['dataChart', 'chartOptions', 'userTheme'])
  },
  methods: {
    ...mapActions(['setDataChart']),
    randomize () {
      this.setDataChart({
        labels: ['Concluidas', 'Pendentes', 'Em andamento'],
        datasets: [{
          backgroundColor: [
            'rgba(0, 128, 0, 0.5)',
            'rgba(255, 0, 0, 0.5)',
            'rgba(0, 0, 255, 0.5)'
          ],
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        }]
      })
    },
    getRandomInt () {
      return Math.floor(Math.random() * 10) + 1
    }
  },
  components: {
    doughnut
  }
}
</script>

<style>
 .teste {
   color: rgba(255, 0, 0, 0.5);
 }
</style>
