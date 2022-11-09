const {stringLength, reverseString} = require('./stringLength');
// const reverseString = require('./stringLength');

test('return true if string length in the given range', () => {
  expect(stringLength('hello')).toBe(true);
});

test('should throw error if length is less then 1 or greater then 10 ', () => {
  const string = stringLength('hello and hi');
  expect(string).toBe(false);
});

// task 2

test('string must be in reverse order', () => {
  const reverse_string = reverseString('hello');
  expect(reverse_string).toBe('olleh');
})