const axios = require('axios');


let $input = document.querySelector('.search-input');
let $button = document.querySelector('#search-btn');
let $error = document.querySelector('#error');
$button.addEventListener('click', () => {
    let movieSearch = $input.value;

    axios
        .get(`http://www.omdbapi.com/?t=${movieSearch}&APIkey=a4adc5f`)
        .then(apiResponse => {
            let movieData = apiResponse.data;

            let $movieTitle = document.querySelector('#title');
            $movieTitle.src = movieData.title;

        })
        .catch(err => {
            $error.innerHTML = 'movie cannot be found in database';
        });
});