<template>
  <div class="row">
    <div class="col-12">
      Eu vou remover o membro {{userId}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemoveMember',
  props: ['userId']
}
</script>
