<template>
  <div class="row">
    <div class="col-12">
      <formmember></formmember>
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import formmember from './../molecules/form-member'
import validateform from './../bosons/validate-form/member-form/'
import notify from './../bosons/notify'
import { db } from './../../services/firebase/'

export default {
  name: 'PushMember',
  computed: {
    ...mapGetters(['userTheme', 'form']),
    validation: function () {
      return validateform(this.form)
    },
    formatedForm () {
      const form = this.form
      return {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password,
        isAdmin: form.isAdmin
      }
    }
  },
  methods: {
    ...mapActions(['setForm']),
    validate () {
      if (this.validation.isValidate) {
        this.pushMember()
      } else {
        notify(this.validation.message, this.validation.type)
      }
    },
    pushMember () {
      this.$q.loading.show({ delay: 400 })
      db.functions.pushMember(this.formatedForm)
        .then(response => {
          this.processResponse(response)
        })
    },
    processResponse (response) {
      if (response.status) {
        this.clearForm()
        notify(response.message, 'positive')
        this.$router.push('gerenciarequipe')
      } else {
        notify(response.message, 'negative')
      }
      this.$q.loading.hide()
    },
    clearForm () {
      this.setForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
        isAdmin: ''
      })
    }
  },
  components: {
    formmember
  }
}
</script>
