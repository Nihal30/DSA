// // Search in 2D matrix - II
// Given a 2D array matrix where each row is sorted in ascending order from left to right and each column is sorted 
// in ascending order from top to bottom, write an efficient algorithm to search for a specific integer target in the matrix.

// Input: matrix = [ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ], target = 5
// Output: True
// Explanation: The target 5 exists in the matrix in the index (1,1)

// brute
class Solution {
    // Helper function to perform binary search
    binarySearch(nums, target) {
        let n = nums.length; 
        let low = 0, high = n - 1;

        // Perform the steps:
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            // Return true if target is found
            if (nums[mid] === target) return true;
            else if (target > nums[mid]) low = mid + 1;
            else high = mid - 1;
        }
        // Return false if target not found
        return false;
    }
    
    // Function to search for a given target in matrix
    searchMatrix(matrix, target) {
        let n = matrix.length;
        let m = matrix[0].length;
        
        // Traverse through each row
        for (let i = 0; i < n; i++) {
            
            /* Check if target is 
            present in the current row*/
            let flag = this.binarySearch(matrix[i], target);
            
            if (flag) return true;
        }
        // Return false if target is not found
        return false; 
    }
}

let matrix = [[1, 4, 7, 11, 15], 
              [2, 5, 8, 12, 19],
              [3, 6, 9, 16, 22],
              [10, 13, 14, 17, 24],
              [18, 21, 23, 26, 30]];
let target = 8;

// Create an instance of Solution class
let sol = new Solution();

let result = sol.searchMatrix(matrix, target);

// Output the result
console.log(result ? "true" : "false");
