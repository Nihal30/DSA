// Rotate matrix by 90 degrees
// Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.
// The rotation must be done in place, meaning the input 2D matrix must be modified directly.

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// brute force 
// class Solution {
//     //Function to rotate the given matrix by 90 degrees clockwise
    
//     rotateMatrix(matrix) {
//         let n = matrix.length;
        
//         // Initialize new matrix to store rotated values
//         let rotated = new Array(n).fill().map(() => new Array(n).fill(0));
        
//         // Perform rotation logic
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < n; j++) {
//                 rotated[j][n - i - 1] = matrix[i][j];
//             }
//         }
        
//         // Copy rotated elements back to original matrix
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < n; j++) {
//                 matrix[i][j] = rotated[i][j];
//             }
//         }
//     }
// }

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let sol = new Solution();

// // Rotate the matrix
// sol.rotate(arr);

// // Print the rotated matrix
// console.log("Rotated Image:");
// for (let row of arr) {
//     console.log(row.join(" "));
// }

// optimal

class Solution {
    // Rotate the given matrix by 90 degrees clockwise.
    rotateMatrix(matrix) {
        let n = matrix.length;
        
        // Transpose the matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                // Swap elements across the diagonal
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        
        // Reverse each row of the matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < Math.floor(n / 2); j++) {
                // Swap elements symmetrically
                [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
            }
        }
    }
}

// Example usage:
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Create an instance of the Solution class
let sol = new Solution();

// Rotate the matrix
sol.rotate(arr);

// Output the rotated matrix
console.log("Rotated Image:");
for (let row of arr) {
    console.log(row.join(" "));
}

