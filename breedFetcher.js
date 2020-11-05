const request = require('request');

const breed = process.argv[2];

const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

request(URL, (error, response, body) => {
  
  if (body === '[]') {
    console.log("Breed not Found");
  } else {

  const data = JSON.parse(body);
  console.log(data[0]["description"]);
  
  }
  

});