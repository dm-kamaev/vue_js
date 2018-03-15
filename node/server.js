'use strict';

const util = require('util');
const express = require('express');
const app = express();
const path = require('path');
require('express-async-await')(app);

const fs = require('fs');
fs.promise_read_file = util.promisify(fs.readFile);

app.use(express.static('../'));

app.get('/', async function (req, res) {
  var body = await fs.promise_read_file('../index.html', 'utf-8');
  res
    .status(200)
    .send(body);
});


app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal error');
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


