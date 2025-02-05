// // Matrix Median
// // Given a 2D array matrix that is row-wise sorted. The task is to find the median of the given matrix.

// // Input: matrix=[ [1, 4, 9], [2, 5, 6], [3, 8, 7] ] 
// // Output: 5
// // Explanation: If we find the linear sorted array, the array becomes 1 2 3 4 5 6 7 8 9. So, median = 5

// // brute
// class Solution {
//     // Function to find the median of the matrix.
//     findMedian(matrix) {
//         let lst = [];
//         let n = matrix.length;
//         let m = matrix[0].length;
        
//         /* Traverse the matrix and 
//         copy the elements to list */
//         for (let i = 0; i < n; i++) {
//             for (let j = 0; j < m; j++) {
//                 lst.push(matrix[i][j]);
//             }
//         }
        
//         // Sort the list
//         lst.sort((a, b) => a - b);
        
//         // Return the median element
//         return lst[Math.floor((n * m) / 2)];
//     }
// }

// let matrix = [
//     [1, 2, 3, 4, 5],
//     [8, 9, 11, 12, 13],
//     [21, 23, 25, 27, 29]
// ];

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.findMedian(matrix);

// // Print the answer
// console.log("The median element is:", ans);

// Bs
class Solution {
    // Function to find the upper bound of an element
    upperBound(arr, x, m) {
        let low = 0, high = m - 1;
        let ans = m;
        
        // Apply binary search
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            // If arr[mid] > x, it can be a possible answer
            if (arr[mid] > x) {
                ans = mid;
                // Look for smaller index on the left
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // Return the answer
        return ans;
    }
    
    // Function to find the count of elements smaller than or equal to x
    countSmallEqual(matrix, n, m, x) {
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            cnt += this.upperBound(matrix[i], x, m);
        }
        // Return the count
        return cnt;
    }
    
    // Function to find the median in a matrix
    findMedian(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;
        
        // Initialize low and high
        let low = Number.MAX_SAFE_INTEGER;
        let high = Number.MIN_SAFE_INTEGER;
        
        // Point low and high to right elements
        for (let i = 0; i < n; i++) {
            low = Math.min(low, matrix[i][0]);
            high = Math.max(high, matrix[i][m - 1]);
        }
        
        let req = Math.floor((n * m) / 2);
        
        // Perform binary search
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            
            /* Store the count of elements
            lesser than or equal to mid*/
            let smallEqual = this.countSmallEqual(matrix, n, m, mid);
            if (smallEqual <= req) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        // Return low as answer
        return low;
    }
}

const matrix = [[1, 2, 3, 4, 5],
                [8, 9, 11, 12, 13],
                [21, 23, 25, 27, 29]];

// Create an instance of Solution class
const sol = new Solution();

console.log(sol.findMedian(matrix));

