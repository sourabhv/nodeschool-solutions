var spawn = require('child_process').spawn
var duplexer = require('duplexer')

module.exports = function (cmd, args) {
    cmdps = spawn(cmd, args)
    return duplexer(cmdps.stdin, cmdps.stdout)
}
