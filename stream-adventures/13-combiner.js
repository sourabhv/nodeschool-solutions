var combine = require('stream-combiner')
var split   = require('split')
var through = require('through')
var zlib    = require('zlib')

module.exports = function () {
    var current
    var merge = through(write, end)

    function write (row) {
        if (row.length === 0)
            return
        row = JSON.parse(row)
        if (row.type == 'genre') {
            if (current)
                this.queue(JSON.stringify(current) + '\n')
            current = {'name': row.name, 'books': []}
        } else if (row.type = 'book') {
            current.books.push(row.name)
        }
    }

    function end () {
        if (current)
            this.queue(JSON.stringify(current) + '\n')
        this.queue(null)
    }

    return combine(split(), merge, zlib.createGzip())
}


