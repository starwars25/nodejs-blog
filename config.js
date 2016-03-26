var express = require('express');

module.exports = function(app) {
    app.set('view engine', 'jade');
    app.set('views', './views');

    app.use(require('./logger'));

    app.use(express.static('public'))
};