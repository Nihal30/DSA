// Counting the Number of Subarrays with a Given Sum
class Solution {
    // Function to find number of subarrays with exactly sum S
    numSubarraysWithSum(A, S) {
      return this.atMost(A, S) - this.atMost(A, S - 1);
    }
  
    // Helper function to count subarrays with at most sum S
    atMost(A, S) {
      if (S < 0) return 0;
  
      let res = 0;
      let left = 0;
  
      // Sliding window approach
      for (let right = 0; right < A.length; right++) {
        S -= A[right]; // Include A[right] in window
  
        // Shrink window from the left if sum exceeds S
        while (S < 0) {
          S += A[left];
          left++;
        }
  
        // All subarrays ending at 'right' with valid sum
        res += right - left + 1;
      }
  
      return res;
    }
  }
  
  // Sample input
  const sol = new Solution();
  const A = [1, 0, 1, 0, 1];
  const S = 2;
  
  // Call the method and print the result
  const result = sol.numSubarraysWithSum(A, S);
  console.log(`Number of subarrays with sum ${S}: ${result}`);
  