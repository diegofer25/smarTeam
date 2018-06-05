<template>
  <div class="row" style="min-height: 100vh;">
    <q-action-sheet v-model="actionSheet" title="Açõs Gerenciais" grid
        @ok="managerAction" :actions="actions"/>
    <div class="col-12">
      <div class="row justify-around">
        <span class="col-10 panel-title">
          <q-btn push :icon="actionSheet ? 'close' : 'view_module'"
            :color="userTheme" @click.stop="actionSheet = !actionSheet">
            Gerenciar Equipe
          </q-btn>
        </span>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-10 offset-md-1 q-pa-sm">
          <transition name="slide-fade">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TeamManager',
  computed: {
    ...mapGetters('application', ['userTheme'])
  },
  data () {
    return {
      userId: 123321123,
      actionSheet: false,
      actions: [
        {
          label: 'Adicionar Membro',
          icon: 'person_add',
          value: 'add',
          color: 'brown'
        },
        {
          label: 'Remover Membro',
          icon: 'remove_circle',
          value: 'remove',
          color: 'brown'
        }
      ]
    }
  },
  methods: {
    managerAction (item) {
      if (item.value === 'add') {
        this.$router.push('/adicionarmembro')
      } else if (item.value === 'remove') {
        this.$router.push({
          path: '/removermembro/' + this.userId
        })
      }
    }
  }
}
</script>

<style>
  .panel-title {
    padding: 15px 0 10px 0;
  }
  .slide-fade-enter-active {
    transition: .4s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-1000px);
    opacity: 0.5;
  }
</style>
