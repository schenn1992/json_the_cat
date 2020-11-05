const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
      let errorMessage = "Breed not Found"
      callback(errorMessage, null);
  } else { 
      callback(null, data[0]["description"]);
  }
  });
};




module.exports = {fetchBreedDescription};