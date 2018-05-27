<template>
  <q-layout-drawer
    :mini="miniState"
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

      <q-item>
        <q-item-side>
          <q-btn
            v-if="!mobile"
            size="xs"
            round
            :color="userTheme"
            :icon="miniState ? 'arrow_forward' : 'arrow_back'"
            @click.stop="miniState = !miniState">
          </q-btn>
        </q-item-side>
        <q-item-main label="Mini Mode"></q-item-main>
      </q-item>

    </q-list>

  </q-layout-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['leftDrawerOpen'],
  data () {
    return {
      miniState: false,
      mobile: this.$q.platform.is.mobile
    }
  },
  computed: {
    ...mapGetters(['userTheme'])
  }
}
</script>
