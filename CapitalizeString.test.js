const capitalize = require('./CapitalizeString');

const value = 'hello world';

if(typeof value === 'string') {
  test('String first character must be capitalize', () => {
    expect(capitalize(value)).toBe('Hello world');
  });
} else {
  throw ('Input must be string');
}