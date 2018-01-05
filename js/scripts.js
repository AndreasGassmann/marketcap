const Moon = require("moonjs");

require("./store/store.js").init(Moon);
const store = require("./store/store.js").store;

require("./components/header.moon")(Moon);
require("./components/main.moon")(Moon);

new Moon({
  el: "#app",
  hooks: {
    mounted() {
      store.dispatch("FETCH_COINS");
    }
  },
  methods: {
    changeCurrency: function() {
      store.dispatch('CHANGE_CURRENCY');
    }
  }
});
