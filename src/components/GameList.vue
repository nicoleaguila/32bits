<template>
<div>
    <h1>Game's list</h1>
  <ul>
      <li v-for="(game, index) in games" :key= "index" :style='{"background-color":game.color}'> {{ game.code }} - {{ game.name }} - {{ game.stock }} - {{ game.price }}</li>
  </ul>
  </div>
</template>

<script>
export default {
props: {
    games: {
        type: Array,
        required: true
    }
}
}
</script>

<style>

</style>