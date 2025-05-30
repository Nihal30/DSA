// Longest Substring With At Most K Distinct Characters
// Given a string s and an integer k.Find the length of the longest substring with at most k distinct characters.
// Examples:
// Input : s = "aababbcaacc" , k = 2
// Output : 6
// Explanation : The longest substring with at most two distinct characters is "aababb".
// The length of the string 6.

// brute 

class Solution {
    /* Function to find the maximum length of 
    substring with at most k distinct characters */
    kDistinctChar(s, k) {
        
        /* Variable to store the 
        maximum length of substring*/
        let maxLen = 0;  
        
        /* Map to track the count of each
        character in the current window*/
        let mpp = new Map();
        
        /* Iterate through each starting
        point of the substring*/
        for(let i = 0; i < s.length; i++){
            // Clear map for a new starting point
            mpp.clear();
            
            for(let j = i; j < s.length; j++){
                
                // Add the current character to the map
                let c = s.charAt(j);
                mpp.set(c, (mpp.get(c) || 0) + 1);
                
                /* Check if the number of distinct 
                characters is within the limit*/
                if(mpp.size <= k){
                    
                    /* Calculate the length of
                    the current valid substring*/
                    maxLen = Math.max(maxLen, j - i + 1);
                }
                else break;
            }
        }
        
        // Return the maximum length found
        return maxLen;
    }
}

let s = "aaabbccd";
let k = 2;

//Create an instance of Solution class
let sol = new Solution();

let len = sol.kDistinctChar(s, k);

//Print the output
console.log(`Maximum length of substring with at most ${k} distinct characters: ${len}`);
