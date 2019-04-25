var express = require('express');
var app = express();
var querystring = require('querystring');
app.get('/',function(req,res){
	res.sendFile(__dirname+'/dist/index.html');
});
app.get('*',function(req,res){
	if(req.url != 'favicon.ico'){
		if(req.url.match(/\.(png|jpg|jpng)$/)){
			res.sendFile(querystring.unescape(req.url));
		}else{
			res.sendFile(__dirname+'/dist'+req.url);
		};
	};
});
app.listen('8201',()=>{
	console.log('server start');
});
