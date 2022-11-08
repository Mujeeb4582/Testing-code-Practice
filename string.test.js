const stringLength = require('./stringLength');

test('return a number', () => {
  expect(stringLength('hello')).toBe(5);
});