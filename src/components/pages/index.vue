<template>
  <div id="main-login">
    <div class="index-video-wrapper">
      <video autoplay loop id="index-video">
        <source src="./../../statics/videos/workingspace.webm" type="video/webm">
      </video>
    </div>
    <div class="row text-white">
      <div class="col-10 offset-1">
        <div class="row text-center">
          <div class="col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h2>SmarTeam</h2>
            <h4>Teaser</h4>
          </div>
        </div>
        <div class="row text-center">
          <q-btn
            class="col-sm-10 offset-sm-1 col-md-6 offset-md-3 col-lg-2 offset-lg-5"
            icon="exit_to_app" label="Login" push size="lg" :color="userTheme"
            @click.stop="login">
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import firebase from './../../services/firebase/'
import loading from './../bosons/loading'

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
    ...mapGetters('application', [
      'hasUser',
      'userTheme'
    ])
  },
  methods: {
    ...mapActions('application', [
      'loginUser'
    ]),
    login () {
      loading.show('Aguarde, realizando login', this.userTheme)
      firebase.app.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(response => {
          if (!response.user.displayName) {
            this.updateUser(response)
          }
          this.loginUser({
            uid: response.user.uid,
            email: response.user.email,
            displayName: response.user.displayName ? response.user.displayName : this.form.name,
            photo: response.user.photoURL ? response.user.photoURL : './../../assets/user-profile.png'
          })
          this.$router.push('/home')
          loading.hide()
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

<style>
  #main-login {
    min-height: 100vh;
    background-color: rgba(0, 0, 0, .4);
  }

  #index-video {
    position: fixed;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -100;
    right: 0;
    bottom: 0;
    background-size: cover;
    overflow: hidden;
  }

  .index-video-wrapper {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
</style>
