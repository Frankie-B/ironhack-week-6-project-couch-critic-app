const express = require('express');
const app = express();
const axios = require('axios');

app.get('/moviedetail', (req, res) => {
  res.render('movies/movieDetail');
});

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

module.exports = app;


// function initPage() {
//   let $input = document.querySelector('.search-input');
//   let $button = document.querySelector('#search-btn');
//   let $title = document.querySelector('#title');
//   //let $error = document.querySelector('#error');
//   $button.addEventListener('click', () => {
//     let movieSearch = $input.value;

//     axios
//       .get(`http://www.omdbapi.com/?t=${movieSearch}&APIkey=a4adc5f`)
//       .then(apiResponse => {
//         let movie = apiResponse.data;
//         $title = movie.Title;
//         $year = movie.Year;
//         $released = movie.Resealed;
//         $director = movie.Director;
//         $poster = movie.Poster;
//       });
//     // .catch(err => {
//     //   console.log(err)
//     // })
//   });
// }
// window.addEventListener('DOMContentLoaded', initPage, false);

// ///////////////////////////////
// axios
//   .get('http://api.coindesk.com/v1/bpi/historical/close.json')
//   .then(responseFromAPI => {
//     printTheChart(responseFromAPI.data);
//   })
//   .catch(err => {
//     console.log('Error while getting the data: ', err);
//   });

// function printTheChart(stockData) {
//   const bitcoinDates = Object.keys(stockData);
//   const bitcoinPrices = Object.values(stockData);
//   var ctx = document.getElementById('myChart');
//   var myChart = new Chart(ctx, {
//     debugger
//     type: 'line',
//     data: {
//       labels: ['dates'],
//       datasets: [
//         {
//           label: '# of Votes',

//           //////////////////////////////

// let $input = document.querySelector('.search-input');
// let $button = document.querySelector('#search-btn');
// let $abilities = document.querySelector('#abilities');
// let $error = document.querySelector('#error');
// $button.addEventListener('click', () => {
//   let movieSearch = $input.value;

//   axios
//     .get(`http://www.omdbapi.com/?t=${movieSearch}&APIkey=a4adc5f`)
//     .then(apiResponse => {
//       let movieData = apiResponse.data;

//       let $movieTitle = document.querySelector('#title');
//       $movieTitle.src = movieData.title;
//       }
//     })
//     .catch(err => {
//       $error.innerHTML = 'non-existing pokemon';
//     });
// });

/*
http://www.omdbapi.com/?t=silence&APIkey=a4adc5f
http://www.omdbapi.com/?t=pokemon&APIkey=a4adc5f

{
    "Title": "Silence",
    "Year": "2016",
    "Rated": "R",
    "Released": "13 Jan 2017",
    "Runtime": "161 min",
    "Genre": "Drama, History",
    "Director": "Martin Scorsese",
    "Writer": "Jay Cocks (screenplay by), Martin Scorsese (screenplay by), Shûsaku Endô (based on the novel by)",
    "Actors": "Andrew Garfield, Adam Driver, Liam Neeson, Tadanobu Asano",
    "Plot": "In the 17th century, two Portuguese Jesuit priests travel to Japan in an attempt to locate their mentor, who is rumored to have committed apostasy, and to propagate Catholicism.",
    "Language": "English, Japanese, Latin",
    "Country": "USA, UK, Taiwan, Japan, Mexico, Italy",

*/
