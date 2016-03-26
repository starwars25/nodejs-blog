var dateformat = require('dateformat');

module.exports = function(req, res, next) {
    var date = new Date();

    var dateString = dateformat(date, 'HH:MM:ss ddd, dd mmm yyyy, o');
    var method = req.method;
    var path = req.originalUrl;

    console.log('%s %s %s', method, path, dateString);

    next();
};