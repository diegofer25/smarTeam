<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Desculpe mas a página não foi encontrada <strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      push
      @click="$router.push('/')"
    >Voltar</q-btn>
  </div>
</template>
