class Solution {
    // Function to print pattern17
    pattern17(n) {
        // Outer loop for the number of rows.
        for (let i = 0; i < n; i++) {
            
            // Printing spaces before characters.
            for (let j = 0; j < n - i - 1; j++) {
                process.stdout.write(" ");
            }

            // Printing characters.
            let ch = 'A';
            let breakpoint = Math.floor((2 * i + 1) / 2);
            for (let j = 1; j <= 2 * i + 1; j++) {
                process.stdout.write(ch);
                if (j <= breakpoint)
                    ch = String.fromCharCode(ch.charCodeAt(0) + 1);
                else
                    ch = String.fromCharCode(ch.charCodeAt(0) - 1);
            }

            // Printing spaces after characters.
            for (let j = 0; j < n - i - 1; j++) {
                process.stdout.write(" ");
            }

            // Move to the next line for the next row.
            console.log();
        }
    }
}

let N = 5;

//Create an instance of Solution class
let sol = new Solution();

sol.pattern17(N);
