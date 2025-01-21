// Print the matrix in spiral manner
// Given an M * N matrix, print the elements in a clockwise spiral manner.
//  Return an array with the elements in the order of their appearance when printed in a spiral manner.
// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// Solution 

class Solution {
    spiralOrder(matrix){
        let ans=[]
        let n = matrix.length;
        let m = matrix[0].length

        // initialize pointers for traversal
        let top = 0, left = 0
        let bottom = n-1, right= m-1

        // traverse the matrix in spiral

    
        // Traverse the matrix in spiral order
        while (top <= bottom && left <= right) {
            // Traverse from left to right
            for (let i = left; i <= right; ++i) {
                ans.push(matrix[top][i]);
            }
            top++;
            
            // Traverse from top to bottom
            for (let i = top; i <= bottom; ++i) {
                ans.push(matrix[i][right]);
            }
            right--;
            
            // Traverse from right to left
            if (top <= bottom) {
                for (let i = right; i >= left; --i) {
                    ans.push(matrix[bottom][i]);
                }
                bottom--;
            }
            
            // Traverse from bottom to top
            if (left <= right) {
                for (let i = bottom; i >= top; --i) {
                    ans.push(matrix[i][left]);
                }
                left++;
            }
        }
        
        //Return the ans
        return ans;
    }
}

// Test the solution
let mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// Create an instance of the Solution class
let finder = new Solution();

// Get spiral order using class method
let ans = finder.spiralOrder(mat);