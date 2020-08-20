<template>
<div>
      <b><p>Juegos disponibles: {{ availableGames.length }}</p></b>
    <GameList :games="availableGames" :displayButton="true" @emit-sale="initSale" />
</div>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import GameList from './GameList'

export default {
    components: {
        GameList
    },
    computed:{
         ...mapGetters(["availableGames"]),
         },
         methods:{
             ...mapActions(["processSale"]),
             initSale(game){
              this.processSale(game)   
             }
      }
    }
</script>

<style>

</style>