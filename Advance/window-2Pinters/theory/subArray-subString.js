// Longest Subarray or Substring

// Function to find the longest subarray with sum <= K
function longestSubarrayWithSum(arr, K) {
    const n = arr.length;
    let maxLength = 0; // To store the maximum valid subarray length
    let sum = 0;       // Running sum of current window
    let left = 0;      // Left pointer of the sliding window
  
    // Iterate over the array using right pointer
    for (let right = 0; right < n; right++) {
      sum += arr[right]; // Add current element to the window sum
  
      // Shrink the window if sum exceeds K
      while (sum > K) {
        sum -= arr[left]; // Remove the leftmost element from the sum
        left++;           // Move the left boundary of the window to the right
      }
  
      // Update maxLength if current window is valid
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }
  
  // Sample input
  const arr = [2, 5, 1, 7, 10];
  const K = 14;
  
  // Find and display the result
  const result = longestSubarrayWithSum(arr, K);
  console.log(`The longest subarray length with sum <= ${K} is: ${result}`);
  