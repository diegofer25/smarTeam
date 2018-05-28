<template>
  <div class="row">
    <div class="col-12">
      <div class="row main justify-around">
        <span class="q-title col-12 panel-title">
          Gerenciar Equipe
        </span>
      </div>
      <div class="row">
        <q-page-sticky :position="fabConfig.position" :offset="fabConfig.offSet">
          <q-fab
            :color="userTheme"
            active-icon="chevron_right"
            :direction="fabConfig.direction">

            <q-fab-action :color="userTheme" @click.stop="pushUser" icon="person_add">
              <q-tooltip anchor="center right" self="center left" :offset="[20, 0]">Adicionar Membro da Equipe</q-tooltip>
            </q-fab-action>
          </q-fab>
        </q-page-sticky>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TeamManager',
  computed: {
    ...mapGetters(['userTheme']),
    fabConfig: function () {
      return {
        position: this.$q.platform.is.desktop ? 'top-left' : 'top-right',
        direction: this.$q.platform.is.desktop ? 'right' : 'left',
        offSet: this.$q.platform.is.desktop ? [270, 3.5] : [18, 18]
      }
    }
  },
  methods: {
    pushUser () {
      alert('ok')
    }
  }
}
</script>

<style>
  .panel-title {
    padding: 20px;
    padding-left: 100px;
  }
</style>
