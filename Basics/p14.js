class Solution {
    // Function to print pattern14
    pattern14(n) {
        // Outer loop for the number of rows.
        for (let i = 0; i < n; i++) {
            let ch = 'A';

            /* Inner loop will loop for i times and
            print alphabets from A to A + i.*/
            for (let j = 0; j <= i; j++) {
                process.stdout.write(ch);
                ch = String.fromCharCode(ch.charCodeAt(0) + 1);
            }
            
            /*As soon as the letters for each iteration 
            are printed, we move to the next row and give
            a line break otherwise all letters would get
            printed in 1 line.*/
            console.log();
        }
    }
}

let N = 5;

// Create an instance of Solution class
let sol = new Solution();

sol.pattern14(N);
