//app.js
const express = require('express')
const app = express()
const URL = require('url')

app.get('/', (req, res) => {
	res.status(200).send('Hello World!')
})

app.get('/hello', (req, res) => {
	let query =  URL.parse(req.url, true).query
	if(query && query.a && query.a === '1'){
		console.info('query.a == 1')
	} else {
		console.info('query.a !== 1')
	}
	res.status(200).send('Hello World!')
})

app.get('/world', (req, res) => {
	res.status(200).send('Hello World!')
})

app.get('/you', (req, res) => {
	res.status(200).send('Hello World!')
})

module.exports = app
