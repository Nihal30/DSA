// Find minimum in Rotated Sorted Array
// Given an integer array nums of size N, sorted in ascending order with
//  distinct values, and then rotated an unknown number of times (between 1 and N), find the minimum element in the array.

// Input : nums = [4, 5, 6, 7, 0, 1, 2, 3]
// Output: 0
// Explanation: Here, the element 0 is the minimum element in the array.

class Solution {
    /* Function to find minimum element
       in a rotated sorted array */
    findMin(arr) {
        // Initialize low and high indices
        let low = 0, high = arr.length - 1;
        
        // Initialize ans to maximum integer value
        let ans = Infinity;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            // Check if left part is sorted
            if (arr[low] <= arr[mid]) {
                /* Update ans with minimum 
                   of ans and arr[low] */
                ans = Math.min(ans, arr[low]);
                
                // Move to the right part
                low = mid + 1;
            } else {
                /* Update ans with minimum 
                   of ans and arr[mid] */
                ans = Math.min(ans, arr[mid]);
                
                // Move to the left part
                high = mid - 1;
            }
        }
        // Return the minimum element found
        return ans;
    }
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];

//Create an instance of the Solution class
let sol = new Solution();

let ans = sol.findMin(arr);

console.log("The minimum element is:", ans);
