<template>
<div>
    <h1>Game's list</h1>
  <ul>
      <li v-for="(game, index) in games" :key= "index" :style='{"background-color":game.color}'> {{ game.code }} - {{ game.name }} - {{ game.stock }} - {{ game.price }}
       <button v-if="displayButton" @click="emitSale(game)">vender</button> </li>
  </ul>
  </div>
</template>

<script>
export default {
props: {
    games: {
        type: Array,
        required: true,
        },
     displayButton: {
            type: Boolean,
            default: false
        }
},
methods: {
    emitSale(game){
        this.$emit('emit-sale', game)
    }
}
}
</script>

<style>

</style>