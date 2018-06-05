<template>
  <div class="row">
    <div class="col-12">
      <div class="row justify-center q-mb-md">
        <span class="q-title">Visão Geral</span>
      </div>
      <div class="row">
        <transition-group enter-active-class="animated fadeInUp">
          <div class="col-12" v-if="computedMembers.length > 0"
            v-for="(member, index) of computedMembers" :key="index">
            <members-collaps :member="member"
              :loading="computedLoading"/>
          </div>
        </transition-group>
      </div>
      <q-inner-loading :visible="loading">
        <q-spinner-facebook size="100px" :color="userTheme" />
      </q-inner-loading>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import notify from './../bosons/notify'
import membersCollaps from './../molecules/members-collaps'

export default {
  computed: {
    ...mapGetters('application', [
      'userTheme',
      'user'
    ]),
    ...mapGetters('business', [
      'members'
    ]),
    computedMembers: function () {
      return this.dataMembers
    },
    computedLoading: function () {
      return this.loading
    }
  },
  data () {
    return {
      dataMembers: [],
      loading: false
    }
  },
  mounted () {
    this.updateMembers(this.user.id).then(() => {
      this.getMembers()
    })
  },
  methods: {
    ...mapActions('business', [
      'updateMembers'
    ]),
    getMembers () {
      this.loading = true
      this.members.then((response) => {
        if (response.status) {
          response.members.forEach(member => {
            this.dataMembers.push(member.data())
          })
        } else {
          notify('Falha na comunicação com o servidor', 'negative')
        }
        this.loading = false
      })
    }
  },
  components: {
    membersCollaps
  }
}
</script>
