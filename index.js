var express = require('express');
var app = express();
var studentroute = require('./routes/student');

app.use('/api/student', studentroute);

app.get('*', function (req, res) {
  return res.status(200).send('Welcome to Student API');
});

var server = app.listen(8080);