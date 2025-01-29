// Single element in sorted array
// Given an array nums sorted in non-decreasing order. 
// Every number in the array except one appears twice. Find the single number in the array.

// Input :nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
// Output:4
// Explanation: Only the number 4 appears once in the array.

// brute 1 using linear search 

// class Solution {
//     /* Function to find the single non
//        duplicate element in a sorted array */
//     singleNonDuplicate(nums) {
//         let n = nums.length; // Size of the array.
        
//         /* If array has only one element
//            return it immediately.*/
//         if (n === 1) return nums[0];

//         /* Traverse through the array to find 
//            the single non-duplicate element.*/
//         for (let i = 0; i < n; i++) {
//             // Check for the first index.
//             if (i === 0) {
//                 if (nums[i] !== nums[i + 1])
//                     return nums[i];
//             }
//             // Check for the last index.
//             else if (i === n - 1) {
//                 if (nums[i] !== nums[i - 1])
//                     return nums[i];
//             }
//             // Check for any other index.
//             else {
//                 if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1])
//                     return nums[i];
//             }
//         }

//         /* Dummy return statement,
//            should never reach here.*/
//         return -1;
//     }
// }

// let nums = [1, 1, 2, 2, 3, 3, 4];  

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.singleNonDuplicate(nums);

// // Print the result
// console.log("The single element is:", ans);

//  brute 2 using xor

class Solution {
    /* Function to find the single non
       duplicate element in a sorted array */
    singleNonDuplicate(nums) {
        let n = nums.length; // Size of the array.
        
        /* If array has only one element
           return it immediately.*/
        if (n === 1) return nums[0];

        /* Traverse through the array to find 
           the single non-duplicate element.*/
        for (let i = 0; i < n; i++) {
            // Check for the first index.
            if (i === 0) {
                if (nums[i] !== nums[i + 1])
                    return nums[i];
            }
            // Check for the last index.
            else if (i === n - 1) {
                if (nums[i] !== nums[i - 1])
                    return nums[i];
            }
            // Check for any other index.
            else {
                if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1])
                    return nums[i];
            }
        }

        /* Dummy return statement,
           should never reach here.*/
        return -1;
    }
}

let nums = [1, 1, 2, 2, 3, 3, 4];  

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.singleNonDuplicate(nums);

// Print the result
console.log("The single element is:", ans);



