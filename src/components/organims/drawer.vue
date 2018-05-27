<template>

  <q-layout-drawer
    :mini="isMini"
    v-model="leftDrawerOpen">

    <q-list
      no-border
      link>

      <q-list-header>Gerenciamento</q-list-header>

      <q-item
        to="/home">
        <q-item-side>
          <q-icon name="home"></q-icon>
        </q-item-side>
        <q-item-main label="Home"></q-item-main>
      </q-item>

      <q-item
        to="/criarequipe">
        <q-item-side>
          <q-icon name="library_add"></q-icon>
        </q-item-side>
        <q-item-main label="Criar Equipe"></q-item-main>
      </q-item>

    </q-list>

  </q-layout-drawer>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['leftDrawerOpen', 'isMini'],
  computed: {
    ...mapGetters(['userTheme'])
  }
}
</script>
