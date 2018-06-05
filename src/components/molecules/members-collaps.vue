<template>
  <div class="col-12">
    <q-inner-loading :visible="loading">
      <q-spinner-facebook size="100px" :color="userTheme" />
    </q-inner-loading>
    <transition-group enter-active-class="animated fadeInUp">
      <div v-if="members.length > 0" key="verify">
        <q-collapsible
          v-for="(member, memberKey) of members" :key="memberKey"
          popup icon="person_outline"
          :label="member.name"
          :sublabel="textSublabel(member.tasks)">
          <div>Detalhes aparecerão aqui</div>
        </q-collapsible>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: ['members', 'loading'],
  computed: {
    ...mapGetters('application', ['userTheme'])
  },
  methods: {
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
