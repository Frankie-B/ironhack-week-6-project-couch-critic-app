const express = require('express');
const app = express();

app.get('/logout', (req, res, next) => {
  req.session.destroy(err => {
    // cannot access session here
    res.redirect('user/logout');
  });
});

module.exports = app;
