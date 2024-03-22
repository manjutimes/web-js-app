
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
request.setRequestHeader("Authorization", "Bearer eyJ4NXQiOiJZV1kxTm1Sa1pHSTVNekU0T0RCbFpEUmlNV0k0WldKbE5qRXhaV1ZpWmpFek1tTm1ORFUzWVEiLCJraWQiOiJNV1E1TldVd1lXWmlNbU16WlRJek16ZG1NekJoTVdNNFlqUXlNalZoTldNNE5qaGtNR1JtTnpGbE1HSTNaRGxtWW1Rek5tRXlNemhoWWpCaU5tWmhZd19SUzI1NiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2ZDUwZTk1Yi03MjFlLTRmNjEtOWUyOS1mMDM3NDM2ZDJmMDUiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6IjdnaFNUeFRhbzFrSHFxRXRITHZfaWdOVkRBQWEiLCJuYmYiOjE3MTEwOTYwNjgsImF6cCI6IjdnaFNUeFRhbzFrSHFxRXRITHZfaWdOVkRBQWEiLCJzY29wZSI6ImRlZmF1bHQiLCJvcmdhbml6YXRpb24iOnsidXVpZCI6IjZkNTBlOTViLTcyMWUtNGY2MS05ZTI5LWYwMzc0MzZkMmYwNSJ9LCJpc3MiOiJodHRwczpcL1wvc3RzLmNob3Jlby5kZXY6NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNzExMDk5NjY4LCJpYXQiOjE3MTEwOTYwNjgsImp0aSI6ImU0OTQ0YWYxLTcxNDYtNDU1My1hZmRiLTgzZTA4ZDY1M2NkYyJ9.SuV5PpDp-UEG-IwV1rqZTFxugkPrgqWob6yTekdI56VBsfI9Ax-9LK1KwkX55GD6v45V30r_ayJDXiq6Rj9WEsjBuw2ZX-3Q-MRx6LrR6AqR6yUHioevvJyVbOrUQfxT_QH1Hmw9ktn9v5no9yCsc1HisYvwEIE9K08Q5AXvn0k3ZhM7oCRJhl_nXnpmh3JLkjpIZm8kmo8Rj6jokGOrwbNyG_a8oQAkJL0SLuzvCfhuMFfri8TKyUNPsj2N0eROZgKW_KBZAQKwPD87nd3G5l81krGvWv5X28j2ampvLIUWb6aqA1GSY61rRRHZFdzs9JmZcFL-HZBn0Z230MP8nfS8NaUmy3dN_4EIZtNtIpHvY0WM-NWyVjCECB7lOq2B3Vviz0r-k7R9ZI3MdnLVhgFm7WLaZ-L__z6HvsUZRo7jPzg5Q03acWQXXFdkeV5futDIJt9xI53eQFQzDNb3B2jwAr2QNiXiZruw2OiXdSdld2mk1u9GXu7-ojtSst2OIX_gSD0e2mZ4AytYUK0nbntfJ7mI16E6Z2uq-VL6erXk0HhuwZS_NbPOEoYRyLvpAwKGTiiWDzWCtUoSQVPrc0fpLVe4s5LVKnFIS19X_Gxj7K1W8o-1q1RpAlN3xk4qKXmCoCBiixV81vKV9o9rXZ92zQzwpYKNRFJz-1f1Qfk" ); 
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