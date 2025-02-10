// Count all subsequences with sum K

// Given an array nums and an integer k.Return the number of non-empty subsequences of 
// nums such that the sum of all elements in the subsequence is equal to k.

// Input : nums = [4, 9, 2, 5, 1] , k = 10
// Output : 2
// Explanation : The possible subsets with sum k are [9, 1] , [4, 5, 1].

class Solution {
    // Helper function to count subsequences
    // with the target sum
    func(ind, sum, nums) {
        // Base case: if sum is 0, one valid subsequence is found
        if (sum === 0) return 1;
        // Base case: if sum is negative or index exceeds array size
        if (sum < 0 || ind === nums.length) return 0;
        // Recurse by including current number or excluding it from the sum
        return this.func(ind + 1, sum - nums[ind], nums) + this.func(ind + 1, sum, nums);
    }

    // Function to start counting subsequences
    countSubseqenceWithTargetSum(nums, target) {
        return this.func(0, target, nums);
    }
}

// Main function to test the solution
const sol = new Solution();
const nums = [1, 2, 3, 4, 5];
const target = 5;
console.log(`Number of subsequences with target sum ${target}: ${sol.countSubsequenceWithTargetSum(nums, target)}`);
