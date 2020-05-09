var path = require('path')
var querystring = require('querystring')
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('*', function (req, res) {
  if (req.url !== 'favicon.ico') {
    if (req.url.match(/\.(png|jpg|jpng|gif)$/)) {
      res.sendFile(path.join(__dirname, 'dist', querystring.unescape(req.url)))
    } else {
      res.sendFile(path.join(__dirname, querystring.unescape(req.url)))
    }
  }
})

app.listen('8202', () => {
  console.log('server start at 8202 port')
})
