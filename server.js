require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
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
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    const folders = files.filter((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      return stats.isDirectory();
    });

    console.log('Folders in the directory:', JSON.stringify(folders));
  });
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
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    const folders = files.filter((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      return stats.isDirectory();
    });

    console.log('Folders in the directory:', JSON.stringify(folders));
  });
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} : http://localhost:${PORT}`);
});