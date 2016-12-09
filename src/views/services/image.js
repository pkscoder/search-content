var request = require('superagent'),
    Promise = require('es6-promise').Promise;

module.exports = {
    getImages: function(callback) {
        return new Promise(function(resolve, reject) {
            request.get('/image/getimage').end(function(err, result) {
                if (err) {
                    callback && callback(err, null);
                    reject(err);
                } else {
                    var response = result.body || {};
                    callback && callback(null, response);
                    resolve(response);
                }
            });
        });
    }
};
