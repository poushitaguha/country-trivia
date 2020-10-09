const express = require('express');
const app = express();
const request = require('request');
const port = process.env.PORT || 5000;

app.get('/countrydetails', (req, res) => {
  // Get Country Name from req
  const country = req.query.countryName;
  request(
    'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true',
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var parsedData = JSON.parse(body);
        for (let i = 0; i < parsedData.length; i++) {
          console.log(parsedData[i]);
          // Get the Country, Capital, Continent, Currency, Flag, Population and Language
          // from parsed JSON data
          var name = parsedData[i].name;
          var capital = parsedData[i].capital;
          var region = parsedData[i].region;
          var flag = parsedData[i].flag;
          var currency = parsedData[i].currencies[0].name;
          var population = parsedData[i].population;
          var language = parsedData[i].languages[0].name;
          res.send({
            name,
            capital,
            region,
            flag,
            currency,
            population,
            language
          });
        }
      }
    }
  );
});

app.get('/countryquiz', (req, res) => {
  // Get Country Name from req
  const country = req.query.countryName;
  request(
    'https://restcountries.eu/rest/v2/name/' + country + '?fullText=true',
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var parsedData = JSON.parse(body);
        for (let i = 0; i < parsedData.length; i++) {
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
