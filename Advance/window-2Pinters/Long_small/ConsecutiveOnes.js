// Max Consecutive Ones III

// Given a binary array nums and an integer k, flip at most k 0's.
// Return the maximum number of consecutive 1's after performing the flipping operation.

// Examples:
// Input : nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0] , k = 3
// Output : 10
// Explanation : The maximum number of consecutive 1's are obtained only if we flip the 0's present at 
// position 3, 4, 5 (0 base indexing).
// The array after flipping becomes [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0].
// The number of consecutive 1's is 10.

class Solution {
    /*Function to find the length of the
      longest substring with at most k zeros*/
    longestOnes(nums, k) {
        // Length of the input array
        let n = nums.length;
        
        // Maximum length of the substring
        let maxLen = 0;
        
        /* Variable to count the number
        of zeros in the current window */
        let zeros = 0;
        
        /* Iterate through all possible 
        starting points of the substring */
        for (let i = 0; i < n; i++) {
            zeros = 0;
            
            /* Expand the window from starting
            point i to the end of the array */
            for (let j = i; j < n; j++) {
                if (nums[j] === 0) {
                    
                    /* Increment zeros count 
                    when encountering a zero */
                    zeros++;
                }
                
                /* If zeros count is within the 
                allowed limit (k), update maxLen */
                if (zeros <= k) {
                    
                    // Calculate the length of substring
                    let len = j - i + 1;
                    maxLen = Math.max(maxLen, len);
                } else break;
            }
        }
        
        // Return the maximum length
        return maxLen;
    }
}

function main() {
    let input = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
    let k = 2;
    
    // Create an instance of Solution class
    let sol = new Solution();
    
    let length = sol.longestOnes(input, k);
    
    // Print the result
    console.log(`Length of longest substring with at most ${k} zeros: ${length}`);
}

// Invoke main function
main();
