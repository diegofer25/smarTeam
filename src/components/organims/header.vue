<template>
  <q-layout-header>
    <q-toolbar
      class="text-gray"
      :color="themeColor">
      <q-btn
        flat
        dense
        round
        @click="toggleDrawer"
        aria-label="Menu">
        <q-icon name="menu"/>
      </q-btn>

      <q-toolbar-title>
        SmarTeam
        <div slot="subtitle">Um gerenciador de equipes inteligente</div>
      </q-toolbar-title>

      <q-btn
        @click.stop="confirm = !confirm"
        flat round dense icon="exit_to_app">
        <q-tooltip>
          Sair
        </q-tooltip>
      </q-btn>
    </q-toolbar>

    <q-dialog
      v-model="confirm"
      prevent-close
      @ok="confirmLogoff">
      <!-- This or use "title" prop on <q-dialog> -->
      <span slot="title">Confirmar Saida</span>
      <!-- This or use "message" prop on <q-dialog> -->
      <span slot="message">Deseja mesmo fazer logoff?</span>

      <template slot="buttons" slot-scope="props">
        <q-btn :color="userTheme" label="Não" @click="props.cancel" />
        <q-btn :color="userTheme" label="Sim" @click="props.ok" />
      </template>
    </q-dialog>
  </q-layout-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['themeColor'],
  data () {
    return {
      confirm: false
    }
  },
  computed: {
    ...mapGetters(['userTheme'])
  },
  methods: {
    ...mapActions(['logOff']),
    toggleDrawer () {
      this.$emit('toggleDrawer')
    },
    confirmLogoff () {
      this.logOff()
      this.$router.push('/')
    }
  }
}
</script>
