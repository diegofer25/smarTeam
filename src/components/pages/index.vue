<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container>
      <q-page class="flex">
          <div class="row">
            <div class="col-10 offset-1">
              <q-btn
                icon="exit_to_app"
                label="Login"
                push
                color="primary"
                @click.stop="login"/>
            </div>
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
</style>

<script>
import firebase from './../../plugins/firebase'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        email: 'diego.lamarao@gmail.com',
        password: '123456',
        remember: false
      }
    }
  },
  computed: {
    ...mapGetters(['hasUser'])
  },
  methods: {
    ...mapActions(['loginUser']),
    login () {
      firebase.app.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((response) => {
          console.log(response.user)
          this.loginUser(response.user)
          this.$router.push('smarteam')
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
