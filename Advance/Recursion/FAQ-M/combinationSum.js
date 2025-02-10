// Combination Sum

// Provided with a goal integer target and an array of unique integer candidates, 
// provide a list of all possible combinations of candidates in which the selected numbers add up to the target.
//  The combinations can be returned in any order.

// A candidate may be selected from the pool an infinite number of times. 
// There are two distinct combinations if the frequency if at least one of the selected figures differs.

// The test cases are created so that, for the given input, there are fewer than 150 possible combinations that add up to the target.
// If there is no possible subsequences then return empty vector.

// Input : candidates = [2, 3, 5, 4] , target = 7
// Output : [ [2, 2, 3] , [3, 4] , [5, 2] ]
// Explanation :
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 5 and 2 are candidates, and 5 + 2 = 7.
// 3 and 4 are candidates, and 3 + 4 = 7.
// There are total three combinations.

class Solution {
    // Recursive function to find all subsequences with the given target sum
    func(v, i, sum, v2, ans) {
        // Base case: if the sum is zero, add the current subsequence to the result
        if (sum === 0) {
            ans.push([...v2]);
            return;
        }
        
        // Base case: if the sum becomes negative or no elements are left
        if (sum < 0 || i < 0) {
            return;
        }

        // Exclude the current element and move to the next
        this.func(v, i - 1, sum, v2, ans);
        
        // Include the current element in the subsequence
        v2.push(v[i]);
        
        // Recursively call the function with the included element
        this.func(v, i, sum - v[i], v2, ans);
        
        // Backtrack by removing the last added element
        v2.pop();
    }

    // Main function to find all unique combinations of candidates that sum to the target
    combinationSum(candidates, target) {
        const ans = [];
        const v2 = [];
        
        // Start the recursive process
        this.func(candidates, candidates.length - 1, target, v2, ans);
        
        return ans;
    }
}

// Main block to test the solution
const sol = new Solution();
const candidates = [2, 3, 6, 7];
const target = 7;
const result = sol.combinationSum(candidates, target);
console.log(result);
