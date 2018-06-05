<template>
  <q-layout-footer>
    <q-toolbar
      :color="userTheme">

      <q-toolbar-title>
        <div slot="subtitle">Lamarão Softwares - {{year}} &copy;</div>
      </q-toolbar-title>
      <div>
        <q-btn-dropdown v-model="opened" split :label="'Tema: ' + selectedColor">
          <!-- dropdown content -->
          <q-list>
            <q-item v-for="(color, index) in colors" :key="index">
              <q-btn
                class="color-button"
                @click.stop.prevent="themeChange(color)"
                push
                :color="color.value">
                <q-tooltip>
                  {{color.label}}
                </q-tooltip>
              </q-btn>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
  </q-layout-footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
      ],
      opened: false
    }
  },
  computed: {
    ...mapGetters('application', [
      'userTheme'
    ])
  },
  mounted: function () {
    this.colors.forEach(color => {
      if (this.userTheme === color.value) {
        this.selectedColor = color.label
      }
    })
  },
  methods: {
    ...mapActions('application', [
      'setTheme'
    ]),
    themeChange (color) {
      this.selectedColor = color.label
      this.opened = !this.opened
      this.setTheme(color.value)
    }
  }
}
</script>

<style scoped>
  .select{
    min-width: 200px;
  }

  .color-button {
    width: 100%;
  }
</style>
