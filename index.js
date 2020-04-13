const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: [] })
  .write()

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Kin nek'
	});
});

app.get('/users', function(req, res) {
	res.render('user', {
		users: db.get('users').value()
	})
});

app.get('/users/search', function(req, res) {
	var q = req.query.q;

	var matchedUsers = db.get('users').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});

	res.render('user', {
		users: matchedUsers
	})
});

app.get('/users/create', function(req, res) {
	res.render('create');
});

app.get('/users/:id', function(req, res) {
	var id = req.params.id;
	var user = db.get('users').find({ id: id}).value();
	res.render('view', {
		user: user
	});
});

app.post('/users/create', function(req, res) {
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users');
})

app.listen(port, function() {
	console.log('Application is running on 8080 port')
})
