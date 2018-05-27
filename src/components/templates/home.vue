<template>
  <q-page class="flex">
    <div class="col-sm-12 col-10">
      <div class="row main justify-around">
        Você está logado!
        <div class="col-10 offset-1">
          Olá {{user.name}}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
