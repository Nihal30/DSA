// Aggressive Cows
// Given an array nums of size n, which denotes the positions of stalls, and an integer k,
//  which denotes the number of aggressive cows, assign stalls to k cows such that the minimum 
//  distance between any two cows is the maximum possible. Find the maximum possible minimum distance.

// Input: n = 6, k = 4, nums = [0, 3, 4, 7, 10, 9]
// Output: 3
// Explanation: The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions [0, 3, 7, 10].
//  Here the distances between cows are 3, 4, and 3 respectively. We cannot make the minimum distance greater than 3 in any ways.

// ls
// class Solution {
//     /* Function to check if we can place 'cows' 
//     cows with at least 'dist' distance apart */
//     canWePlace(nums, dist, cows) {
//         // Size of array
//         let n = nums.length;
        
//         // Number of cows placed
//         let cntCows = 1;
        
//         // Position of last placed cow
//         let last = nums[0];
        
//         for (let i = 1; i < n; i++) {
//             if (nums[i] - last >= dist) {
//                 // Place next cow
//                 cntCows++;
                
//                 // Update the last location
//                 last = nums[i];
//             }
//             if (cntCows >= cows) return true;
//         }
//         return false;
//     }

//     /* Function to find the maximum possible minimum
//     distance 'k' cows can have between them in 'nums' */
//     aggressiveCows(nums, k) {
//         // Size of array
//         let n = nums.length;
        
//         // Sort the nums
//         nums.sort((a, b) => a - b);

//         let limit = nums[n - 1] - nums[0];
//         for (let i = 1; i <= limit; i++) {
//             if (!this.canWePlace(nums, i, k)) {
//                 return i - 1;
//             }
//         }
//         // Return the answer
//         return limit;
//     }
// }

// function main() {
//     let nums = [0, 3, 4, 7, 10, 9];
//     let k = 4;

//     // Create an instance of the Solution class
//     let sol = new Solution();

//     let ans = sol.aggressiveCows(nums, k);

//     // Output the result
//     console.log("The maximum possible minimum distance is:", ans);
// }

// // Call the main function
// main();

// bs
class Solution {
    /* Function to check if we can place 'cows' 
    cows with at least 'dist' distance apart */
    canWePlace(nums, dist, cows) {
        // Size of array
        let n = nums.length;
        
        // Number of cows placed
        let cntCows = 1;
        
        // Position of last placed cow
        let last = nums[0];
        
        for (let i = 1; i < n; i++) {
            if (nums[i] - last >= dist) {
                // Place next cow
                cntCows++;
                
                // Update the last location
                last = nums[i];
            }
            if (cntCows >= cows) return true;
        }
        return false;
    }

    /* Function to find the maximum possible minimum
    distance 'k' cows can have between them in 'nums' */
    aggressiveCows(nums, k) {
        // Size of array
        let n = nums.length;
        
        // Sort the nums
        nums.sort((a, b) => a - b);

        let low = 1, high = nums[n - 1] - nums[0];
        // Apply binary search
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (this.canWePlace(nums, mid, k)) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        //Return the answer
        return high;
    }
}

function main() {
    let nums = [0, 3, 4, 7, 10, 9];
    let k = 4;

    // Create an instance of the Solution class
    let sol = new Solution();

    let ans = sol.aggressiveCows(nums, k);

    // Output the result
    console.log("The maximum possible minimum distance is:", ans);
}

// Call the main function
main();

