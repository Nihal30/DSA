// Maximum Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1s in the array.
// A binary array is an array that contains only 0s and 1s.

// Input: nums = [1, 1, 0, 0, 1, 1, 1, 0]
// Output: 3
// Explanation: The maximum consecutive 1s are present from index 4 to index 6, amounting to 3 1s

// class Solution {
//     findMaxConsecutiveOnes(nums) {
//         /* Initialize count and max_count
//               to track current and maximum consecutive 1s */
//         let cnt = 0;
//         let maxi = 0;

//         // Traverse the array
//         for (let i = 0; i < nums.length; i++) {

//             /*If the current element is
//            1, increment the count*/
//             if (nums[i] == 1) {
//                 cnt++;

//                 /*Update maxi if current
//                count is greater than maxi*/
//                 maxi = Math.max(maxi, cnt);

//             } else {
//                 // If the current element is 0, reset the count
//                 cnt = 0;
//             }
//         }

//         // Return the maximum count of consecutive 1s
//         return maxi;
//     }
// }

// const nums = [1, 1, 0, 1, 1, 1];

// // Create an instance of the Solution class
// const sol = new Solution();

// // Find and print the maximum consecutive 1s
// const ans = sol.findMaxConsecutiveOnes(nums);
// console.log("The maximum consecutive 1's are " + ans);

// Revision -

class Solution {
  findMaxConsecutiveOnes(nums) {
    let maxi = 0;
    let cnt = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        cnt++;
        maxi = Math.max(maxi, cnt);
      } else {
        cnt = 0;
      }
    }
    return maxi;
  }
}

const nums = [1, 1, 0, 1, 1, 1];
const sol = new Solution();
const ans = sol.findMaxConsecutiveOnes(nums);
console.log("max", ans);
