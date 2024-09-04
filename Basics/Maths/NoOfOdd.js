// Question
// You are given an integer n. You need to return the number of odd digits present in the number.

// The number will have no leading zeroes, except when the number is 0 itself.

// Example 1
// Input: n = 5

// Output: 1

// Explanation: 5 is an odd digit.

// Example 2
// Input: n = 25

// Output: 1

// Explanation: The only odd digit in 25 is 5.

// Solution

class Odd {
  NoOfOdd(n) {
    let oddDigit = 0;
    while (n > 0) {
      let num = n % 10; // getting the last no

      if (num % 2 !== 0) {
        oddDigit = oddDigit + 1;
      }
      n = Math.floor(n / 10);
    }
    return oddDigit;
  }
}

let n = 1235;
const odd = new Odd();
let ans = odd.NoOfOdd(n);
console.log("ans", ans); // 3
