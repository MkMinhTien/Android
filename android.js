var express = require('express');
var app = express();

var port = process.env.PORT || 100

app.get('/', (req, res) => res.sendFile(__dirname + '/server.html'));

app.listen(port, () => console.log(`Android app listening on port ${port}!`));