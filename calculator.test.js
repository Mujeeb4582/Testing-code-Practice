const calculator = require('./calculator');

describe('my calculation', () => {
  test('4 + 6 = 10', () => {
    const additionResult = calculator.add(4, 6);
    expect(additionResult).toBe(10);
  });

  test('6 - 4 = 2', () => {
    const subtractionResult = calculator.subtract(6, 4);
    expect(subtractionResult).toBe(2);
  });

  test('6 - 3 = 2', () => {
    const divideResult = calculator.divide(6, 3);
    expect(divideResult).toBe(2);
  });

  test('6 x 3 = 18', () => {
    const multiplyResult = calculator.multiply(6, 3);
    expect(multiplyResult).toBe(18);
  });

});