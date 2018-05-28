<template>
  <q-card flat>
    <q-card-main>
      <q-table
        no-results-label="Sua busca não trouxe nenhum resultado"
        title="Visão geral da Equipe"
        :data="tableInfo.tableData"
        :filter="filter"
        :columns="tableInfo.columns"
        row-key="name">

        <template slot="top-left" slot-scope="props">
          <q-search
            placeholder="Filtrar"
            :color="userTheme"
            v-model="filter">
          </q-search>
        </template>
        <template slot="top-right" slot-scope="props">
          <q-btn
            flat round dense
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"/>
        </template>

      </q-table>
    </q-card-main>
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    ...mapGetters(['tableInfo', 'userTheme'])
  }
}
</script>
