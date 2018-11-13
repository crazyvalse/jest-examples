//server.js
const app = require('./app'),
	port = 5678

app.listen(port, () => {
	console.log('Starting server at: http://localhost:' + port);
})
