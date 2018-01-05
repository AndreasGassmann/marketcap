let fetchCoins = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=0').then(function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return reject();
      }

      response.json().then(data => {
        resolve(data);
      });
    }).catch(err => {
      console.log('Fetch Error :-S', err);
      reject(err);
    });
  });
}

module.exports = {
  fetchCoins: fetchCoins
}