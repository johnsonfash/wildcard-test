require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

const static = express.static(path.join(__dirname, 'build'));

app.use('/', (req, res, next) => {
  const hostname = req.hostname;
  if (typeof hostname == 'string') {
    const split = hostname.split('.');
    if (split[0] == 'error') {
      return res.sendFile(path.join(__dirname, 'error.html'));
    }
  }
  static(req, res, next);
});

app.use('*', function (_, res) {
  const hostname = req.hostname;
  if (typeof hostname == 'string') {
    const split = hostname.split('.');
    if (split[0] == 'error') {
      return res.sendFile(path.join(__dirname, 'error.html'));
    }
  }
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} : http://localhost:${PORT}`);
});