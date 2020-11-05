const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      if (body === '[]') {
        callback("Breed not Found");
      } else {
        const data = JSON.parse(body);
        callback(data[0]["description"]);
      }
    }
  });
};




module.exports = {fetchBreedDescription};