<template>
  <div class="row">
    <div class="col-12">
      <formmember name="true" cpf="true" email="true" isAdmin="true"/>
      <div class="row justify-around">
        <div class="col-10">
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
          <q-btn icon="control_point" push @click.stop="validate" :color="userTheme">
            Cadastrar
          </q-btn>
        </div>
      </div>
      <q-inner-loading :visible="isLoading">
        <q-spinner-facebook size="100px" :color="userTheme" />
      </q-inner-loading>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import formmember from './../molecules/form'
import validateform from './../bosons/validate-form/member/'
import notify from './../bosons/notify'
import { db } from './../../services/firebase/'

export default {
  name: 'PushMember',
  computed: {
    ...mapGetters('application', [
      'userTheme',
      'form',
      'user'
    ]),
    validation: function () {
      return validateform(this.form)
    },
    formatedForm () {
      const form = this.form
      return {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        isAdmin: form.isAdmin
      }
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions('application', [
      'setForm'
    ]),
    ...mapActions('business', [
      'updateMembers'
    ]),
    validate () {
      if (this.validation.isValidate) {
        this.isLoading = true
        this.pushMember()
      } else {
        notify(this.validation.message, this.validation.type)
      }
    },
    pushMember () {
      const request = {
        form: this.formatedForm,
        userId: this.user.id
      }
      db.functions.pushMember(request)
        .then(response => {
          this.processResponse(response)
        })
    },
    processResponse (response) {
      if (response.status) {
        this.updateMembers(this.user.id)
        this.clearForm()
        notify(response.message, 'positive')
        this.$router.push('gerenciarequipe')
      } else {
        notify(response.message, 'negative')
      }
      this.isLoading = false
    },
    clearForm () {
      this.setForm({ name: '', email: '', cpf: '', password: '', confirmPassword: '', isAdmin: '' })
    }
  },
  components: {
    formmember
  }
}
</script>
