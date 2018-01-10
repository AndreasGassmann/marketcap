const request = require('request-promise-native');

const options = {
  uri: 'https://api.coinmarketcap.com/v1/ticker/?limit=0',
  json: true
};

let getPrices = () => {
  request(options)
    .then(function (prices) {
      console.log('test');
      //console.log(prices);
      let leader = prices[20];

      prices.forEach((p, i) => {
        if (i < 150) {
          let amount = leader.market_cap_usd / p.available_supply;
          console.log(p.symbol + ' could be $' + amount);
          }
        });
      //console.log('Prices', prices);
    })
    .catch(function (err) {
      // API call failed...
    });
}

getPrices();