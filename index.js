const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.route');

const port = 8080;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Kin nek'
	});
});

app.use('/users', userRoute);

app.listen(port, function() {
	console.log('Application is running on 8080 port')
})
