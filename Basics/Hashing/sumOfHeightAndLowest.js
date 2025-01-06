// Sum of highest and lowest frequency
// Given an array of n integers, find the sum of the frequencies of the highest occurring number and lowest occurring number.

// brute
// class Solution {
//     /* Function to get the sum of highest
//     and lowest frequency in array */
//     sumHighestAndLowestFrequency(nums) {
        
//         // Variable to store the size of array
//         let n = nums.length;
        
//         /* Variable to store maximum 
//         and minimum frequency */
//         let maxFreq = 0;
//         let minFreq = n;

//         // Visited array
//         let visited = Array(n).fill(false);
        
//         // First loop
//         for (let i = 0; i < n; i++) {
//             // Skip second loop if already visited
//             if (visited[i]) continue;
            
//             /* Variable to store frequency
//             of current element */
//             let freq = 0;
            
//             // Second loop
//             for (let j = i; j < n; j++) {
//                 if (nums[i] === nums[j]) {
//                     freq++;
//                     visited[j] = true;
//                 }
//             }
            
//             /* Update maximum and 
//             minimum frequencies */
//             maxFreq = Math.max(maxFreq, freq);
//             minFreq = Math.min(minFreq, freq);
            
//         }
        
//         // Return the required sum
//         return maxFreq + minFreq;
//     }
// }

// // Example usage
// let nums = [1, 2, 2, 3, 3, 3];

// /* Creating an instance of 
// Solution class */
// let sol = new Solution();

// /* Function call to get the sum of highest
// and lowest frequency in array */
// let ans = sol.sumHighestAndLowestFrequency(nums);

// console.log("The sum of highest and lowest frequency in the array is:", ans);


// optimize

class Solution {
    /* Function to get the sum of highest
    and lowest frequency in array */
    sumHighestAndLowestFrequency(nums) {
        
        // Variable to store the size of array
        const n = nums.length;
        
        /* Variable to store maximum 
        and minimum frequency */
        let maxFreq = 0, minFreq = n;
        
        // HashMap
        const mpp = new Map();
        
        // Iterating on the array
        nums.forEach(num => {
            // Updating hashmap 
            if (mpp.has(num)) {
                mpp.set(num, mpp.get(num) + 1);
            } else {
                mpp.set(num, 1);
            }
        });
            
        // Iterate on the map
        for (let freq of mpp.values()) {
            /* Update maximum and 
            minimum frequencies */
            maxFreq = Math.max(maxFreq, freq);
            minFreq = Math.min(minFreq, freq);
        }
        
        // Return the required sum
        return maxFreq + minFreq;
    }
}

// Test the solution
const nums = [1, 2, 2, 3, 3, 3];

// Creating an instance of 
// Solution class
const sol = new Solution();

// Function call to get the sum of highest
// and lowest frequency in array
const ans = sol.sumHighestAndLowestFrequency(nums);

console.log(`The sum of highest and lowest frequency in the array is: ${ans}`);
