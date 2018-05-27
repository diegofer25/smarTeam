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

    </q-toolbar>
  </q-layout-header>
</template>

<script>
export default {
  props: ['themeColor'],
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    }
  }
}
</script>
