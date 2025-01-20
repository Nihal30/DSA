// Left Rotate Array by K Places
// Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.
// Input: nums = [1, 2, 3, 4, 5, 6], k = 2
// Output: nums = [3, 4, 5, 6, 1, 2]
// Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
// rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]

//  brute 

// class Solution {
//     // Function to rotate the array to the left by k positions
//     rotateArray(nums, k) {
//         let n = nums.length; // Size of array
//         k = k % n; // To avoid unnecessary rotations

//         let temp = [];

//         // Store first k elements in a temporary array
//         for (let i = 0; i < k; i++) {
//             temp.push(nums[i]);
//         }

//         // Shift n-k elements of given array to the front
//         for (let i = k; i < n; i++) {
//             nums[i - k] = nums[i];
//         }

//         // Copy back the k elements at the end
//         for (let i = 0; i < k; i++) {
//             nums[n - k + i] = temp[i];
//         }
//     }
// }

// // Helper function to print the array
// function printArray(nums) {
//     console.log(nums.join(' '));
// }

// const nums = [1, 2, 3, 4, 5, 6];
// const k = 2;

// console.log("Initial array: ");
// printArray(nums);

// // Create an instance of the Solution class
// const sol = new Solution();

// /* Function call to rotate the
// array to the left by k places */
// sol.rotateArray(nums, k);

// console.log(`Array after rotating elements by ${k} places: `);
// printArray(nums);

// optimal
class Solution {
    // Function to reverse the array between start and end
    reverseArray(nums, start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    // Function to rotate the array to the left by k positions
    rotateArray(nums, k) {
        let n = nums.length; // Size of array
        k = k % n; // To avoid unnecessary rotations

        // Reverse the first k elements
        this.reverseArray(nums, 0, k - 1);

        // Reverse the last n-k elements
        this.reverseArray(nums, k, n - 1);

        // Reverse the entire array
        this.reverseArray(nums, 0, n - 1);
    }
}

// Helper function to print the array
function printArray(nums) {
    console.log(nums.join(" "));
}

const nums = [1, 2, 3, 4, 5, 6];
const k = 2;

console.log("Initial array: ");
printArray(nums);

// Create an instance of the Solution class
const sol = new Solution();

/* Function call to rotate the 
array to the left by k places */
sol.rotateArray(nums, k);

console.log(`Array after rotating elements by ${k} places: `);
printArray(nums);