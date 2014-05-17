var http = require('http')
var url = require('url')

var server = http.createServer(function (request, response) {
    urlObj = url.parse(request.url, true)
    var date = new Date(urlObj.query.iso)
    if (urlObj.pathname === '/api/parsetime') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        dict = {
            'hour':   date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
        response.end(JSON.stringify(dict))

    } else if (urlObj.pathname === '/api/unixtime') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        dict = {
            'unixtime': new Date(urlObj.query.iso).getTime()
        }
        response.end(JSON.stringify(dict))
    } else {
        response.writeHead(404)
        response.end('Wrong path!')
    }
})

server.listen(process.argv[2])
