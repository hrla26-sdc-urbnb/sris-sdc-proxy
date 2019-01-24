const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');

const PORT = 3400;
const proxy = express();

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
proxy.use(cors());
proxy.use(express.static(path.join(__dirname, './public/')));

proxy.get('/loaderio-0e0f9e7bccd1041ec8f5e4008d9b990e.txt', function(req, res) {
  res.sendFile("../public/loaderio-0e0f9e7bccd1041ec8f5e4008d9b990e.txt");
});

proxy.use('/api', router);

proxy.listen(PORT, (err) => {
  if (err) { console.error(err); } else {
    console.log('Listening on PORT ', PORT);
  }
});
