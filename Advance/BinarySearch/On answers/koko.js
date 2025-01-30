// Koko eating bananas

// A monkey is given n piles of bananas, where the 'ith' pile has nums[i] bananas.
//  An integer h represents the total time in hours to eat all the bananas.

// Each hour, the monkey chooses a non-empty pile of bananas and eats k bananas.
//  If the pile contains fewer than k bananas, the monkey eats all the bananas in that 
//  pile and does not consume any more bananas in that hour.

// Determine the minimum number of bananas the monkey must eat per hour to finish all the bananas within h hours.

// Input: n = 4, nums = [7, 15, 6, 3], h = 8
// Output: 5
// Explanation: If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly.
//  So, he will take 8 hours to complete all the piles.  

//ls 
class Solution {
    // Helper function to find the maximum element in the array
    findMax(v) {
        let maxi = Number.MIN_SAFE_INTEGER;
        let n = v.length;

        // Find the maximum element
        for (let i = 0; i < n; i++) {
            maxi = Math.max(maxi, v[i]);
        }
        return maxi;
    }

    /* Helper function to calculate total hours
       required at given hourly rate */
    calculateTotalHours(v, hourly) {
        let totalH = 0;
        let n = v.length;

        // Calculate total hours required
        for (let i = 0; i < n; i++) {
            totalH += Math.ceil(v[i] / hourly);
        }
        return totalH;
    }

    // Function to find the minimum rate to eat bananas
    minimumRateToEatBananas(nums, h) {
        // Find the maximum number of bananas
        let maxi = this.findMax(nums);

        /* Find the minimum value of k
           that satisfies the condition */
        for (let i = 1; i <= maxi; i++) {
            let reqTime = this.calculateTotalHours(nums, i);
            if (reqTime <= h) {
                return i;
            }
        }

        /* Dummy return statement (should 
           not be reached in valid cases) */
        return maxi;
    }
}

// Driver Code
const v = [7, 15, 6, 3];
const h = 8;

// Create an object of the Solution class
const sol = new Solution();

const ans = sol.minimumRateToEatBananas(v, h);

// Print the result
console.log(`Koko should eat at least ${ans} bananas/hr.`);
