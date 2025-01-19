// Given an integer n. You need to recreate the pattern given below for any value of N.
//  Let's say for N = 5, the pattern should look like as below:

class Solution {
    //Function to print pattern8
    pattern8(n) {
        
        //Outer loop which will loop for the rows.
        for (let i = 0; i < n; i++) {
            
            //This loop will print the spaces
            for(let j = 0; j < i; j++){
                process.stdout.write(" ");
            }
            // Inner loop will run for columns.
            for (let j = 0; j < 2*n-(2*i+1); j++) {
                process.stdout.write("*");
            }
            /* As soon as n stars are printed, move
               to the next row and give a line break. */
            console.log();
        }
    }

}

const N = 5;

// Create an instance of the Solution class
const sol = new Solution();

sol.pattern8(N);