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
import { mapGetters } from 'vuex'
import formmember from './../molecules/formmember'
import validateform from './../bosons/validate-form/member-form/'
import notify from './../bosons/notify'

export default {
  name: 'PushMember',
  computed: {
    ...mapGetters(['userTheme', 'form']),
    validation: function () {
      return validateform(this.form)
    }
  },
  methods: {
    validate () {
      if (this.validation.isValidate) {
        notify('Cadastrado, fim do teste :D', 'positive')
      } else {
        notify(this.validation.message, 'warning')
      }
    }
  },
  components: {
    formmember
  }
}
</script>
