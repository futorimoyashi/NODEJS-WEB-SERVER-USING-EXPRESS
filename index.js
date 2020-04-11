const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views')

var users = [
	{id: 1, name: 'tung'},
	{id: 2, name: 'nhi'},
	{id: 3, name: 'benadangyeu'}
];

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Kin nek'
	});
});

app.get('/users', function(req, res) {
	res.render('user', {
		users: users
	})
});

app.get('/users/search', function(req, res) {
	var q = req.query.q;

	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('user', {
		users: matchedUsers
	})
});

app.get('/users/create', function(req, res) {
	res.render('create');
});

app.post('/users/create', function(req, res) {
	users.push(req.body);
	res.redirect('/users');
})

app.listen(port, function() {
	console.log('Application is running on 8080 port')
})
