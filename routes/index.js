"use strict";
var _ = require('underscore');

// Attach routes here
module.exports = function(app) {
	app.use('/image', require('./api/image').middleware);
    app.use('/', require('./default').middleware);
};
