<template>
  <q-card>
    <q-card-main>
      <q-table
        title="Visão geral da Equipe"
        :data="tableInfo.tableData"
        :columns="tableInfo.columns"
        row-key="name"/>
    </q-card-main>
  </q-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['tableInfo'])
  }
}
</script>
