// Matrix Median
// Given a 2D array matrix that is row-wise sorted. The task is to find the median of the given matrix.

// Input: matrix=[ [1, 4, 9], [2, 5, 6], [3, 8, 7] ] 
// Output: 5
// Explanation: If we find the linear sorted array, the array becomes 1 2 3 4 5 6 7 8 9. So, median = 5

// brute
class Solution {
    // Function to find the median of the matrix.
    findMedian(matrix) {
        let lst = [];
        let n = matrix.length;
        let m = matrix[0].length;
        
        /* Traverse the matrix and 
        copy the elements to list */
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                lst.push(matrix[i][j]);
            }
        }
        
        // Sort the list
        lst.sort((a, b) => a - b);
        
        // Return the median element
        return lst[Math.floor((n * m) / 2)];
    }
}

let matrix = [
    [1, 2, 3, 4, 5],
    [8, 9, 11, 12, 13],
    [21, 23, 25, 27, 29]
];

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.findMedian(matrix);

// Print the answer
console.log("The median element is:", ans);
