process.stdin.on('data', function (data) {
    var uint8 = new Uint8Array(data.length)
    for (var i = 0; i < data.length; i++)
        uint8[i] = data[i]
    console.log(JSON.stringify(uint8))
})
