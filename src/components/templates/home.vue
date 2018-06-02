<template>
  <div class="row">
    <div class="col-12">
      <div class="row justify-around">
        <span class="col-10 panel-title">Painel de Exemplo</span>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
          <div class="row justify-around">
            <chartstatus></chartstatus>
            <teamtable></teamtable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartstatus from './../molecules/chartstatus'
import teamtable from './../molecules/teamtable'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['user', 'userTheme'])
  },
  components: {
    chartstatus,
    teamtable
  }
}
</script>

<style>
  .panel-title {
    padding: 15px 0 10px 0;
  }
</style>
