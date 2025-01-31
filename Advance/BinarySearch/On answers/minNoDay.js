// Minimum days to make M bouquets
// Given n roses and an array nums where nums[i] denotes that the 'ith' rose will bloom on the nums[i]th day, 
// only adjacent bloomed roses can be picked to make a bouquet. Exactly k adjacent bloomed roses are required to make a single bouquet.
//  Find the minimum number of days required to make at least m bouquets, each containing k roses. Return -1 if it is not possible.

// Input: n = 8, nums = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3
// Output: 12
// Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. 
// So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

//  LS

class Solution {
    /* Function to check if it's possible to make
    m bouquets with k flowers each on day */
    possible(nums, day, m, k) {
        let n = nums.length;
        
        // Count of flowers bloomed
        let cnt = 0;
        
        // Count of bouquets formed
        let noOfB = 0;

        // Count number of bouquets that can be formed
        for (let i = 0; i < n; i++) {
            if (nums[i] <= day) {
                // Increment flower count
                cnt++;
            } else {
                /* Calculate number of bouquets
                   formed with flowers <= day */
                noOfB += Math.floor(cnt / k);
                
                // Reset flower count
                cnt = 0;
            }
        }
        // Add remaining flowers as a bouquet
        noOfB += Math.floor(cnt / k);

        /* Return true if enough 
           bouquets can be formed */
        return noOfB >= m;
    }

    /* Function to find the earliest day to
    make m bouquets of k flowers each */
    roseGarden(n, nums, k, m) {
        /* Calculate the minimum 
           number of flowers required */
        let val = m * k;
        
        /* Impossible case: not enough 
           flowers to make m bouquets */
        if (val > n) return -1;
        
        /* Find maximum and minimum
           bloom days in the array */
        let mini = Infinity, maxi = -Infinity;
        for (let i = 0; i < n; i++) {
            mini = Math.min(mini, nums[i]);
            maxi = Math.max(maxi, nums[i]);
        }

        /* Linear search to find the
        earliest day to make m bouquets */
        for (let i = mini; i <= maxi; i++) {
            if (this.possible(nums, i, m, k)) {
                return i;
            }
        }
        // Return -1 if no such day exists
        return -1;
    }
}

function main() {
    let arr = [7, 7, 7, 7, 13, 11, 12, 7];
    
    let n = arr.length;
    
    // Number of flowers per bouquet
    let k = 3;
    
    // Number of bouquets needed
    let m = 2;

    // Create an instance of the Solution class
    let sol = new Solution();
    
    let ans = sol.roseGarden(n, arr, k, m);
    if (ans == -1) {
        console.log("We cannot make m bouquets.");
    } else {
        console.log("We can make bouquets on day " + ans);
    }
}

main();

