// Remove duplicates from sorted array
// Given an integer array nums sorted in non-decreasing order, remove all duplicates
// in-place so that each unique element appears only once. Return the number of unique elements in the array.
// If the number of unique elements be k, then,
// Change the array nums such that the first k elements of nums contain the unique values in the order that they were present originally.
// The remaining elements, as well as the size of the array does not matter in terms of correctness.
// An array sorted in non-decreasing order is an array where every element to the right of an element in either equal to or greater in value than that element.

// Input: nums = [0, 0, 3, 3, 5, 6]
// Output: [0, 3, 5, 6, _, _]
// Explanation: There are 4 distinct elements in nums and the elements marked as _ can have any value.


// brute
// class Solution {
//     // Function to remove duplicates from the array
//     removeDuplicates(nums) {
        
//         // Set data structure to store unique elements
//         let s = new Set();
        
//         // Add all elements from array to the set
//         for (let val of nums) {
//             s.add(val);
//         }
        
//         // Get the number of unique elements
//         let k = s.size;
        
//         let j = 0;
//         // Copy unique elements from set to array
//         for (let val of s) {
//             nums[j++] = val;
//         }
        
//         // Return the number of unique elements
//         return k;
//     }
// }

// // Helper function to print first n elements of the array
// function printArray(nums, n) {
//     for (let i = 0; i < n; i++) {
//         process.stdout.write(nums[i] + " ");
//     }
//     console.log();
// }

// // Example usage
// let nums = [1, 1, 2, 2, 2, 3, 3];

// console.log("Original Array: ");
// printArray(nums, nums.length);

// // Create an instance of the Solution class
// let sol = new Solution();

// // Function call to remove duplicates from array
// let k = sol.removeDuplicates(nums);

// console.log("Array after removing the duplicates: ");
// printArray(nums, k);


// optimal using 2 pointers
class Solution {
    // Function to remove duplicates from the array
    removeDuplicates(nums) {
        // Edge case: if array is empty
        if (nums.length === 0) {
            return 0;
        }
        
        // Initialize pointer for unique elements
        let i = 0;
        
        // Iterate through the array
        for (let j = 1; j < nums.length; j++) {
            /* If current element is different 
            from the previous unique element*/
            if (nums[i] !== nums[j]) {
                
                /* Move to the next position in 
                the array for the unique element*/
                i++;
                
                /* Update the current position 
                with the unique element*/
                nums[i] = nums[j];
            }
        }
        
        // Return the number of unique elements
        return i + 1;
    }
}

// Main function to test the implementation
if (typeof require !== 'undefined' && require.main === module) {
    let nums = [1, 1, 2, 2, 2, 3, 3];
    
    // Create an instance of the Solution class
    let solution = new Solution();
    
    // Call removeDuplicates to remove duplicates from nums
    let k = solution.removeDuplicates(nums);
    
    console.log("The array after removing duplicate elements is ");
    for (let i = 0; i < k; i++) {
        process.stdout.write(nums[i] + " ");
    }
    console.log();
}
