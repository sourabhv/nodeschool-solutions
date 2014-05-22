var netBuffer = new Buffer([])

process.stdin.on('data', function (data) {
    netBuffer = Buffer.concat([netBuffer, data])
})

process.stdin.on('end', function () {
    console.log(netBuffer)
})
