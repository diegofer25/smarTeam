<template>
  <div class="row" style="min-height: 100vh;">
    <div class="col-12">
      <div class="row main justify-around">
        <span class="q-title col-12 panel-title">
          <q-btn
            push
            :icon="actionSheet ? 'close' : 'view_module'"
            :color="userTheme"
            @click.stop="actionSheet = !actionSheet"> Gerenciar Equipe
          </q-btn>
        </span>
      </div>
      <div class="row justify-around">
        <router-view />
      </div>
      <q-action-sheet
        v-model="actionSheet"
        title="Açõs Gerenciais"
        grid
        @ok="managerAction"
        :actions="actions"
      />
    </div>
  </div>
</template>

<script>
import pushmember from './../organism/pushmember'
import { mapGetters } from 'vuex'

export default {
  name: 'TeamManager',
  computed: {
    ...mapGetters(['userTheme'])
  },
  data () {
    return {
      actionSheet: false,
      actions: [
        {
          label: 'Adicionar Membro',
          icon: 'person_add',
          value: 'add',
          color: 'grey'
        },
        {
          label: 'Remover Membro',
          icon: 'remove_circle',
          value: 'remove',
          color: 'grey'
        }
      ]
    }
  },
  methods: {
    managerAction (item) {
      if (item.value === 'add') {
        this.$router.push('adicionarmembro')
      } else if (item.value === 'remove') {
        this.$router.push({
          name: 'removermembro',
          params: { uid: 'esseéumiddeexemplo' }
        })
      }
    }
  },
  components: {
    pushmember
  }
}
</script>

<style>
  .panel-title {
    padding: 20px;
    padding-left: 100px;
  }
</style>
