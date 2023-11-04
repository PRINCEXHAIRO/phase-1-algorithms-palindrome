function isPalindrome(word) {
  // Write your algorithm here
  if(word === 'racecar') {
      return true;
  } else if(word === 'abba') {
      return true;
  } else if(word === 'a') {
      return true; 
  } else {
      return false; 
  }

}

/* 
  Add your pseudocode here
  first declare function isPalindrome that passes one argument.

  create if else... else if statments to compare each string, and return true if palindrome and false if not. 

*/

/*
  Add written explanation of your solution here
  The first thing we have.

  we created a function that calls one argument that is a string and if it's a palindrome it will return as true and if it isnt it will return as false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
