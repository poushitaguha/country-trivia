const express = require('express');
const app = express();
const request = require('request');
const port = 5000;

app.get('/countrydetails', (req, res) => {
  const country = 'canada';
  request(
    'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true',
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var parsedData = JSON.parse(body);
        for (let i = 0; i < parsedData.length; i++) {
          // console.log(parsedData[i]);
          // Get the Country, Capital, Continent and Currency from parsed JSON data
          var name = parsedData[i].name;
          var capital = parsedData[i].capital;
          var region = parsedData[i].region;
          var flag = parsedData[i].flag;
          var currency = parsedData[i].currencies[0].name;
          var population = parsedData[i].population;
          res.send({ name, capital, region, currency, flag, population });
        }
      }
    }
  );
});

app.get('/countryquiz', (req, res) => {
  // const country = document.getElementById('inputCountry').value;
  request(
    // 'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true',
    'https://restcountries.eu/rest/v2/name/india?fullText=true',
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var parsedData = JSON.parse(body);
        for (let i = 0; i < parsedData.length; i++) {
          // console.log(parsedData[i]);
          // Get the Country, Capital, Continent and Currency from parsed JSON data
          var name = parsedData[i].name;
          var capital = parsedData[i].capital;
          var region = parsedData[i].region;
          var currency = parsedData[i].currencies[0].name;
          res.send({ name, capital, region, currency });
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
