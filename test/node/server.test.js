
const request = require('supertest');
const app = require('../../src/node/app')

describe('Test the root path', () => {
	test('It should response the GET method', (done) => {
		request(app).get('/').then((response) => {
			expect(response.statusCode).toBe(200);
			done();
		});
	});
});


describe('Test the root path', () => {
	test('It should response the GET method', () => {
		return request(app).get("/hello?a=1&b=2").then(response => {
			expect(response.statusCode).toBe(200)
		})
	});
})

