var through = require('through')

var capitalize = through(function (chunk) {
    this.queue(chunk.toString().toUpperCase())
})

process.stdin.pipe(capitalize).pipe(process.stdout)
