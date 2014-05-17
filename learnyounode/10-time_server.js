var net = require('net')

function zeroFill (val) {
    return ('0' + val).slice(-2)
}

function getDateTime () {
    var today = new Date()
    year  = today.getFullYear()
    month = zeroFill(today.getMonth() + 1)
    date  = zeroFill(today.getDate())
    hours = zeroFill(today.getHours())
    mins  = zeroFill(today.getMinutes())

    return year + '-' + month + '-' + date + ' ' + hours + ':' + mins + '\n'
}

var timeServer = net.createServer(function (socket) {
    socket.end(getDateTime())
})

timeServer.listen(process.argv[2])
