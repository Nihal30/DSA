// 4 Sum
// Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// a, b, c, d are all distinct valid indices of nums.
// nums[a] + nums[b] + nums[c] + nums[d] == target.
// Notice that the solution set must not contain duplicate quadruplets.
//  One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.

// Input: nums = [1, -2, 3, 5, 7, 9], target = 7
// Output: [[-2, 1, 3, 5]]
// Explanation: nums[1] + nums[0] + nums[2] + nums[3] = 7

// optimal .
class Solution {
    // Function to find quadruplets with sum equal to target
    fourSum(nums, target) {
        let ans = [];
        let n = nums.length;
        
        // Sort the input array nums
        nums.sort((a, b) => a - b);
        
        // Iterate through the array to find quadruplets
        for (let i = 0; i < n; i++) {
            // Skip duplicates for i
            if (i > 0 && nums[i] === nums[i - 1])
                continue;
            
            for (let j = i + 1; j < n; j++) {
                // Skip duplicates for j
                if (j > i + 1 && nums[j] === nums[j - 1])
                    continue;
                
                // Two pointers approach
                let k = j + 1;
                let l = n - 1;
                
                while (k < l) {
                    let sum = nums[i] + nums[j] + nums[k] + nums[l];
                    
                    if (sum === target) {
                        // Found a quadruplet that sums up to target
                        ans.push([nums[i], nums[j], nums[k], nums[l]]);
                        
                        // Skip duplicates for k and l
                        k++;
                        l--;
                        while (k < l && nums[k] === nums[k - 1]) k++;
                        while (k < l && nums[l] === nums[l + 1]) l--;
                    } else if (sum < target) {
                        k++;
                    } else {
                        l--;
                    }
                }
            }
        }
        
        return ans;
    }
}

// Sample usage
const nums = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
const target = 9;

// Create an instance of Solution class
const sol = new Solution();
const ans = sol.fourSum(nums, target);

// Print the result
console.log("The quadruplets are:");
ans.forEach(quadruplet => {
    console.log(`[${quadruplet.join(' ')}]`);
});

