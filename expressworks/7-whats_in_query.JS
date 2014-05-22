var express = require('express')

var app = express()

app.get('/search', function (request, response) {
    var query = JSON.stringify(request.query, undefined, 2)
    response.send(query)
})

app.listen(process.argv[2])
