<template>

  <q-layout-drawer
    side="left"
    :mini="isMini"
    v-model="qDrawer">

    <q-list
      no-border
      link>

      <q-list-header>Gerenciamento</q-list-header>

      <q-item
        to="/home">
        <q-item-side>
          <q-icon name="poll"></q-icon>
        </q-item-side>
        <q-item-main label="Acompanhamento"></q-item-main>
      </q-item>

      <q-item
        to="/gerenciarequipe">
        <q-item-side>
          <q-icon name="people"></q-icon>
        </q-item-side>
        <q-item-main label="Gerenciar Equipe"></q-item-main>
      </q-item>

    </q-list>

  </q-layout-drawer>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['qDrawer'],
  computed: {
    ...mapGetters(['userTheme', 'isMini'])
  }
}
</script>
