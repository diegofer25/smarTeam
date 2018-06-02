<template>
  <div class="row">
    <div class="col-12">
      <q-card>
        <q-card-title>
          <q-icon
            name="person_add"
            :color="userTheme"
            size="35px"/>
          Adicionar um membro na equipe
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="row q-px-lg q-pt-md">
            <div class="col-sm-12 q-pa-sm">
              <q-field :count="50">
                <q-input type="text" :maxlength="50" float-label="Nome Completo" placeholder="Ex: Fulado de Tal"
                  v-model="name"/>
              </q-field>
            </div>
            <div class="col-sm-12 col-md-6 q-pa-sm">
              <q-field :count="11">
                <q-input type="text" :maxlength="11" float-label="CPF" placeholder="Ex: 12345678910"
                  v-model="cpf"/>
              </q-field>
            </div>
            <div class="col-sm-12 col-md-6 q-pa-sm">
              <q-field :count="50">
                <q-input type="email" :maxlength="50" float-label="E-mail" placeholder="Ex: meu.email@dominio.com"
                  v-model="email"/>
              </q-field>
            </div>
            <div class="col-sm-12 col-md-6 q-pa-sm">
              <q-field :count="16"
                helper="Deve conter pelo menos 6 caracteres">
                <q-input type="password" :maxlength="16" float-label="Senha" placeholder="Forneça uma senha"
                  v-model="password"/>
              </q-field>
            </div>
            <div class="col-sm-12 col-md-6 q-pa-sm">
              <q-field :count="16">
                <q-input type="password" :maxlength="16" float-label="Confirme a Senha"
                  v-model="confirmPassword"/>
              </q-field>
            </div>
            <div class="col-sm-12 col-md-6 q-pa-sm">
              <q-toggle icon="done" label="Tornar Administrador?" :color="userTheme"
                v-model="isAdmin"/>
              <span class="q-body-2">{{isAdmin ? 'Sim' : 'Não'}}</span>
            </div>
          </div>
          <div class="row justify-around">
            <div class="col-10 q-pa-sm">
              <div class="row justify-around">
                <q-alert
                  :type="validation.type">
                  {{validation.message}}
                </q-alert>
              </div>
            </div>
          </div>
          <div class="row q-px-lg q-pt-md">
            <div class="col-sm-12 col-md-6 q-pa-sm">
              <q-btn
                icon="control_point"
                push
                @click.stop="validate"
                :color="userTheme">
                Cadastrar
              </q-btn>
            </div>
          </div>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import validateform from './../bosons/validateform'

export default {
  name: 'PushMember',
  computed: {
    ...mapGetters(['userTheme']),
    validation: function () {
      return validateform({
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        isAdmin: this.isAdmin,
        cpf: this.cpf
      })
    }
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAdmin: '',
      cpf: ''
    }
  },
  methods: {
    validate () {
      if (this.validation.isValidate) {
        this.notify('Cadastrado, fim do teste :D', 'positive')
      } else {
        this.notify(this.validation.message, 'warning')
      }
    },
    notify (message, type) {
      this.$q.notify({
        message: message,
        type: type,
        timeout: 2000,
        position: type === 'warning' ? 'top-right' : 'center'
      })
    }
  }
}
</script>
