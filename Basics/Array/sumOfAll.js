class Solution {
    sum(arr, n) {
        // Initialize sum to 0
        let total_sum = 0;
        // Iterate through each element in the array
        for (let i = 0; i < n; i++) {
            // Add each element to the sum
            total_sum += arr[i];
        }
        return total_sum;
    }
}

// Main method
const sol = new Solution();
const arr = [1, 2, 3, 4, 5];
const n = arr.length;
console.log("Sum of array elements:", sol.sum(arr, n));
