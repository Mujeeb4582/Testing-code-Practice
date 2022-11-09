const capitalize = require('./CapitalizeString');

test('String first character must be capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});