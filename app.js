require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require('hbs');

app.use(bodyParser.urlencoded({ extended: false }));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(
  session({
    secret: 'basic-auth-secret',
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // (1 day) time to live = how long the cookie will be valid
    }),
  })
);

mongoose
  .connect(process.env.db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(x => {
    console.log(`Connected to MongoDB name: "${x.connections[0].name}"`);
  })
  .catch(error => {
    console.log('Unexpected error, connection failed!', error);
  });

function protect(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect('/user/login');
  }
}

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user/profile', protect);
app.use('/movies', protect);
app.use('/addmovie', protect);
app.use('/moviesrated', protect);
app.use('/moviedetail', protect);

app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/', require('./routes/movies'));
app.use('/', require('./routes/friends'));
app.use('/', require('./routes/logout'));

app.listen(process.env.PORT, () => {
  console.log('app listening on', process.env.PORT);
});
