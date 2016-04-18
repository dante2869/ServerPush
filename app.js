var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola al demo de server push!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});