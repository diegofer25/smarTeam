<template>
  <div class="row q-px-lg q-pt-md">
    <div class="col-sm-12 q-pa-sm">
      <q-field :count="50">
        <q-input autofocus type="text" :maxlength="50" float-label="Nome Completo" placeholder="Ex: Fulado de Tal"
          v-model="form.name"/>
      </q-field>
    </div>
    <div class="col-sm-12 col-md-6 q-pa-sm">
      <q-field :count="11"
        helper="Utilizado para recuperação de senha">
        <q-input type="text" :maxlength="11" float-label="CPF" placeholder="Ex: 12345678910"
          v-model="form.cpf"/>
      </q-field>
    </div>
    <div class="col-sm-12 col-md-6 q-pa-sm">
      <q-field :count="50">
        <q-input type="email" :maxlength="50" float-label="E-mail" placeholder="Ex: meu.email@dominio.com"
          v-model="form.email"/>
      </q-field>
    </div>
    <div class="col-sm-12 col-md-6 q-pa-sm">
      <q-field :count="16"
        helper="Deve conter pelo menos 6 caracteres">
        <q-input type="password" :maxlength="16" float-label="Senha" placeholder="Forneça uma senha"
          v-model="form.password"/>
      </q-field>
    </div>
    <div class="col-sm-12 col-md-6 q-pa-sm">
      <q-field :count="16">
        <q-input type="password" :maxlength="16" float-label="Confirme a Senha"
          v-model="form.confirmPassword"/>
      </q-field>
    </div>
    <div class="col-sm-12 col-md-6 q-pa-sm">
      <q-toggle icon="done" label="Tornar Administrador?" :color="userTheme"
        v-model="form.isAdmin"/>
      <span class="q-body-2">{{form.isAdmin ? 'Sim' : 'Não'}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FormMember',
  computed: {
    ...mapGetters('application', ['userTheme', 'form'])
  }
}
</script>
