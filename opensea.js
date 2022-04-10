const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/assets', options)
  .then(response => response.json())
  .then(function(response) {
    console.log(response.assets)
    return response
  })
.catch(err => console.error(err));
