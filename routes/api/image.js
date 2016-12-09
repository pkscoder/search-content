"use strict";

var express = require('express'),
    _ = require('underscore'),
    router = new express.Router(),
    async = require('async');

var staticJson = require('./../json/images.json');

router.get('/getimage', [function(req, res, next) {
    next();
}].concat(function(req, res, next) {
    res.send(staticJson);
}));

module.exports = router;
