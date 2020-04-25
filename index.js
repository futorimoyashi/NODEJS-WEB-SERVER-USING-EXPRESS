require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/express-demo');

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const prodRoute = require('./routes/prod.route');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

const port = 8080;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.ss));
app.use(sessionMiddleware);

app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Kin nek'
	});
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/product', prodRoute);

app.listen(port, function() {
	console.log('Application is running on 8080 port')
})
