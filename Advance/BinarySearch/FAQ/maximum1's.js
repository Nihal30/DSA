// Find row with maximum 1's
// Given a non-empty grid mat consisting of only 0s and 1s, where all the 
// rows are sorted in ascending order, find the index of the row with the maximum number of ones.

// Input : mat = [ [1, 1, 1], [0, 0, 1], [0, 0, 0] ]
// Output: 0
// Explanation: The row with the maximum number of ones is 0 (0 - indexed).
class Solution {
    /* Function to find the row 
    with the maximum number of 1's*/
    rowWithMax1s(mat) {
        let n = mat.length;
        let m = mat[0].length;
        /* Variable to store the 
        maximum count of 1's found*/
        let cnt_max = 0; 
        
        /* Variable to store the index
        of the row with max 1's*/
        let index = -1;  

        // Traverse the matrix row by row
        for (let i = 0; i < n; i++) {
            
            /* Counter for 1's 
            in the current row*/
            let cnt_ones = 0; 

            /* Count the number of 
            1's in the current row*/
            for (let j = 0; j < m; j++) {
                cnt_ones += mat[i][j];
            }

            /* Update cnt_max and index if current
            row has more 1's than previously found*/
            if (cnt_ones > cnt_max) {
                cnt_max = cnt_ones;
                index = i;
            }
        }

        /* Return the index of the row 
        with the maximum number of 1's*/
        return index;
    }
}

const matrix = [[1, 1, 1], [0, 0, 1], [0, 0, 0]];

//Create an instance of Solution class
const sol = new Solution();

// Print the answer
console.log("The row with maximum number of 1's is: " + sol.rowWithMax1s(matrix));
