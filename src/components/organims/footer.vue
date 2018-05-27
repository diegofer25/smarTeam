<template>
  <q-layout-footer>
    <q-toolbar
      :color="themeColor"
    >
      <q-toolbar-title>
        <div slot="subtitle">Lamarão Softwares - {{year}} &copy;</div>
      </q-toolbar-title>
      <div>
        <q-select
          class="select"
          float-label="Mudar Tema"
          radio
          toggle
          v-model="selectedColor"
          :options="colors"
          @input="themeChange"
        />
      </div>
    </q-toolbar>
  </q-layout-footer>
</template>

<script>
export default {
  props: ['themeColor'],
  data () {
    return {
      year: new Date().getFullYear(),
      selectedColor: this.themeColor,
      colors: [
        { label: 'Azul', value: 'primary' },
        { label: 'Verde', value: 'positive' },
        { label: 'Verde Azulado', value: 'secondary' },
        { label: 'Vermelho', value: 'negative' },
        { label: 'Laranja', value: 'warning' },
        { label: 'Dark', value: 'dark' }
      ]
    }
  },
  methods: {
    themeChange () {
      this.$emit('themeChange', this.selectedColor)
    }
  }
}
</script>

<style>
  .select{
    min-width: 200px;
  }
</style>
