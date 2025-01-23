// Insertion Sorting
// Given an array of integers called nums, sort the array in non-decreasing order using the insertion sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.
// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.


class Solution {
    // Insertion Sort
        insertionSort(nums) {
            let n = nums.length;
            // Traverse through the array
            for (let i = 0; i < n; i++) {
                let j = i;
                // Swap elements till we reach greater element
                while (j > 0 && nums[j - 1] > nums[j]) {
                    [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
                    j--;
                }
            }
            return nums;
        }
    }
    
    // Create an instance of solution class
    let solution = new Solution();
    
    let nums = [13, 46, 24, 52, 20, 9];
    
    console.log("Before Using Insertion Sort:", nums);
    
    // Function call for insertion sort
    nums = solution.insertionSort(nums);
    
    console.log("After Using Insertion Sort:", nums);
    