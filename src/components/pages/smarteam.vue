<template>
  <q-layout view="hHh Lpr lFf">

    <stheader
      :leftDrawerOpen="leftDrawerOpen"
      :themeColor="userTheme"
      @toggleDrawer="toggleDrawer">
    </stheader>

    <stdrawer
      :leftDrawerOpen="leftDrawerOpen">
    </stdrawer>

    <q-page-container class="main-content">
      <transition name="fade">
        <router-view />
      </transition>
    </q-page-container>

    <stfooter
      :themeColor="userTheme"
      @themeChange="themeChange">
    </stfooter>

  </q-layout>
</template>

<script>
import stheader from './../organims/header'
import stdrawer from './../organims/drawer'
import stfooter from './../organims/footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    ...mapGetters(['userTheme'])
  },
  methods: {
    ...mapActions(['setTheme']),
    toggleDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    themeChange (color) {
      this.setTheme(color)
    }
  },
  components: {
    stheader,
    stdrawer,
    stfooter
  }
}
</script>

<style>
  .main-content {
    background-color: rgba(173, 216, 230, 0.3);
  }
  .q-layout-page{
    min-height: calc(92.2vh - 50px) !important;
  }
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
