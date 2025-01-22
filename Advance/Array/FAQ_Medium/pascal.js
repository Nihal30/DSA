// Pascal's Triangle
// Given an integer numRows return the first numRows rows of Pascal's triangle.
// In Pascal's triangle:
// The first row has one element with a value of 1.
// Each row has one more element in it than its previous row.
// The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.

// Input: numRows = 4
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
// Explanation: 1st Row has its value set to 1.
// All other cells take their value as the sum of the values directly above them

// variety 1 
// Problem Statement 
// Given the row number r and the column number c, find out the element at position (r , c).
class Solution {
    // Function to calculate nCr (combinations)
    nCr(n, r) {
        /*
        Choosing the smaller value
        of r to optimize computation
        */
        if (r > n - r) {
            r = n - r;
        }
        
        let res = 1;
        /*
        Calculate nCr using iterative
        method to avoid overflow
        */
        for (let i = 0; i < r; i++) {
            res = res * (n - i);
            res = Math.floor(res / (i + 1));
        }
        
        return res;
    }

    /* Function to generate Pascal's
    Triangle up to numRows rows*/
    pascalTriangle(numRows) {
        
        /*
        Initialize  the triangle 
        array with numRows arrays
        */
        let triangle = [];
        
        /*
        Fill the triangle with 
        Pascal's Triangle values
        */
        for (let i = 0; i < numRows; i++) {
            
            /*
            Create a new row array and
            resize it to i + 1 elements
            */
            let row = [];
            
            for (let j = 0; j <= i; j++) {
                // Compute and store value at position (i, j)
                row.push(this.nCr(i, j));
            }
            
            triangle.push(row);
        }
        
        // Return completed Pascal's Triangle
        return triangle;
    }
}

// Main function for testing
function main() {
    // row number
    let r = 5;
    // col number
    let c = 3;
    
    // Create an instance of the Solution class
    let sol = new Solution();
    
    let pascalTriangle = sol.generate(r);
    
    /*
    Check if column number is valid
    and retrieve the element at (r, c)
    */
    if (r >= c && c > 0) {
        let element = pascalTriangle[r - 1][c - 1];
        console.log(`The element at position (${r},${c}) is: ${element}`);
    } else {
        /*
        Print error message if column number is invalid
        */
        console.log("Invalid column number!");
    }
}

// Execute main function
main();


// variety 2 
// Problem Statement 
// Given the row number n. Print the n -th row of Pascal’s triangle.

// class Solution {
//     // Function to calculate nCr (combinations)
//     nCr(n, r) {
//         /*
//         Calculate nCr using iterative
//         method to avoid overflow
//         */
//         let res = 1;
//         for (let i = 0; i < r; i++) {
//             res = res * (n - i);
//             res = Math.floor(res / (i + 1));
//         }
//         return res;
//     }

//     /* Function to print Pascal's
//     Triangle row for given n */
//     generate(n) {
//         /*
//         Print the entire row of 
//         Pascal's Triangle for row n:
//         */
//         for (let c = 1; c <= n; c++) {
//             process.stdout.write(this.nCr(n - 1, c - 1) + " ");
//         }
//         process.stdout.write("\n");
//     }
// }

// // Main execution block
// let n = 5;

// // Create an instance of the Solution class
// let sol = new Solution();

// // Print Pascal's Triangle row for row n
// sol.generate(n);



// variety 3
// Problem Statement 
// Given the row number, print the Pascal’s triangle till the row number
// class Solution {
//     /*Function to generate a single
//     row of Pascal's Triangle*/
//     generateRow(row) {
//         let ans = 1;
//         let ansRow = [];
        
//         // Inserting the 1st element
//         ansRow.push(1);

//         // Calculate the rest of the elements
//         for (let col = 1; col < row; col++) {
//             ans = ans * (row - col);
            
//             // Using Math.floor for integer division
//             ans = Math.floor(ans / col); 
            
//             ansRow.push(ans);
//         }

//         return ansRow;
//     }

//     /* Function to generate Pascal's
//     Triangle up to n rows*/
//     generate(n) {
//         let pascalTriangle = [];

//         // Store the entire Pascal's Triangle
//         for (let row = 1; row <= n; row++) {
//             pascalTriangle.push(this.generateRow(row));
//         }

//         return pascalTriangle;
//     }
// }

// // Main function to test the Solution class
// function main() {
//     const n = 5;
//     const sol = new Solution();

//     // Generate Pascal's Triangle with n rows
//     const pascalTriangle = sol.generate(n);

//     // Output the Pascal's Triangle
//     for (let row of pascalTriangle) {
//         console.log(row.join(" "));
//     }
// }

// // Calling main function to execute the code
// main();


