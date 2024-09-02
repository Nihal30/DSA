class Solution {
    // Function to print pattern15
    pattern15(n) {
        // Outer loop for the number of rows.
        for (let i = 0; i < n; i++) {
            
            /* Initialize an empty string to 
            accumulate characters for the current row*/
            let row = "";

            /* Inner loop will loop for (n - i) times and
            print alphabets from 'A' to 'A' + i.*/
            for (let j = 0, ch = 'A'; j <= (n - i - 1); j++, ch = String.fromCharCode(ch.charCodeAt(0) + 1)) {
                row += ch;
            }
            
            /* Print the accumulated row string
            for the current iteration*/
            console.log(row);
        }
    }
}

let N = 5;

// Create an instance of Solution class
let sol = new Solution();

sol.pattern15(N);
