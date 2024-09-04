class Solution {
    //Function to print pattern1
    pattern1(n) {
        
        //Outer loop which will loop for the rows.
        for (let i = 0; i < n; i++) {
            // Inner loop will run for columns.
            for (let j = 0; j < n; j++) {
                process.stdout.write("*");
                // console.log('*')
            }
            /* As soon as n stars are printed, move
               to the next row and give a line break. */
            console.log(); //  use as a line break
        }
    }

}

const N = 5;

// Create an instance of the Solution class
const sol = new Solution();

sol.pattern1(N);

// Note 
// process.stdout.write("*"); is used to print multiple asterisks on the same line without a newline,
//  which is ideal for creating patterns where characters are printed on the same row.

// console.log("*"); prints an asterisk (*) followed by a newline character. 
// This means that each * will be printed on a new line.
