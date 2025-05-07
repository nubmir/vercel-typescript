const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Seems Good');
});

app.listen(3001, () => {
  console.log('server up!');
});

module.exports = app;