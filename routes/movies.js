// /////////////////////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const axios = require('axios');
const Movie = require('../models/MovieModel');

app.post('/moviedetail', (req, res) => {
  axios
    .get(`http://www.omdbapi.com/?t=${req.body.movieSearch}&APIkey=a4adc5f`)

    .then(apiResponse => {
      let movieData = apiResponse.data;
      res.render('movies/movieDetail', { movie: movieData });
    })
    .catch(err => {});
});

app.get('/moviedetail', (req, res) => {
  res.render('movies/movieDetail');
});

// //  show all movies in database mongoDB
// change all the TTTT
app.get('/moviesrated', (req, res) => {
  Movie.find()
    .then(moviesData => {
      res.render('movies/moviesRated', { moviesHbs: moviesData });
    })
    .catch(err => {
      res.send('error');
    });
});


app.get('/addmovie', (req, res) => {
  res.render('movies/addMovie');
});

app.post('/addmovie', (req, res) => {
  console.log(req.body);
  Movie.create({
    Title: req.body.title,
    Rating: req.body.rating,
  })
    .then(moviesData => {
      res.render('movies/moviesRated', { moviesHbs: moviesData });
    })
    .catch(err => {
      res.send('error');
    });
});


// app.get('/movie/detail/:movieId', (req, res) => {
//   Movie.findById(req.params.movieId)
//     .then(movieData => {
//       res.render('movie', { movieHbs: movieData });
//     })
//     .catch(err => {
//       res.send('error');
//     });
// });

// app.get('/movie/search', (req, res) => {
//   res.render('movieSearch');
// });

// app.get('/movie/search/results', (req, res) => {
//   console.log(req.query.title);
//   Movie.find({ title: req.query.title })
//     .then(moviesData => {
//       res.render('movie', { movieHbs: movieData });
//     })
//     .catch(err => {
//       console.log('error', err);
//     });
// });

// app.get('/movie/create', (req, res) => {
//   res.render('createMovie');
// });

// app.post('/movie/create', (req, res) => {
//   console.log(req.body);
//   Movie.create({
//     Title: req.body.title,
//     Director: req.body.director,
//     Year: req.body.year,
//     Duration: req.body.duration,
//    Rate: req.body.duration
//   })
//     .then(movie => {
//       res.redirect(`/movie/detail/${movie._id}`);
//     })
//     .catch(err => {
//       res.send('error');
//     });
//   // res.render("createMovie");
// });

// app.get('/movie/delete/:id', (req, res) => {
//   Movie.findByIdAndDelete(req.params.id)
//     .then(movie => {
//       res.redirect('/movie');
//     })
//     .catch(err => {
//       console.log('Err', err);
//     });
// });
// app.get('/movie/update/:id', (req, res) => {
//   Movie.findById(req.params.id)
//     .then(movieData => {
//       res.render('updateMovie', { movieHbs: movieData });
//     })
//     .catch(err => {
//       res.send('Error');
//     });
// });

// app.post('/movie/update/:id', (req, res) => {
//   Movie.findByIdAndUpdate(req.params.id, {
//     title: req.body.title,
//     director: req.body.director,
//     year: req.body.year,
//     duration: req.body.duration,
//   })
//     .then(movie => {
//       res.redirect(`/movie/detail/${movie._id}`);
//     })
//     .catch(err => {
//       res.send('err');
//     });
// });

module.exports = app;

app.get('/create', (req, res) => {
  res.render('movies/createMovie');
});

app.post('/create', (req, res) => {
  console.log(req.body);
  Movie.create({
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
  })
    .then(movie => {
      res.redirect(`/movie/detail/${movie._id}`);
    })
    .catch(err => {
      res.send('error');
    });
  // res.render("createMovie");
});

module.exports = app;

/////////////////////////////////////////////////
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
