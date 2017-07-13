var express = require('express')
var app = express()
var PORT = 8080

app.get('/', function(request, response) {
  response.send('working')
})

app.get('/math/pi', function(request, response) {
  response.send(Math.PI.toString())
})

app.listen(PORT)
