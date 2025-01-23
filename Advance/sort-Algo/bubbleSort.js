// Bubble Sort
// Given an array of integers called nums,sort the array in non-decreasing order using the bubble sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.
// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

class Solution {
    // Bubble  Sort Function
        bubbleSort(nums) {
            let n = nums.length;
            // Traverse through the array
            for (let i = n - 1; i >= 0; i--) {
                // Track if swaps are made
                let isSwapped = false;
                for (let j = 0; j <= i - 1; j++) {
                    // Swap if next element is smaller
                    if (nums[j] > nums[j + 1]) {
                        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                        isSwapped = true;
                    }
                }
                /** Break out of loop
              if no swaps done*/
                if (!isSwapped) {
                    break;
                }
            }
            return nums;
        }
    }
    
    // Create an instance of solution class
    let solution = new Solution();
    
    let nums = [7, 4, 1, 5, 3];
    
    console.log("Array Before Using Bubble Sort:", nums);
    
    // Call the bubbleSort function
    nums = solution.bubbleSort(nums);
    
    console.log("Array After Using Bubble Sort:", nums);
    