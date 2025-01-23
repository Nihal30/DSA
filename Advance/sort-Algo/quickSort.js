// Quick Sorting
// Given an array of integers called nums, sort the array in non-decreasing order using the quick sort algorithm and return the sorted array.
// A sorted array in non-decreasing order is an array where each element is greater than or equal to all preceding elements in the array.

// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

class Solution {
    // Function to partition the array
    partition(arr, low, high) {
        // Choosing the first element as pivot
        let pivot = arr[low];
        // Starting index for left subarray
        let i = low;
        // Starting index for right subarray
        let j = high;

        while (i < j) {
            // Move i to the right until we find an
            // element greater than the pivot
            while (arr[i] <= pivot && i <= high - 1) {
                i++;
            }
            // Move j to the left until we find an
            // element smaller than the pivot
            while (arr[j] > pivot && j >= low + 1) {
                j--;
            }
            // Swap elements at i and j if i is still
            // less than j
            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        // Pivot placed in correct position
        [arr[low], arr[j]] = [arr[j], arr[low]];
        return j;
    }

    // Helper Function to perform the recursive quick sort
    quickSortHelper(arr, low, high) {
        // Base case: If the array has one or no
        // elements, it's already sorted
        if (low < high) {
            // Get the partition index
            let pIndex = this.partition(arr, low, high);
            // Sort the left subarray
            this.quickSortHelper(arr, low, pIndex - 1);
            // Sort the right subarray
            this.quickSortHelper(arr, pIndex + 1, high);
        }
    }

    // Function to perform quick sort on given array
    quickSort(nums) {
        // Get the size of array
        let n = nums.length;
        
        // Perform quick sort
        this.quickSortHelper(nums, 0, n - 1);
        
        // Return sorted array
        return nums;
    }
}

const main = () => {
    let arr = [4, 6, 2, 5, 7, 9, 1, 3];
    let n = arr.length;

    console.log("Before Sorting Array:");
    for (let i = 0; i < n; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.log();

    // Create an instance of Solution class
    let solution = new Solution();

    // Function call to sort the array using quick sort
    let sortedArr = solution.quickSort(arr);

    console.log("After Sorting Array:");
    for (let i = 0; i < n; i++) {
        process.stdout.write(sortedArr[i] + " ");
    }
    console.log();
}

// Execute the main function
main();