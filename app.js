var express = require('express');
var app = express();

require('./config')(app);
require('./controllers/application')(app);
require('./controllers/admin')(app);

var PORT = parseInt(process.argv[2]);

app.listen(PORT, function() {
    console.log('Listening on %d', PORT);
});