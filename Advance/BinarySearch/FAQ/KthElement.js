// Kth element of 2 sorted arrays
// Given two sorted arrays a and b of size m and n respectively. Find the kth element of the final sorted array.

// Input: a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.

// bs
class Solution {
    kthElement(a, b, k) {
        let m = a.length;
        let n = b.length;

        // Ensure a is smaller array for optimization
        if (m > n) {
            // Swap a and b
            return this.kthElement(b, a, k);
        }
        
        // Length of the left half
        let left = k;

        // Apply binary search
        let low = Math.max(0, k - n);
        let high = Math.min(k, m);
        while (low <= high) {
            let mid1 = (low + high) >> 1;
            let mid2 = left - mid1;

            // Initialize l1, l2, r1, r2
            let l1 = (mid1 > 0) ? a[mid1 - 1] : Number.MIN_SAFE_INTEGER;
            let l2 = (mid2 > 0) ? b[mid2 - 1] : Number.MIN_SAFE_INTEGER;
            let r1 = (mid1 < m) ? a[mid1] : Number.MAX_SAFE_INTEGER;
            let r2 = (mid2 < n) ? b[mid2] : Number.MAX_SAFE_INTEGER;

            // Check if we have found the answer
            if (l1 <= r2 && l2 <= r1) {
                return Math.max(l1, l2);
            } else if (l1 > r2) {
                // Eliminate the right half
                high = mid1 - 1;
            } else {
                // Eliminate the left half
                low = mid1 + 1;
            }
        }
        
        // Dummy return statement 
        return -1;
    }
}

let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
let k = 5

//Create an instance of Solution class
let sol = new Solution();

// Print the answer
console.log(`The ${k}-th element of two sorted arrays is: ${sol.kthElement(a, b, k)}`);
