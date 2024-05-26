require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

const static = express.static(path.join(__dirname, 'build'));

app.use('/', (req, res, next) => {
  // const hostname = req.hostname;
  // const [subdomain, ..._] = hostname.split('.');
  // if (subdomain == 'error') {
  //   res.sendFile(path.join(__dirname, 'error.html'));
  // } else {
  // }
  static(req, res, next);
  // res.sendFile(path.join(__dirname, 'error.html'));
});

app.use('*', function (_, res) {
  // const hostname = req.hostname;
  // const [subdomain, ..._] = hostname.split('.');
  // if (subdomain == 'error') {
  //   res.sendFile(path.join(__dirname, 'error.html'));
  // } else {
  // }
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} : http://localhost:${PORT}`);
});