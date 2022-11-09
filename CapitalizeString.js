// Task 4
// Start by writing a test for a capitalize(string) function. Your test should make sure that this function takes a string as an argument and returns that string with the first character capitalized.
// Run your test - it should fail because you don’t have the capitalize(string) function implemented yet.
// Now make your tests green by implementing the capitalize(string) function. Think about what the minimum amount of code is necessary to pass this test and write it.

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalize;