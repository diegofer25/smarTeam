<template>
  <q-layout view="hHh Lpr lFf">

    <stheader
      :leftDrawerOpen="leftDrawerOpen"
      :themeColor="userTheme"
      @toggleDrawer="toggleDrawer">
    </stheader>

    <stdrawer
      :leftDrawerOpen="leftDrawerOpen"
      :isMini="isMini">
    </stdrawer>

    <q-page-sticky
      v-if="leftDrawerOpen"
      position="top-left"
      :offset="[10, 10]">
      <q-btn
        size="sm"
        round
        push
        :color="userTheme"
        :icon="isMini ? 'arrow_forward' : 'arrow_back'"
        @click="isMini = !isMini">
      </q-btn>
    </q-page-sticky>

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
  name: 'SmarTeamLayout',
  data () {
    return {
      desktop: this.$q.platform.is.desktop,
      mobile: this.$q.platform.is.mobile,
      isMini: true
    }
  },
  computed: {
    ...mapGetters(['userTheme']),
    leftDrawerOpen: {
      get: function () {
        return this.desktop ? this.desktop : this.mobile
      },
      set: function (newValue) {
        this.desktop ? this.desktop = newValue : this.mobile = newValue
      }
    }
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
  .q-layout-page{
    min-height: calc(92.2vh - 50px) !important;
  }
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .4s;
  }

  .fade-enter-active {
    transition-delay: .4s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
