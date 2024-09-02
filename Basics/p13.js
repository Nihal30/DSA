class Solution {
    // Function to print pattern12
    pattern12(n) {
        // Initial no. of spaces in row 1.
        let num = 1;

        // Outer loop for the number of rows.
        for (let i = 1; i <= n; i++) {
            // For printing numbers in each row
            for (let j = 1; j <= i; j++) {
                process.stdout.write(num + '');
                num++

            }
            /* As soon as the numbers for each iteration
            are printed, we move to the next row and give
            a line break otherwise all numbers would get 
            printed in 1 line */
            console.log();

           
        }
    }
}

// Main program
let N = 5;

// Create an instance of Solution class
let sol = new Solution();

sol.pattern12(N);
