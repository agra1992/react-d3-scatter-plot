var express = require('express');

var app = express();
const PORT = process.env.PORT || 2000;

app.use(express.static('public'));

app.listen(PORT, function() {
	console.log('Server up on PORT ' + PORT);
});