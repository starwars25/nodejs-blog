var express = require('express');
var app = express();

require('./config')(app);
require('./controllers/application')(app);

var PORT = parseInt(process.argv[2]);

app.listen(PORT, function() {
    console.log('Listening on %d', PORT);
});