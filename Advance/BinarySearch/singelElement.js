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


class Solution {
    /* Function to find the single non 
       duplicate element in a sorted array */
    singleNonDuplicate(nums) {
        let n = nums.length; // Size of the array.

        // Edge cases:
        if (n === 1) return nums[0];
        if (nums[0] !== nums[1]) return nums[0];
        if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

        let low = 1, high = n - 2;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            // If nums[mid] is the single element:
            if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
                return nums[mid];
            }

            // We are in the left part:
            if ((mid % 2 === 1 && nums[mid] === nums[mid - 1])
                || (mid % 2 === 0 && nums[mid] === nums[mid + 1])) {
                // Eliminate the left half:
                low = mid + 1;
            }
            // We are in the right part:
            else {
                // Eliminate the right half:
                high = mid - 1;
            }
        }

        // Dummy return statement:
        return -1;
    }
}

let nums = [1, 1, 2, 2, 3, 3, 4];

// Create an object of the Solution class.
let sol = new Solution();

let ans = sol.singleNonDuplicate(nums);

// Print the result.
console.log(`The single element is: ${ans}`);





