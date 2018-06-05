<template>
  <q-layout-header>
    <q-toolbar
      class="main-header"
      :color="userTheme">
      <q-btn
        flat
        dense
        round
        @click="toggleDrawer"
        aria-label="Menu">
        <q-icon name="menu"/>
      </q-btn>
      <div class="q-ml-lg" v-if="$q.platform.is.desktop">
        <q-btn dense round push icon="navigate_before" size="sm"
          :color="userTheme" @click="$router.go(-1)">
          <q-tooltip anchor="bottom middle" self="top middle">
            voltar
          </q-tooltip>
        </q-btn>
        <q-btn dense round push icon="navigate_next" size="sm"
          :color="userTheme" @click="$router.go(1)">
          <q-tooltip anchor="bottom middle" self="top middle">
            Avançar
          </q-tooltip>
        </q-btn>
      </div>

      <q-toolbar-title class="toolbar-title">
        SmarTeam
        <div slot="subtitle">Um gerenciador de equipes inteligente</div>
      </q-toolbar-title>

      <q-btn
        @click.stop="confirm = !confirm"
        flat round dense icon="exit_to_app">
        <q-tooltip anchor="bottom middle" self="top middle">
          Logoff
        </q-tooltip>
      </q-btn>
    </q-toolbar>

    <q-dialog
      v-model="confirm"
      prevent-close
      @ok="confirmLogoff">

      <span slot="title">Confirmação de Saida</span>

      <span slot="message">Deseja mesmo fazer logoff?</span>

      <template slot="buttons" slot-scope="props">
        <q-btn push :color="userTheme" label="Não" @click="props.cancel" />
        <q-btn push :color="userTheme" label="Sim" @click="props.ok" />
      </template>
    </q-dialog>
  </q-layout-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import firebase from './../../services/firebase/'
import loading from './../bosons/loading'

export default {
  props: ['qDrawer'],
  data () {
    return {
      confirm: false
    }
  },
  computed: {
    ...mapGetters('application', ['userTheme'])
  },
  methods: {
    ...mapActions('application', ['logOff', 'setDevice']),
    toggleDrawer () {
      this.$emit('toggleDrawer', !this.qDrawer)
    },
    confirmLogoff () {
      const vm = this
      loading.show('Até a próxima', this.userTheme)
      firebase.app.auth().signOut().then(function () {
        vm.logOff()
        setTimeout(function () {
          loading.hide()
          vm.$router.push('/')
        }, 800)
      }, function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
  .main-header {
    min-height: 65px;
  }
  .toolbar-title {
    text-align: center;
    font-size: 1.6em;
  }
</style>
