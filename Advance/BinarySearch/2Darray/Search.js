// Search in a 2D matrix
// Given a 2-D array mat where the elements of each row are sorted in non-decreasing order,
//  and the first element of a row is greater than the last element of the previous row (if it exists), 
//  and an integer target, determine if the target exists in the given mat or not.

// Input: mat = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], target = 8
// Output: True
// Explanation: The target = 8 exists in the 'mat' at index (1, 3).

// brute 
class Solution {
    
    searchMatrix(mat, target) {
        // Check if the matrix is empty
        if (mat.length === 0 || mat[0].length === 0) {
            return false;
        }
        
        let n = mat.length;    
        let m = mat[0].length; 
        
        // Traverse the matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === target) {
                    
                    // Return true if target is found
                    return true;
                }
            }
        }
        // Return false if target is not found
        return false; 
    }
}

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let target = 8;

// Create an instance of Solution class
let sol = new Solution();

let result = sol.searchMatrix(matrix, target);

// Output the result
console.log(result ? "true" : "false");
