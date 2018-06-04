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
import { mapGetters } from 'vuex'
import notify from './../bosons/notify'
import membersCollaps from './../molecules/members-collaps'

export default {
  computed: {
    ...mapGetters(['userTheme', 'teamMembers']),
    computedMembers: function () {
      return this.members
    },
    computedLoading: function () {
      return this.loading
    }
  },
  data () {
    return {
      members: [],
      loading: false
    }
  },
  mounted () {
    this.getMembers()
  },
  methods: {
    getMembers () {
      this.loading = true
      this.teamMembers.then((response) => {
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
      return db.functions.getTasks(member.email)
        .then((result) => {
          this.loading = false
          return result
        })
    },
    pushMember (member) {
      this.getTasks(member).then((result) => {
        if (result.status) {
          member['tasks'] = result.tasks
          this.members.push(member)
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
