var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
const port = 8080;
app.get('/',function(req,res){
	res.sendFile("index.html");
});
app.listen(process.env.PORT || port);
console.log("listen on port"+port);
