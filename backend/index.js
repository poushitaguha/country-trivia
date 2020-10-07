const express = require('express');
const app = express();
const request = require('request');
const port = 5000;

// app.get('/countrydetails', (req, res) => {
//   request(
//     'https://restcountries-v1.p.rapidapi.com/all?rapidapi-key=b8affda141mshd5ab74ebd5087c7p1abc68jsn209947cdf239',
//     function(error, response, body) {
//       if (!error && response.statusCode == 200) {
//         res.send(body);
//         // var parsedData = JSON.parse(body);
//         // var temp_c = parsedData.main.temp;
//         // res.send({ temp_c });
//       }
//     }
//   );
// });

// app.get('/countryquiz', (req, res) => {
//   request(
//     'https://restcountries-v1.p.rapidapi.com/all?rapidapi-key=b8affda141mshd5ab74ebd5087c7p1abc68jsn209947cdf239',
//     function(error, response, body) {
//       if (!error && response.statusCode === 200) {
//         // res.send(body);
//         var parsedData = JSON.parse(body);
//         // var temp_c = parsedData.main.temp;
//         // res.send({ temp_c });
//         console.log(parsedData);
//         for (let i = 0; i < parsedData.length; i++) {
//           console.log(parsedData[i]);
//           // Get the Country and Capital from parsed JSON data
//           // var name = parsedData[i].name;
//           var capital = parsedData[i].capital;
//           var currency = parsedData[i].currencies;
//         }
//       }
//     }
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
