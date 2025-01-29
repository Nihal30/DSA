// First and last occurrence
// Given an array of integers nums sorted in non-decreasing order,
//  find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Explanation:The target is 8, and it appears in the array at indices 3 and 4, so the output is [3,4]

// using bounds
// class Solution {
//     // Function to find the lower bound of the target
//     lowerBound(nums, target) {
//         let low = 0, high = nums.length - 1;
//         let ans = nums.length;

//         // Applying binary search algorithm
//         while(low <= high) {
//             let mid = Math.floor((low + high) / 2);

//             /*  If the middle element is greater than
//                 or equal to the target element update 
//                 the answer as mid and eliminate the right half  */
//             if(nums[mid] >= target) {
//                 ans = mid;  
//                 high = mid - 1;  
//             }

//             /*  If the middle element is smaller than
//                 the target element then we eliminate 
//                 the left half  */ 
//             else {
//                 low = mid + 1; 
//             }
//         }
//         return ans;
//     }

//     // Function to find the upper bound of the target
//     upperBound(nums, target) {
//         let low = 0, high = nums.length - 1;
//         let ans = nums.length;

//         // Applying binary search algorithm
//         while(low <= high) {
//             let mid = Math.floor((low + high) / 2);

//             /*  If the middle element is greater than
//                 the target element update the answer 
//                 as mid and eliminate the right half  */
//             if(nums[mid] > target) {
//                 ans = mid;  
//                 high = mid - 1;  
//             } 
//             /*  If the middle element is greater than
//                 or equal to the target element 
//                 eliminate the right half  */ 
//             else {
//                 low = mid + 1;
//             }
//         }
//         return ans;
//     }

//     // Function to find the first and last occurrences of the target
//     searchRange(nums, target) {
//         // Function call to find the first occurrence (lower bound)
//         let firstOcc = this.lowerBound(nums, target);

//         // Check if the target is present in the array or not
//         if(firstOcc == nums.length || nums[firstOcc] != target) return [-1, -1]; 

//         // Function call to find the last occurrence (upper bound)
//         let lastOcc = this.upperBound(nums, target) - 1;  
        
//         return [firstOcc, lastOcc];  
//     }
// }

// let nums = [5, 7, 7, 8, 8, 10];
// let target = 8;

// // Create an instance of the Solution class
// let sol = new Solution();

// // Function call to find the first and last occurrences
// let result = sol.searchRange(nums, target);

// console.log("The first and last occurrences are at indices:", result[0], "and", result[1]);


// Binary search 

class Solution {
    // Function to find the lower bound of the target
    lowerBound(nums, target) {
        let low = 0, high = nums.length - 1;
        let ans = nums.length;

        // Applying binary search algorithm
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);

            /*  If the middle element is greater than
                or equal to the target element update 
                the answer as mid and eliminate the right half  */
            if(nums[mid] >= target) {
                ans = mid;  
                high = mid - 1;  
            }

            /*  If the middle element is smaller than
                the target element then we eliminate 
                the left half  */ 
            else {
                low = mid + 1; 
            }
        }
        return ans;
    }

    // Function to find the upper bound of the target
    upperBound(nums, target) {
        let low = 0, high = nums.length - 1;
        let ans = nums.length;

        // Applying binary search algorithm
        while(low <= high) {
            let mid = Math.floor((low + high) / 2);

            /*  If the middle element is greater than
                the target element update the answer 
                as mid and eliminate the right half  */
            if(nums[mid] > target) {
                ans = mid;  
                high = mid - 1;  
            } 
            /*  If the middle element is greater than
                or equal to the target element 
                eliminate the right half  */ 
            else {
                low = mid + 1;
            }
        }
        return ans;
    }

    // Function to find the first and last occurrences of the target
    searchRange(nums, target) {
        // Function call to find the first occurrence (lower bound)
        let firstOcc = this.lowerBound(nums, target);

        // Check if the target is present in the array or not
        if(firstOcc == nums.length || nums[firstOcc] != target) return [-1, -1]; 

        // Function call to find the last occurrence (upper bound)
        let lastOcc = this.upperBound(nums, target) - 1;  
        
        return [firstOcc, lastOcc];  
    }
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;

// Create an instance of the Solution class
let sol = new Solution();

// Function call to find the first and last occurrences
let result = sol.searchRange(nums, target);

console.log("The first and last occurrences are at indices:", result[0], "and", result[1]);

