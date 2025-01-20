// Second Largest Element
// Given an array of integers nums, return the second-largest element in the array. 
// If the second-largest element does not exist, return -1.
// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation: The largest value in nums is 8, the second largest is 7

// brute

// we will sort the array 
// the we will loop from last end and check which is the 2nd highest array

// class Solution {
    
//     // Function to find the second largest element
//     secondLargestElement(nums) {
//         let n = nums.length;
        
//         // Check if the array has less than 2 elements
//         if (n < 2) {
//             // Indicating no second largest element is possible
//             return -1;
//         }
        
//         // Sort the array in ascending order
//         nums.sort((a, b) => a - b);

//         // Largest element will be at last index
//         let largest = nums[n - 1];

//         let secondLargest = -1;

//         // Traverse the sorted array from right to left
//         for (let i = n - 2; i >= 0; i--) {

//             /* If the current element is not
//             equal to the largest element */
//             if (nums[i] != largest) {

//                 /* Assign the current element 
//                 as the second largest and break */
//                 secondLargest = nums[i];
//                 break;
//             }
//         }

//         // Return the second largest element
//         return secondLargest;
//     }
// }

// // Example usage
// let nums = [1, 2, 4, 6, 7, 5];

// // Create an instance of the Solution class
// let sol = new Solution();

// /* Call the method to find 
// the second largest element */
// let ans = sol.secondLargestElement(nums);

// console.log("Second largest element is:", ans);

// better

// class Solution {

//     secondLargestElement(nums) {
//         // Get the length of the array
//         let n = nums.length;

//         // Check if the array has less than 2 elements
//         if (n < 2) {
//             /*If true, return -1 indicating there
//             is no second largest element*/
//             return -1; 
//         }

//         /*Initialize variables to store the 
//         largest and second largest elements*/
//         let largest = Number.MIN_VALUE;
//         let secondLargest = Number.MIN_VALUE;
        
//         // First traversal to find the largest element
//         for (let i = 0; i < n; i++) {
//             largest = Math.max(largest, nums[i]);
//         }
        
//         // Second traversal to find second largest element
//         for (let i = 0; i < n; i++) {
//             if (nums[i] > secondLargest && nums[i] != largest) {
//                 secondLargest = nums[i];
//             }
//         }

//         // Return the second largest element
//         return secondLargest ==  Number.MIN_VALUE ? -1 : secondLargest;
//     }
// }

// let nums = [1, 2, 4, 6, 7, 5];

// // Create an instance of the Solution class
// let sol = new Solution();

// /*Call the method to find the second
//  largest element and store the result*/
// let result = sol.getSecondLargest(nums);

// console.log("Second largest is " + result);

// optimal
class Solution {

    secondLargestElement(nums) {
        // Get the length of the array
        let n = nums.length;

        // Check if the array has less than 2 elements
        if (n < 2) {
            /*If true, return -1 indicating there
            is no second largest element*/
            return -1;
        }

        /* Initialize variables to store the 
        largest and second largest elements*/
        let largest = Number.MIN_VALUE;
        let secondLargest = Number.MIN_VALUE;

        /*Single traversal to find the largest 
        and second largest elements*/
        for (let i = 0; i < n; i++) {

            if (nums[i] > largest) {
                secondLargest = largest;
                largest = nums[i];
            }
            else if (nums[i] > secondLargest && nums[i] != largest) {
                secondLargest = nums[i];
            }

        }
        // Return the second largest element
        return secondLargest == Number.MIN_VALUE ? -1 : secondLargest;
    }
}

let nums = [1, 2, 4, 7, 7, 5];

// Create an instance of the Solution class
let sol = new Solution();

// Call the method to find second largest element
let sL = sol.secondLargestElement(nums);

console.log("Second largest is " + sL);


