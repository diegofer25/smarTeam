<template>
  <q-collapsible
    popup icon="person_outline"
    :label="computedMember.name"
    sublabel="Aqui o membro informará seu status">
    <div class="q-card-title">
      {{ textSublabel(computedMember.tasks)}}
    </div>
    <div v-for="(task, index) in computedMember.tasks" :key="index">
      <q-collapsible :label="task.status">
        Detalhes das tarefas relacionadas a esse status
      </q-collapsible>
    </div>
  </q-collapsible>
</template>
<script>
import { db } from './../../services/firebase/'
import notify from './../bosons/notify'
import { mapGetters } from 'vuex'

export default {
  props: ['member'],
  computed: {
    ...mapGetters('application', [
      'userTheme',
      'user'
    ]),
    computedMember: function () {
      var member = this.member
      member['tasks'] = this.tasks
      return member
    }
  },
  data () {
    return {
      tasks: {}
    }
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks (member) {
      const request = {
        email: this.member.email,
        userId: this.user.id
      }
      db.functions.getTasks(request)
        .then((result) => {
          if (result.status) {
            this.tasks = result.tasks
          } else {
            console.log(result.error)
            notify('Falha na comunicação com o servidor', 'Negative')
          }
        })
    },
    textSublabel (tasks) {
      var string = tasks.length > 0 ? 'Resumo: ' : 'Sem tarefas cadastradas'
      const status = []
      tasks.forEach(task => {
        if (status.indexOf(task.status) < 0) {
          status.push(task.status)
        }
      })
      status.sort()
      const values = []
      status.forEach((stat, index) => {
        values.push(0)
        tasks.forEach(task => {
          if (task.status === stat) {
            values[index] += 1
          }
        })
        string += stat + ': ' + values[index] + ((status.length - 1) !== index ? ' | ' : '')
      })
      return string
    }
  }
}
</script>
