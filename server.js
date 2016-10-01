var express = require('express'); // A library used to create webserver
var morgan = require('morgan'); // to output logs to show what requests,responses
var path = require('path');

var app = express();
app.use(morgan('combined'));
//
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
 // counter = counter + 1;
  res.send(counter.toString());
});

app.get('/article-two', function (req, res) {
  res.send("I am Aravind");
});

app.get('/article-three', function (req, res) {
  res.send("Ok good bye guys.");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('../photo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'photo.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
			
