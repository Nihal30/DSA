// Power Set

// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array.
// Do not include the duplicates in the answer.

// Input : nums = [1, 2, 3]
// Output : [ [ ] , [1] , [2] , [1, 2] , [3] , [1, 3] , [2, 3] , [1, 2 ,3] ]

class Solution {
    // Helper function to generate all subsets
    backtrack(index, n, nums, current, ans) {
        // Base case: if the index reaches the length of the array,
        // add the current subset to the answer list
        if (index === n) {
            ans.push([...current]);  // Add a copy of the current list
            return;
        }

        // Recursive case: Exclude the current element and move to the next element
        this.backtrack(index + 1, n, nums, current, ans);

        // Include the current element in the subset and move to the next element
        current.push(nums[index]);
        this.backtrack(index + 1, n, nums, current, ans);

        // Backtrack: remove the last added element to explore other subsets
        current.pop();
    }

    // Main function to generate the power set of the given array
    powerSet(nums) {
        const ans = [];  // List to store all subsets
        const current = [];  // Temporary list to store the current subset
        this.backtrack(0, nums.length, nums, current, ans);  // Start the recursive process
        return ans;  // Return the list of all subsets
    }
}

// Main method to test the code
const sol = new Solution();
const nums = [1, 2, 3];
console.log(sol.powerSet(nums));  
// Expected output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
