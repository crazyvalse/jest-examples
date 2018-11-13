//server.js
const istanbulMiddleware = require('istanbul-middleware'),
	nopt = require('nopt'),
	config = nopt({coverage: Boolean}),
	isCoverageEnabled = config.coverage

const express = require('express')
const app = express()
const URL = require('url'),
	port = 5678

console.info(__dirname)
if (isCoverageEnabled) {
	console.log('Turning on coverage; ensure this is not production');
	istanbulMiddleware.hookLoader(__dirname, {verbose: true});
	app.use('/coverage', istanbulMiddleware.createHandler({ verbose: true, resetOnGet: true }));
}

app.get('/', (req, res) => {
	res.status(200).send('Hello World! url=/')
})

app.get('/hello', (req, res) => {
	let query = URL.parse(req.url, true).query
	if (query && query.a && query.a === '1') {
		console.info('query.a == 1')
	} else {
		console.info('query.a !== 1')
	}
	res.status(200).send('Hello World! url=' + req.url)
})

app.get('/world', (req, res) => {
	res.status(200).send('Hello World! url=' + req.url)
})

app.get('/you', (req, res) => {
	res.status(200).send('Hello World! url=' + req.url)
})

app.listen(port, () => {
	console.log('Starting server at: http://localhost:' + port);
})
