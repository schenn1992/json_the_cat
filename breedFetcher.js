const request = require('request');

request("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  if (error) {
    console.log('fails to download: ', error, response.statusCode); 
    return;
  }
  
  const data = JSON.parse(body);
  console.log(data);
  console.log(data[0]);

});