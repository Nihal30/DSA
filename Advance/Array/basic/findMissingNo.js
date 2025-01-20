// Find missing number
// Given an integer array of size n containing distinct values in the range from 0 to n (inclusive),
// return the only number missing from the array within this range.

// Input: nums = [0, 2, 3, 1, 4]
// Output: 5
// Explanation: nums contains 0, 1, 2, 3, 4 thus leaving 5 as the only missing number in the range [0, 5]

// brute  linear search
// class Solution {
//     // Function to find the missing number 
//     missingNumber(nums) {
//         // Calculate N from the size of nums
//         const N = nums.length; 
        
//         // Outer loop that runs from 0 to N
//         for (let i = 0; i <= N; i++) {
//             /* Flag variable to check 
//             if an element exists*/
//             let flag = 0;
            
//             // Search for the element using linear search
//             for (let j = 0; j < N; j++) {
//                 if (nums[j] === i) {
//                     // i is present in the array
//                     flag = 1;
//                     break;
//                 }
//             }
            
//             // Check if the element is missing (flag == 0)
//             if (flag === 0) return i;
//         }
        
//         /*  The following line will never
//         execute, it is just to avoid warnings*/
//         return -1;
//     }
// }

// const nums = [0, 1, 2, 4];

// // Create an instance of the Solution class
// const solution = new Solution();

// /* Call the missingNumber method 
// to find the missing number */
// const ans = solution.missingNumber(nums);

// console.log("The missing number is: " + ans);

// optimal 

// class Solution {
//     // Function to find the missing number 
//     missingNumber(nums) {
//         // Calculate N from the length of nums
//         let N = nums.length;
        
//         // Summation of first N natural numbers
//         let sum1 = (N * (N + 1)) / 2;
        
//         // Summation of all elements in nums
//         let sum2 = nums.reduce((acc, num) => acc + num, 0);
        
//         // Calculate the missing number
//         let missingNum = sum1 - sum2;
        
//         // Return the missing number
//         return missingNum;
//     }
// }

// // Main function to test the implementation
// const main = () => {
//     // Example array with missing number
//     const nums = [0,1, 2, 4];
    
//     // Create an instance of the Solution class
//     const solution = new Solution();
    
//     /* Call the missingNumber method
//     to find the missing number*/
//     const ans = solution.missingNumber(nums);
    
//     // Output the missing number
//     console.log(`The missing number is: ${ans}`);
// };

// // Call the main function
// main();


// optimal 2 using xor

class Solution {
    // Function to find the missing number 
    missingNumber(nums) {
        let xor1 = 0;
        let xor2 = 0;

        // Calculate XOR of all array elements
        for (let i = 0; i < nums.length ; i++) {
            xor1 ^= (i + 1);  // XOR up to [1...N]
            xor2 ^= nums[i];  // XOR of array elements
        }

        // XOR of xor1 and xor2 gives missing number
        return xor1 ^ xor2;
    }
}

// Main function to test the implementation
const main = () => {
    const nums = [1, 2, 4, 5];

    // Create an instance of the Solution class
    const solution = new Solution();

    /* Call the missingNumber method
    to find the missing number*/
    const ans = solution.missingNumber(nums);

    console.log(`The missing number is: ${ans}`);
};

// Call the main function
main();

