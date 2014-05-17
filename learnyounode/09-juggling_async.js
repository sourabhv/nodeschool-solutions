var http = require('http')
var bl = require('bl')

var streamStatus = [false, false, false]
var streamData = []

function printAll () {
    if (streamStatus.indexOf(false) === -1) {
        streamData.forEach(function (contents) {
            console.log(contents)
        })
    }
}

function httpget (i) {
    http.get(process.argv[2 + i], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.log(err)
            streamData[i] = data.toString()
            streamStatus[i] = true
            printAll()
        }))
    })
}
for (var i = 0; i < 3; i++)
    httpget(i)
