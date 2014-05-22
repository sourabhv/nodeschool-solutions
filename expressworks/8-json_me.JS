var express = require('express')
var fs = require('fs')

var app = express()

app.get('/books', function (request, response) {
    fs.readFile(process.argv[3], function (err, data) {
        var books = JSON.parse(data)
        response.json(books)
    })
})

app.listen(process.argv[2])
