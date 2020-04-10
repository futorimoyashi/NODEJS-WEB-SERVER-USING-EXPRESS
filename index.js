const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', function(req, res) {
	res.render('index', {
		name: 'Kin nek'
	});
});

app.get('/users', function(req, res) {
	res.render('user', {
		users: [
			{id: 1, name: 'Kin nek'},
			{id: 2, name: 'Nhi nek'},
			{id: 3, name: 'Na nek'}
		]
	})
})

app.listen(port, function() {
	console.log('Application is running on 8080 port')
})
