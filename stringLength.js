// task 1

function stringLength(str) {
  // check if the string is at least 1 character long and not longer than 10 characters. Throw errors if those conditions are not met.
  if(str.length >= 1 && str.length <= 10) {
    return true;
  } else return false;
}

// task 2
// Write a function reverseString(string) function. It should take a string as an argument and return it reversed.

function reverseString(str) {
  const reversed = str.split('').reverse().join('');
  return reversed;
}


module.exports = {stringLength, reverseString};
