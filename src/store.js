import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32bits",
    subtitle: "Juegos de PC y consolas",
    sales: [],
    games: [
      {code: '0001', name: 'Sekiro', stock: 100, price: 30000, color: 'red', sale: true},
      {code: '0002', name: 'Fifa 21', stock: 100, price: 25000, color: 'blue', sale: false},
      {code: '0003', name: 'Gears of War 4', stock: 100, price: 15000, color: 'green', sale: true},
      {code: '0004', name: 'Mario Tennis Aces', stock: 100, price: 35000, color: 'yellow', sale: false},
      {code: '0005', name: 'Bloodborne', stock: 100, price: 10000, color: 'blue', sale: false},
      {code: '0006', name: 'Forza Horizon 4', stock: 100, price: 20000, color: 'red', sale: true}
      ]
  },
  getters: {
    findGame: (state) => (code) =>{
      return state.games.filter ((prod) =>{
      return prod.code == code
    })
  },
  availableGames(state) {
    return state.games.filter((game) => {
    return game.stock > 0 
    })
  }
    },
 
  mutations: {
    DEDUCT_STOCK (state, game){
      let selectedGame= state.games.find((xgame) => {
        return xgame.code == game.code
      })
      selectedGame.stock--
    },
    ADD_SALES (state, game){
       state.sales.push(game)
    }
  },
  actions: {
    processSale({ commit }, game) {
      if (game.stock > 0) {
        setTimeout(() => {
          commit ("DEDUCT_STOCK", game) 
        setTimeout (() =>{
          commit("ADD_SALES", {code: game.code, name: game.name, price: game.price})
          alert("venta confirmada")
        }, 1500);
      }, 2000);
    }
  }
}
})
export default store;
