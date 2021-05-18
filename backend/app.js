const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
	res.send('welcome to Ruppin Regfree Server');
});

app.listen(3000);
