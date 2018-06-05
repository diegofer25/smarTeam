<template>
  <div class="row">
    <div class="col-12">
      <div class="row justify-center q-mb-md">
        <span class="q-title">Visão Geral</span>
      </div>
      <div class="row">
        <members-collaps
          :members="computedMembers"
          :loading="computedLoading"/>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './../../services/firebase/'
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
            this.pushMember(member.data())
          })
        } else {
          notify('Falha na comunicação com o servidor', 'negative')
        }
        this.loading = false
      })
    },
    getTasks (member) {
      this.loading = true
      const request = {
        email: member.email,
        userId: this.user.id
      }
      return db.functions.getTasks(request)
        .then((result) => {
          this.loading = false
          return result
        })
    },
    pushMember (member) {
      this.getTasks(member).then((result) => {
        if (result.status) {
          member['tasks'] = result.tasks
          this.dataMembers.push(member)
        } else {
          console.log(result.error)
          notify('Falha na comunicação com o servidor', 'Negative')
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
