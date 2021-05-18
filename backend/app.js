const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
	res.send('welcome to Ruppin Regfree Server by Cloudonix');
});

app.listen(3000);
