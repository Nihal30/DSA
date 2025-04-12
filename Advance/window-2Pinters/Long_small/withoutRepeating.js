// // Longest Substring Without Repeating Characters

// // Given a string, S. Find the length of the longest substring without repeating characters.

// // Examples:
// // Input : S = "abcddabac"
// // Output : 4
// // Explanation : The answer is "abcd" , with a length of 4.

// // Brute generating all the substring using 2 loop

// class Solution {
//   longestNonRepeatingSubstring(s) {
//     let n = s.length;
//     let maxLen = 0;

//     for (let i = 0; i < n; i++) {
//       let hash = new Array(256).fill(0);
//       for (let j = i; j < n; j++) {
//         if (hash[s.charCodeAt(j)] === 1) break;

//         hash[s.charCodeAt(j)] = 1;

//         let len = j - i + 1;
//         maxLen = Math.max(maxLen, len);
//       }
//     }
//     return maxLen;
//   }
// }

// let input = "cadbzabcd";

// //Create an instance of Solution class
// let sol = new Solution();

// let len = sol.longestNonRepeatingSubstring(input);

// // Print the result
// console.log("Length of longest substring without repeating characters: " + len);


// Optimal 2pinter /window

class Solution {
    /* Function to find the longest substring
       without repeating characters */
    longestNonRepeatingSubstring(s) {
        let n = s.length;
        
        // Assuming all ASCII characters
        let HashLen = 256; 
        
        /* Hash table to store last
           occurrence of each character */
        let hash = new Array(HashLen).fill(-1);
        
        /* Initialize hash table with
           -1 (indicating no occurrence) */
        for (let i = 0; i < HashLen; ++i) {
            hash[i] = -1;
        }

        let l = 0, r = 0, maxLen = 0;
        while (r < n) {
            /* If current character s[r] 
               is already in the substring */
            if (hash[s.charCodeAt(r)] != -1) {
                /* Move left pointer to the right
                   of the last occurrence of s[r] */
                l = Math.max(hash[s.charCodeAt(r)] + 1, l);
            }
            
            // Calculate the current substring length
            let len = r - l + 1;
            
            // Update maximum length found so far
            maxLen = Math.max(len, maxLen);
            
            /* Store the index of the current
               character in the hash table */
            hash[s.charCodeAt(r)] = r;
            
            // Move right pointer to next position
            r++;
        }
       
        // Return the maximum length found
        return maxLen;
    }
}

// Main function
let s = "cadbzabcd";
let sol = new Solution();
let result = sol.longestNonRepeatingSubstring(s);

// Output the maximum length
console.log("The maximum length is:");
console.log(result);

