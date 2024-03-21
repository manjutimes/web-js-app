const axios = require('axios');
const { clientCredentials } = require('axios-oauth-client');

const tokenUrl = window.config.tokenUrl;
const consumerKey = window.config.consumerKey;
const consumerSecret = window.config.consumerSecret;

// consumerKey, consumerSecret and tokenUrl represent variables to which respective environment variables were read
const getClientCredentials = clientCredentials(
  create(),
  tokenUrl,
  consumerKey,
  consumerSecret
);
const auth = await getClientCredentials();
const accessToken = auth.access_token;




const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const apiUrl = window.config.apiUrl;
var request = new XMLHttpRequest();
request.open('GET', apiUrl+'/albums', true);
req.setRequestHeader("Authorization", "Bearer " + accessToken); 
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(tech => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = tech.title;

      const p = document.createElement('p');
      p.textContent = tech.artist;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Err, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();