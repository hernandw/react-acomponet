const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
  
  let data = resp.json;

  // parse json data here...
  
  console.log(resp);

});