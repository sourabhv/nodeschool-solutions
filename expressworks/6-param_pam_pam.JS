var express = require('express')
var crypto = require('crypto')

var app = express()

app.put('/message/:ID', function (request, response) {
    response.send(crypto
        .createHash('sha1')
        .update(new Date().toDateString().toString() + request.params.ID)
        .digest('hex'))
})

app.listen(process.argv[2])
