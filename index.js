const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  console.log(error)
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});








