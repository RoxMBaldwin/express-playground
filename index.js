var express = require('express')
var app = express()
var PORT = 8080

app.get('/', function(request, response) {
  response.send('working')
})

app.get('/math/pi', function(request, response) {
  response.send(Math.PI.toString())
})

app.get('/math/calculate', function(request, response) {
  //request.query.variable
  let operation = request.query.operation
  let x = Number(request.query.x)
  let y = Number(request.query.y)
  let output = x + y
  let string

  switch(operation) {
    case 'add' :
      string = `${x} + ${y} = ${output}`
      break
    case 'subtract' :
      output = x - y
      string = `${x} - ${y} = ${output}`
      break
    case 'multiply' :
      output = x * y
      string = `${x} * ${y} = ${output}`
      break
    case 'divide' :
      output = x / y
      string = `${x} / ${y} = ${output}`
      break
    default:
      string = `${x} + ${y} = ${output}`
  }
  response.send(string)
})

app.listen(PORT)
