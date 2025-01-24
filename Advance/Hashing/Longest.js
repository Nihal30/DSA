// Longest Consecutive Sequence in an Array
// Given an array nums of n integers,
//  return the length of the longest sequence of consecutive integers. The integers in this sequence can appear in any order.
// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest sequence of consecutive elements in the array is [1, 2, 3, 4], which has a length of 4.
//  This sequence can be formed regardless of the initial order of the elements in the array.
// brute 

// class Solution {
//     // Helper function to perform linear search
//     linearSearch(nums, num) {
//         const n = nums.length;
//         // Traverse through the array
//         for (let i = 0; i < n; i++) {
//             if (nums[i] === num)
//                 return true;
//         }
//         return false;
//     }

//     longestConsecutive(nums) {
//         // If the array is empty
//         if (nums.length === 0) {
//             return 0;
//         }
//         const n = nums.length;
//         // Initialize the longest sequence length
//         let longest = 1;

//         // Iterate through each element in the array
//         for (let i = 0; i < n; i++) {
//             // Current element
//             let x = nums[i];
//             // Count of the current sequence
//             let cnt = 1;

//             // Search for consecutive numbers
//             while (this.linearSearch(nums, x + 1)) {
//                 // Move to the next number in the sequence
//                 x += 1;
//                 // Increment the count of the sequence
//                 cnt += 1;
//             }

//             // Update the longest sequence length found so far
//             longest = Math.max(longest, cnt);
//         }
//         return longest;
//     }
// }

// const a = [100, 4, 200, 1, 3, 2];

// // Create an instance of the Solution class
// const solution = new Solution();

// // Function call for longest consecutive sequence
// const ans = solution.longestConsecutive(a);
// console.log("The longest consecutive sequence is", ans);

// better


// class Solution {
//     longestConsecutive(nums) {
//         let n = nums.length;

//         // Return 0 if array is empty
//         if (n === 0) return 0; 

//         nums.sort((a, b) => a - b);

//         // Track last smaller element
//         let lastSmaller = -Infinity; 
//         // Count current sequence length
//         let cnt = 0; 
//         // Track longest sequence length
//         let longest = 1; 

//         for (let i = 0; i < n; i++) {
//             // If consecutive number exists
//             if (nums[i] - 1 === lastSmaller) {
//                 // Increment sequence count
//                 cnt += 1; 
//                 // Update last smaller element
//                 lastSmaller = nums[i]; 
//             } 
//             // If consecutive number doesn't exist
//             else if (nums[i] !== lastSmaller) {
//                 // Reset count for new sequence
//                 cnt = 1; 
//                 // Update last smaller element
//                 lastSmaller = nums[i]; 
//             }
//             // Update longest if needed
//             longest = Math.max(longest, cnt); 
//         }
//         return longest;
//     }
// }

// // Sample array
// const a = [100, 4, 200, 1, 3, 2];

// // Create an instance of solution class
// const solution = new Solution(); 
// // Function call for finding longest consecutive sequence
// const ans = solution.longestConsecutive(a); 
// console.log("The longest consecutive sequence is " + ans);

// optimal
class Solution {
    longestConsecutive(nums) {
        let n = nums.length;
        // If the array is empty
        if (n === 0) return 0;

        // Initialize the longest sequence length
        let longest = 1; 
        let st = new Set();

        // Put all the array elements into the set
        for (let i = 0; i < n; i++) {
            st.add(nums[i]);
        }

        // Traverse the set to find the longest sequence
        for (let it of st) {
            // Check if 'it' is a starting number of a sequence
            if (!st.has(it - 1)) {
                // Initialize the count of the current sequence
                let cnt = 1; 
                // Starting element of the sequence
                let x = it; 

                // Find consecutive numbers in the set
                while (st.has(x + 1)) {
                    // Move to the next element in the sequence
                    x = x + 1; 
                    // Increment the count of the sequence
                    cnt = cnt + 1; 
                }
                // Update the longest sequence length
                longest = Math.max(longest, cnt);
            }
        }
        return longest;
    }
}

// Sample array
const a = [100, 4, 200, 1, 3, 2]; 
// Create an instance of the solution class
const solution = new Solution(); 
// Function call to find the longest consecutive sequence
const ans = solution.longestConsecutive(a); 
console.log("The longest consecutive sequence is " + ans);


