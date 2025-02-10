// Subsets II
// Given an integer array nums, which can have duplicate entries, provide the power set. 
// Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.

// Input : nums = [1, 2, 2]
// Output : [ [ ] , [1] , [1, 2] , [1, 2, 2] , [2] , [2, 2] ]

class Solution {
    func(ind, arr, nums, ans) {
        // If index reaches the end of nums
        if (ind === nums.length) {
            // Add the current subset (arr) to the result
            ans.push([...arr]);
            return;
        }
        
        // Include the current element in the subset
        arr.push(nums[ind]);
        // Recur for the next index
        this.func(ind + 1, arr, nums, ans);
        // Backtrack: remove the current element from the subset
        arr.pop();
        
        // Skip duplicates and recur for the next unique element
        for (let j = ind + 1; j < nums.length; j++) {
            if (nums[j] !== nums[ind]) {
                this.func(j, arr, nums, ans);
                return;
            }
        }
        
        // Ensure the function finishes when no more unique elements are left
        this.func(nums.length, arr, nums, ans);
    }

    subsetsWithDup(nums) {
        const ans = [];  // Resulting list of subsets
        const arr = [];  // Current subset
        nums.sort((a, b) => a - b);  // Sort the array to handle duplicates
        this.func(0, arr, nums, ans);  // Start recursion
        return ans;
    }
}

const sol = new Solution();
const nums = [1, 2, 2];  // Example input
const result = sol.subsetsWithDup(nums);

// Print the resulting subsets
for (const subset of result) {
    console.log(subset);
}

// Time Complexity: O(2^N * N) - Each element is either included or excluded, leading to an exponential number of subsets.
// Space Complexity: O(N) - The space complexity is dominated by the recursion stack, which can go as deep as the number of elements in the input list.