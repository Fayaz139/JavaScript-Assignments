/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  let str1 = [];
  for (let i = str.length-1; i >= 0; i--) {
    str1.push(str[i]);
  }
  for (let i = 0; i <= str.length-1; i++) {
    if (str[i] !== str1[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;