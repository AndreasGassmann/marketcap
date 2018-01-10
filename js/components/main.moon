<template>
  <ul>
    <li m-for="coin in store.state.coins">{{ coin.name }}</li>
  </ul>
</template>
<style scoped>

</style>
<script>
  const store = require("../store/store.js").store;
  exports = {
    store: store
  }
</script>