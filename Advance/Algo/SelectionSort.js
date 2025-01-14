// Selection Sort
// Given an array of integers nums, sort the array in non-decreasing order using the selection sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all previous elements in the array.

class Solution {
    selectionSort(nums) {
        // Loop through unsorted part of the array (0 to n-2)
        for (let i = 0; i < nums.length - 1; i++) {
            // Assume current element is the minimum
            let minIndex = i;

            // Find actual minimum in unsorted part (i+1 to n-1)
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap only if minIndex changed (optimization)
            if (minIndex != i) {
                [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
            }


        }

        return nums;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.selectionSort([64, 25, 12, 22, 11]));
