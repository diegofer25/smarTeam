<template>
  <div class="row">
    <div class="col-12">
      Eu vou remover o membro {{memberId}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemoveMember',
  data () {
    return {
      memberId: this.$router.params
    }
  }
}
</script>
