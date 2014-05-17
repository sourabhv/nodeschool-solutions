var lslib = require('./lslib');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function (err, filelist) {
    if (err)
        return console.log(err);

    filelist.forEach(function (file) {
        console.log(file);
    })
})
