// Merge Sorting
// Given an array of integers, nums,sort the array in non-decreasing order using the merge sort algorithm.
//  Return the sorted array.
// A sorted array in non-decreasing order is one in which each element is either greater than or equal to all the elements to its left in the array.
// Input: nums = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: 1 <= 3 <= 4 <= 5 <= 7.
// Thus the array is sorted in non-decreasing order.

// we will use recursion to implement this 

class Solution {
    // Function to merge two sorted halves of the array
    merge(arr, low, mid, high) {
        // Temporary array to store merged elements
        let temp = [];
        let left = low;
        let right = mid + 1;

        // Loop until subarrays are exhausted
        while (left <= mid && right <= high) {
            // Compare left and right elements
            if (arr[left] <= arr[right]) {
                // Add left element to temp
                temp.push(arr[left]);
                // Move left pointer
                left++;
            } else {
                // Add right element to temp
                temp.push(arr[right]);
                // Move right pointer
                right++;
            }
        }

        // Adding the remaining elements of left half
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        // Adding the remaining elements of right half
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        // Transferring the sorted elements to arr
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    // Helper function to perform merge sort from low to high
    mergeSortHelper(arr, low, high) {
        // Base case: if the array has only one element
        if (low >= high)
            return;

        // Find the middle index
        let mid = Math.floor((low + high) / 2);
        // Recursively sort the left half
        this.mergeSortHelper(arr, low, mid);
        // Recursively sort the right half
        this.mergeSortHelper(arr, mid + 1, high);
        // Merge the sorted halves
        this.merge(arr, low, mid, high);
    }

    // Function to perform merge sort on the given array
    mergeSort(nums) {
        let n = nums.length; // Size of array
        
        // Perform Merge sort on the whole array
        this.mergeSortHelper(nums, 0, n - 1);
        
        // Return the sorted array
        return nums;
    }
}

const main = () => {
    let arr = [9, 4, 7, 6, 3, 1, 5];
    let n = arr.length;

    console.log("Before Sorting Array: ");
    for (let i = 0; i < n; i++)
        process.stdout.write(arr[i] + " ");
    console.log();

    // Create an instance of the Solution class
    let sol = new Solution();
    // Function call to sort the array
    let sortedArr = sol.mergeSort(arr);

    console.log("After Sorting Array: ");
    for (let i = 0; i < n; i++)
        process.stdout.write(sortedArr[i] + " ");
    console.log();
}

// Execute the main function
main();
