var exec = require('cordova/exec');

exports.echo = function(arg0, success, error) {
    exec(success, error, 'SamplePlugin', 'echo', [arg0]);
};
