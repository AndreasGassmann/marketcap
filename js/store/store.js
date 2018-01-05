const Monx = require("monx");
const api = require('../util/api.js');

module.exports.store = {};

module.exports.init = function (Moon) {
  Moon.use(Monx);
  module.exports.store = new Monx({
    state: {
     coins: []
    },
    actions: {
      "FETCH_COINS": (state, info) => {
        api.fetchCoins().then(data => {
          console.log(data);
          state.coins = data;
          state = { coins: data };
        }).catch(err => console.log('error fetching prices', err));
      }
    }
  });
}