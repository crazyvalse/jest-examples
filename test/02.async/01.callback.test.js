// Don't do this!
test('the data is peanut butter', () => {
	function callback(data) {
		expect(data).toBe('peanut butter');
	}

	fetchData(callback);
});

function fetchData(cb) {
	cb('peanut butter');
}


/*test('the data is peanut butter', done => {
	function callback(data) {
		expect(data).toBe('peanut butter');
		done();
	}

	fetchData(callback);
});

test('the data is peanut butter', () => {
	expect.assertions(1);
	return fetchData().then(data => {
		expect(data).toBe('peanut butter');
	});
});*/
