var through = require('through')
var split   = require('split')

var lines = 1

var capitalize = through(function (chunk) {
    if (lines % 2 === 0)
        this.queue(chunk.toString().toUpperCase() + '\n')
    else
        this.queue(chunk.toString().toLowerCase() + '\n')
    lines += 1
})

process.stdin.pipe( split() ).pipe(capitalize).pipe(process.stdout)
