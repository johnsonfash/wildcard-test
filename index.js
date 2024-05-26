const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3001;

const static = express.static(path.join(__dirname, 'build'));

app.use('/', (req, res, next) => {
  static(req, res, next);
});

app.use('*', function (_, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT} : http://localhost:${PORT}`);
});