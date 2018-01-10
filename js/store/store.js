const Monx = require("monx");
const api = require('../util/api.js');

module.exports.store = {};

module.exports.init = function (Moon) {
  Moon.use(Monx);
  module.exports.store = new Monx({
    state: {
     coins: [
      {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: "1",
      price_usd: "16105.9",
      price_btc: "1.0",
      "24h_volume_usd": "15941600000.0",
      market_cap_usd: "270396511306",
      available_supply: "16788662.0",
      total_supply: "16788662.0",
      max_supply: "21000000.0",
      percent_change_1h: "-2.35",
      percent_change_24h: "-6.96",
      percent_change_7d: "15.22",
      last_updated: "1515376161"
      },
      {
      id: "ripple",
      name: "Ripple",
      symbol: "XRP",
      rank: "2",
      price_usd: "3.26461",
      price_btc: "0.00020441",
      "24h_volume_usd": "2262260000.0",
      market_cap_usd: "126468199659",
      available_supply: "38739144847.0",
      total_supply: "99993093880.0",
      max_supply: "100000000000",
      percent_change_1h: "-1.2",
      percent_change_24h: "3.13",
      percent_change_7d: "43.36",
      last_updated: "1515376141"
      },
      {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: "3",
      price_usd: "1206.27",
      price_btc: "0.0755282",
      "24h_volume_usd": "6160440000.0",
      market_cap_usd: "116813807391",
      available_supply: "96838856.0",
      total_supply: "96838856.0",
      max_supply: null,
      percent_change_1h: "-0.78",
      percent_change_24h: "14.47",
      percent_change_7d: "59.47",
      last_updated: "1515376150"
      },
      {
      id: "bitcoin-cash",
      name: "Bitcoin Cash",
      symbol: "BCH",
      rank: "4",
      price_usd: "2737.59",
      price_btc: "0.17141",
      "24h_volume_usd": "1415720000.0",
      market_cap_usd: "46263594226.0",
      available_supply: "16899388.0",
      total_supply: "16899388.0",
      max_supply: "21000000.0",
      percent_change_1h: "-1.36",
      percent_change_24h: "-1.78",
      percent_change_7d: "8.7",
      last_updated: "1515376152"
      },
      {
      id: "cardano",
      name: "Cardano",
      symbol: "ADA",
      rank: "5",
      price_usd: "0.968674",
      price_btc: "0.00006065",
      "24h_volume_usd": "225982000.0",
      market_cap_usd: "25114879126.0",
      available_supply: "25927070538.0",
      total_supply: "31112483745.0",
      max_supply: "45000000000.0",
      percent_change_1h: "-1.39",
      percent_change_24h: "-5.21",
      percent_change_7d: "35.28",
      last_updated: "1515376154"
      },
      {
      id: "nem",
      name: "NEM",
      symbol: "XEM",
      rank: "6",
      price_usd: "1.74424",
      price_btc: "0.00010921",
      "24h_volume_usd": "124482000.0",
      market_cap_usd: "15698159998.0",
      available_supply: "8999999999.0",
      total_supply: "8999999999.0",
      max_supply: null,
      percent_change_1h: "-1.23",
      percent_change_24h: "6.78",
      percent_change_7d: "66.88",
      last_updated: "1515376145"
      },
      {
      id: "litecoin",
      name: "Litecoin",
      symbol: "LTC",
      rank: "7",
      price_usd: "284.812",
      price_btc: "0.017833",
      "24h_volume_usd": "1037190000.0",
      market_cap_usd: "15567925926.0",
      available_supply: "54660358.0",
      total_supply: "54660358.0",
      max_supply: "84000000.0",
      percent_change_1h: "-1.24",
      percent_change_24h: "-4.72",
      percent_change_7d: "23.46",
      last_updated: "1515376141"
      },
      {
      id: "stellar",
      name: "Stellar",
      symbol: "XLM",
      rank: "8",
      price_usd: "0.671321",
      price_btc: "0.00004203",
      "24h_volume_usd": "334798000.0",
      market_cap_usd: "12001783329.0",
      available_supply: "17877860708.0",
      total_supply: "103570548975",
      max_supply: null,
      percent_change_1h: "-1.45",
      percent_change_24h: "-6.33",
      percent_change_7d: "69.12",
      last_updated: "1515376143"
      },
      {
      id: "tron",
      name: "TRON",
      symbol: "TRX",
      rank: "9",
      price_usd: "0.18116",
      price_btc: "0.00001134",
      "24h_volume_usd": "1746270000.0",
      market_cap_usd: "11910942549.0",
      available_supply: "65748192475.0",
      total_supply: "100000000000",
      max_supply: null,
      percent_change_1h: "-5.04",
      percent_change_24h: "2.48",
      percent_change_7d: "300.54",
      last_updated: "1515376154"
      },
      {
      id: "iota",
      name: "IOTA",
      symbol: "MIOTA",
      rank: "10",
      price_usd: "4.05925",
      price_btc: "0.00025416",
      "24h_volume_usd": "252246000.0",
      market_cap_usd: "11282808301.0",
      available_supply: "2779530283.0",
      total_supply: "2779530283.0",
      max_supply: "2779530283.0",
      percent_change_1h: "-2.49",
      percent_change_24h: "2.06",
      percent_change_7d: "13.55",
      last_updated: "1515376151"
      }
      ]
    },
    actions: {
      "FETCH_COINS": (state, info) => {
        api.fetchCoins().then(data => {
          console.log(state.coins);
          console.log(data);
          // state.coins = data;
          // state = { coins: data };
        }).catch(err => console.log('error fetching prices', err));
      }
    }
  });
}