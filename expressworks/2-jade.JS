var express = require('express')
var path = require('path')

var app = express()
app.set('views', process.argv[3])
app.set('view engine', 'jade')
app.engine('.jade', require('jade').__express)

app.get('/home', function (request, response) {
    response.render('index', {
        'date': new Date().toDateString()
    })
})

app.listen(process.argv[2])
