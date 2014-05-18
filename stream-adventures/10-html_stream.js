var trumpet = require('trumpet')
var through = require('through')

var capitalize = through(function (chunk) {
    this.queue(chunk.toString().toUpperCase())
})

var tr = trumpet()
var stream = tr.select('.loud').createStream()
stream.pipe(capitalize).pipe(stream)
process.stdin.pipe(tr).pipe(process.stdout)
