// Split array - largest sum

// Given an integer array a of size n and an integer k. Split the array a into k 
// non-empty subarrays such that the largest sum of any subarray is minimized. Return the minimized largest sum of the split.

// Input: a = [1, 2, 3, 4, 5], k = 3
// Output:6
// Explanation: There are many ways to split the array a[] into k consecutive subarrays. 
// The best way to do this is to split the array a[] into [1, 2, 3], [4], and [5], where the largest sum among the three subarrays is only 6.

// Bs 

class Solution {
    /* Function to count partitions such 
    that each partition has sum <= maxSum*/
    countPartitions(a, maxSum) {
        let n = a.length;
        let partitions = 1;
        let subarraySum = 0;

        for (let i = 0; i < n; i++) {
            if (subarraySum + a[i] <= maxSum) {
                // Add element to the current subarray
                subarraySum += a[i];
            } else {
                // Start a new subarray with current element
                partitions++;
                subarraySum = a[i];
            }
        }

        return partitions;
    }

    /* Function to find the largest minimum 
    subarray sum with at most k partitions*/
    largestSubarraySumMinimized(a, k) {
        
        // Initialize binary search boundaries
        let low = Math.max(...a); 
        let high = a.reduce((acc, curr) => acc + curr, 0); 

        // Apply binary search
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let partitions = this.countPartitions(a, mid);

            if (partitions > k) {
                /* If partitions exceed k, increase 
                the minimum possible subarray sum*/
                low = mid + 1;
            } else {
                /* If partitions are within k, try to 
                minimize the subarray sum further*/
                high = mid - 1;
            }
        }

        /* After binary search, 'low' will be
        the largest minimum subarray sum with
        at most k partitions*/
        return low;
    }
}

const a = [10, 20, 30, 40];
const k = 2;

//Create an instance of Solution class
const sol = new Solution();

// Print the answer
console.log("The answer is:", sol.largestSubarraySumMinimized(a, k));
