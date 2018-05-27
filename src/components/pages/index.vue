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
import firebase from './../../firebase'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        email: 'diego.lamarao92@gmail.com',
        name: 'Diego Lamarão',
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
        .then(response => {
          if (!response.user.displayName) {
            this.updateUser(response)
          }
          const user = {
            uid: response.user.uid,
            email: response.user.email,
            displayName: response.user.displayName ? response.user.displayName : this.form.name,
            photo: response.user.photoURL ? response.user.photoURL : './../../assets/user-profile.png'
          }
          this.loginUser(user)
          this.$router.push('/home')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    updateUser (response) {
      response.user.updateProfile({
        displayName: this.form.name,
        photoURL: './../../assets/user-profile.png'
      }).then(user => {
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
