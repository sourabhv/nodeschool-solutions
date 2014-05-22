var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser())
app.set('views', 'templates')
app.set('view engine', 'jade')
app.engine('.jade', require('jade').__express)

app.get('/form', function (request, response) {
    response.render('form')
})

app.post('/form', function (request, response) {
    response.send(request.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
