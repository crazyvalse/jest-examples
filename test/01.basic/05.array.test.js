const shoppingList = [
	'diapers',
	'kleenex',
	'trash bags',
	'paper towels',
	'beer',
];

test('购物清单（shopping list）里面有啤酒（beer）', () => {
	expect(shoppingList).toContain('beer');
});
