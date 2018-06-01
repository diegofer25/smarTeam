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

      <q-toolbar-title class="toolbar-title">
        SmarTeam
        <div slot="subtitle">Um gerenciador de equipes inteligente</div>
      </q-toolbar-title>

      <q-btn
        @click.stop="confirm = !confirm"
        flat round dense icon="exit_to_app">
        <q-tooltip>
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

export default {
  props: ['qDrawer'],
  data () {
    return {
      confirm: false
    }
  },
  computed: {
    ...mapGetters(['userTheme'])
  },
  methods: {
    ...mapActions(['logOff', 'setDevice']),
    toggleDrawer () {
      this.$emit('toggleDrawer', !this.qDrawer)
    },
    confirmLogoff () {
      this.logOff()
      this.$router.push('/')
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
