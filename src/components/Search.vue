<template>
<div>
    <b><p>Juegos disponibles: {{ games.length }}</p></b>
    <b><p>Busca tu juego</p></b>
    <input type="text" placeholder="Escribe un codigo" v-model= "search"/>
  <GameList :games="filterGames"/>
 

</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import GameList from './GameList'
export default {
    data () {
        return {
            search: null,
    };
    },
    components:{
        GameList
    },
computed: {
    ...mapState (["games", "total"]),
    ...mapGetters (["findGame"]),
    
    
    filterGames () {
        if (this.search){
          return this.findGame(this.search)
        }else{
            return this.games
        }
      }
    }
}

</script>

<style>

</style>