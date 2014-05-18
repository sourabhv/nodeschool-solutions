var http = require('http')
var through = require('through')

var server = http.createServer(function (request, response) {
    if (request.method === 'POST')
        request.pipe(through(function (chunk) {
            this.queue(chunk.toString().toUpperCase() + '\n')
        })).pipe(response)
    else
        response.end('Send me a POST')
})

server.listen(process.argv[2])
