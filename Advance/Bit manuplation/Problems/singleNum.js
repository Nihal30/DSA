// Given an array of nums of n integers. Every integer in the array appears twice except one integer.
// Find the number that appeared once in the array.

// Input : nums = [1, 2, 2, 4, 3, 1, 4]
// Output : 3
// Explanation : The integer 3 has appeared only once.

class Solution {
  /* Function to get the single 
    number in the given array */
  singleNumber(nums) {
    /* Map to store the elements 
        and their frequencies */
    let mpp = new Map();

    // Iterate on the array
    nums.forEach((num) => {
      mpp.set(num, (mpp.get(num) || 0) + 1); //Update the map
    });

    // Iterate on the map
    for (let [key, value] of mpp) {
      // If frequency is 1
      if (value === 1) {
        // Return the element
        return key;
      }
    }

    /* Return -1, if there is no 
        number having frequency 1 */
    return -1;
  }
}

// Example usage
let nums = [1, 2, 2, 4, 3, 1, 4];

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to get the single 
number in the given array */
let ans = sol.singleNumber(nums);

console.log("The single number in given array is:", ans);
