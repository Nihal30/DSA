// // Single Number - III

// // Given an array nums of length n, every integer in the array appears twice except for two integers. 
// // Identify and return the two integers that appear only once in the array. Return the two numbers in ascending order.
// // For example, if nums = [1, 2, 1, 3, 5, 2], the correct answer is [3, 5], not [5, 3].

// // Examples:
// // Input : nums = [1, 2, 1, 3, 5, 2]
// // Output : [3, 5]
// // Explanation : The integers 3 and 5 have appeared only once.

// // brute using hasing 

// class Solution {
//     /* Function to get the single 
//     number in the given array */
//     singleNumber(nums) {
        
//         // Array to store the answer
//         let ans = [];
        
//         /* Map to store the elements 
//         and their frequencies */
//         let mpp = new Map();
        
//         // Iterate on the array
//         for (let num of nums) {
//             mpp.set(num, (mpp.get(num) || 0) + 1); // Update the map
//         }
        
//         // Iterate on the map
//         for (let [key, value] of mpp.entries()) {
//             // If frequency is 1
//             if (value === 1) {
//                 /* Add the element to
//                 the result array */
//                 ans.push(key);
//             }
//         }
        
//         // Return the result after sorting
//         ans.sort((a, b) => a - b);
//         return ans;
//     }
// }

// // Creating an instance of Solution class
// let sol = new Solution();

// // Function call to get the single number in the given array
// let nums = [1, 2, 1, 3, 5, 2];
// let ans = sol.singleNumber(nums);

// console.log("The single numbers in given array are: " + ans[0] + " and " + ans[1]);

// // 


// Optimal 

class Solution {
    /* Function to get the single 
    numbers in the given array */
    singleNumber(nums) {
        // Variable to store size of array
        let n = nums.length;
        
        // Variable to store XOR of all elements
        let XOR = 0;
        
        // Traverse the array
        for(let i = 0; i < n; i++) {
            // Update the XOR
            XOR = XOR ^ nums[i];
        }
        
        /* Variable to get the rightmost 
        set bit in overall XOR */
        let rightmost = (XOR & (XOR - 1)) ^ XOR;
        
        /* Variables to stores XOR of
        elements in bucket 1 and 2 */
        let XOR1 = 0, XOR2 = 0;
        
        // Traverse the array
        for(let i = 0; i < n; i++) {
            /* Divide the numbers among bucket 1
             and 2 based on rightmost set bit */
            if(nums[i] & rightmost) {
                XOR1 = XOR1 ^ nums[i];
            }
            else {
                XOR2 = XOR2 ^ nums[i];
            }
        }
        
        // Return the result in sorted order
        return XOR1 < XOR2 ? [XOR1, XOR2] : [XOR2, XOR1];
    }
}

// Example usage
let nums = [1, 2, 1, 3, 5, 2];

/* Creating an instance of 
Solution class */
let sol = new Solution();

/* Function call to get the single 
numbers in the given array */
let ans = sol.singleNumber(nums);

console.log("The single numbers in given array are:", ans[0], "and", ans[1]);
