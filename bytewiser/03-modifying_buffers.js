process.stdin.on('data', function (buffer) {
    for (var i = 0; i < buffer.length; i++)
        if (buffer[i] === 0x2e)
            buffer[i] = 0x21
    console.log(buffer)
})
