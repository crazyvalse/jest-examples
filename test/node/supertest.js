var request = require('supertest');
const app = require('../../src/node/app')
request = request(app)//request('http://localhost:5678')

request.get('/').expect(200, function(err){
	console.log(err);
});
