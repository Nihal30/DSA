// Subsets I
// Given an array nums of n integers.Return sum of all subsets of the array nums.
// Output can be printed in any order.

// Input : nums = [2, 3]
// Output : [0, 2, 3, 5]
// Explanation :
// When no elements is taken then Sum = 0.
// When only 2 is taken then Sum = 2.
// When only 3 is taken then Sum = 3.
// When element 2 and 3 are taken then sum = 2+3 = 5.

class Solution {
    subsetSums(nums) {
        function func(ind, sum, nums, ans) {
            // Base case: if index reaches the end of the nums array
            if (ind === nums.length) {
                // Add the current sum to the ans array
                ans.push(sum);
                return;
            }
            // Recursively include the current element in the sum
            func(ind + 1, sum + nums[ind], nums, ans);
            // Recursively exclude the current element from the sum
            func(ind + 1, sum, nums, ans);
        }
        
        let ans = [];
        // Start the recursion with index 0 and initial sum 0
        func(0, 0, nums, ans);
        return ans;
    }
}

// Example usage
const solution = new Solution();
const nums = [1, 2, 3];
const result = solution.subsetSums(nums);
console.log("Subset sums are:", result);
