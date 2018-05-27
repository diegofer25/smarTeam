<template>
  <div>
    Você está logado!
    <code>
      {{user}}
    </code>
  </div>
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
