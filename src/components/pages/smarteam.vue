<template>
  <q-layout view="hHh Lpr lFf">

    <stheader :qDrawer="qDrawer" @toggleDrawer="toggleDrawer" />

    <stdrawer :qDrawer="qDrawer" />

    <q-page-sticky v-if="!isMobile && qDrawer" position="top-left" :offset="[10, 23]">
      <q-btn size="sm" round push :color="userTheme" :icon="isMini ? 'arrow_right' : 'arrow_left'"
        @click="toggleMini">
      </q-btn>
    </q-page-sticky>

    <q-page-container class="main-content">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </q-page-container>

    <stfooter />

  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import stheader from './../organism/header'
import stdrawer from './../organism/drawer'
import stfooter from './../organism/footer'

export default {
  name: 'SmarTeamLayout',
  data () {
    return {
      isDesktop: this.$q.platform.is.desktop,
      isMobile: this.$q.platform.is.mobile
    }
  },
  computed: {
    ...mapGetters('application', [
      'userTheme',
      'isMini'
    ]),
    qDrawer: {
      get: function () {
        return this.isDesktop
      },

      set: function (newValue) {
        this.isDesktop = newValue
      }
    }
  },
  methods: {
    ...mapActions([
      'setTheme',
      'setDevice',
      'setMini'
    ]),
    toggleDrawer (value) {
      this.qDrawer = value
    },
    toggleMini () {
      this.setMini(!this.isMini)
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
  .slide-fade-enter-active {
    transition: .4s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-1000px);
    opacity: 0.5;
  }
</style>
