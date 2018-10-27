function initializeCityDatabase () {
	console.info('initializeCityDatabase')
}

function clearCityDatabase () {
	console.info('clearCityDatabase')
}

function isCity (name) {
	return name;
}

beforeEach(() => {
	initializeCityDatabase();
});

afterEach(() => {
	clearCityDatabase();
});

test('city database has Vienna', () => {
	expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
	expect(isCity('San Juan')).toBeTruthy();
});

