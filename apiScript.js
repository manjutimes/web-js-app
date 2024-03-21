
const tokenUrl = window.config.tokenUrl;
const consumerKey = window.config.consumerKey;
const consumerSecret = window.config.consumerSecret;

var tokenApi = new XMLHttpRequest();
var accessToken = '';
tokenApi.open('POST', tokenUrl, true);
tokenApi.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
var encodedString = btoa(consumerKey+':'+consumerSecret);
tokenApi.setRequestHeader("Authorization", "Basic " + encodedString); 
tokenApi.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
  accessToken = data.access_token;
  }
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Err,token api failed`;
    app.appendChild(errorMessage);
  }
}
tokenApi.send("grant_type=client_credentials");




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
request.setRequestHeader("Authorization", "Bearer " + accessToken); 
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