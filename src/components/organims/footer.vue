<template>
  <q-layout-footer>
    <q-toolbar
      :color="themeColor"
    >
      <q-toolbar-title>
        <div slot="subtitle">Lamarão Softwares - {{year}} &copy;</div>
      </q-toolbar-title>
      <div>
        <q-btn-dropdown split :label="selectedColor">
          <!-- dropdown content -->
          <q-list>
            <q-item v-for="(color, index) in colors" :key="index">
              <q-item-side>
                <q-btn
                  @click="themeChange(color)"
                  size="xs"
                  push
                  round
                  :color="color.value">
                </q-btn>
              </q-item-side>
              <q-item-main>
                <q-item-tile label>{{color.label}}</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
      selectedColor: '',
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
  mounted: function () {
    this.colors.forEach(color => {
      if (this.themeColor === color.value) {
        this.selectedColor = color.label
      }
    })
  },
  methods: {
    themeChange (color) {
      this.selectedColor = color.label
      this.$emit('themeChange', color.value)
    }
  }
}
</script>

<style>
  .select{
    min-width: 200px;
  }
</style>
