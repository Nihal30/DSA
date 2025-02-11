// Combination Sum III

// Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:
// There is only use of numerals 1 through 9.
// A single use is made of each number.
// Return list of every feasible combination that is allowed. The combinations can be returned in any order,
//  but the list cannot have the same combination twice.

// Input : k = 3 , n = 7
// Output : [ [1, 2, 4] ]
// Explanation :
// 1 + 2 + 4 = 7
// There are no other valid combinations.

// Res Pattern taking or not taking

class Solution {
    func(sum, last, nums, k, ans) {
        // If the sum is zero and the number of elements is k
        if (sum === 0 && nums.length === k) {
            // Add the current combination to the answer
            ans.push([...nums]);
            return;
        }
        // If the sum is less than or equal to zero or the number of elements exceeds k
        if (sum <= 0 || nums.length > k) return;

        // Iterate from the last number to 9
        for (let i = last; i <= 9; i++) {
            // If the current number is less than or equal to the sum
            if (i <= sum) {
                // Add the number to the current combination
                nums.push(i);
                // Recursive call with updated sum and next number
                this.func(sum - i, i + 1, nums, k, ans);
                // Remove the last number to backtrack
                nums.pop();
            } else {
                // If the number is greater than the sum, break the loop
                break;
            }
        }
    }

    combinationSum3(k, n) {
        let ans = [];
        let nums = [];
        // Call the recursive function with initial parameters
        this.func(n, 1, nums, k, ans);
        return ans;
    }
}

// Example usage
let sol = new Solution();
let k = 3; // Number of elements in the combination
let n = 7; // Target sum
let result = sol.combinationSum3(k, n);

// Print the result
result.forEach(combination => {
    console.log(combination.join(' '));
});

// Complexity Analysis
// Time Complexity The time complexity is O(2^9 * k), due to the exploration of all subsets of the set {1, 2, ..., 9}.

// Space Complexity The space complexity is O(k), due to the maximum depth of the recursion stack, which is k.
