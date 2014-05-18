var crypto = require('crypto')
var tar = require('tar')
var through = require('through')
var zlib = require('zlib')

var stream = crypto.createDecipher(process.argv[2], process.argv[3])
var parser = tar.Parse()
gunzip = zlib.createGunzip()

parser.on('entry', function (e) {
    if (e.type !== 'File')
        return
    hash = crypto.createHash('md5', {'encoding': 'hex'})
    e.pipe(hash).pipe(through(null, end)).pipe(process.stdout)

    function end () {
        this.queue(' ' + e.path + '\n')
    }
})


process.stdin.pipe(stream).pipe(gunzip).pipe(parser)
