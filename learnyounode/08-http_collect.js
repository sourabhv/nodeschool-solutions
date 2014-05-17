var http = require('http');

var netData = '';

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        netData += data;
    });
    response.on('err', console.error);
    response.on('end', function () {
        console.log(netData.length);
        console.log(netData);
    });

});
