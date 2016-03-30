var express = require("express"),
bodyParser=require('body-parser'),
fs = require('fs'),
logger=require('morgan'),
port = process.env.PORT || 8888;
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));
app.set("view options", {
layout: false
});
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
res.render('public/index.html');
});
app.get('/movies',function(req,res){
	var movies=require('./data/movies.json');
	res.json(movies);
})

app.listen(port);
console.log('Express server running at http://localhost:' + port);