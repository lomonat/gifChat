const express = require('express')
const app = express();
const axios = require('axios');

const API_KEY = 'wYpU79NTKnDDmbjatNSJgtDsim1uJyKK';
const LIMIT = '&limit=1';

app.listen(8000, () => {
  console.log('Server started!')
})


axios.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + API_KEY + LIMIT)
  .then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
