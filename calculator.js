// task 3
// Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
// Write at least 3 tests for each of the calculator methods.
// Group tests for each method using describe() method

class calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2){
    return num1 - num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }
}

module.exports = calculator;