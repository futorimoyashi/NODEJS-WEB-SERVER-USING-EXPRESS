require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI);

const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const prodRoute = require('./routes/prod.route');

const apiProductRoute = require('./api/routes/product.route');

var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');

const port = process.env.PORT || 8080;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.use(express.static('public'))

app.use(cors)

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Kin nek'
	});
});

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/product', prodRoute);

app.use('/api/products', apiProductRoute);

app.listen(port, function() {
	console.log('Application is running on 8080 port')
})
