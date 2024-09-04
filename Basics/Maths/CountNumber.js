// Question

// You are given an integer n. You need to return the number of digits in the number.
// The number will have no leading zeroes, except when the number is 0 itself.
// Example 1
// Input: n = 4
// Output: 1
// Explanation: There is only 1 digit in 4.
// Example 2
// Input: n = 14
// Output: 2
// Explanation: There are 2 digits in 14.

// Solution --------------

class Count {
  countNumber(n) {
    // if number is 0 the return 1
    if (n === 0) return 1;
    // variable to store the output
    let count = 0;
    while (n > 0) {
      let lastDigit = n % 10;
      count = count + 1;

      n = Math.floor(n / 10); // for the next iteration
    }
    return count;
  }
}

let n = 12345;
const C = new Count();

let ans = C.countNumber(n);

console.log("ans", ans); // output => 5
