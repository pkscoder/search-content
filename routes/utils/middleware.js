"use strict";

var outline = require('./outline'),
    _ = require('underscore');

module.exports = function content(req, res, next) {
    res.content = function(o) {
        var render = function() {
            if (req.query && req.query.fragment) {
                res.send(o.toString());
            } else {
                res.render('index', _({}).extend({
                    outline: outline(req)
                }));
            }
        };

        render();
    };

    next();
};