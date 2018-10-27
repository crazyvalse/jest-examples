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
