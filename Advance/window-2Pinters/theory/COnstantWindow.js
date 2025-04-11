// 1> Constant Window K 

// Solution

function slidingWindowSum(arr, k) {
    const n = arr.length;
    let sum = 0;
  
    // Calculate the sum of the first window of size k
    for (let i = 0; i < k; i++) {
      sum += arr[i];
    }
  
    // Print the sum of the first window
    console.log(`Sum of window 1: ${sum}`);
  
    // Slide the window one element at a time
    for (let i = k; i < n; i++) {
      sum = sum - arr[i - k] + arr[i]; // Remove the element that is left behind and add the new element
      console.log(`Sum of window ${i - k + 2}: ${sum}`);
    }
  }
  
  // Sample input
  const arr = [1, 3, 2, 6, 4, 8, 5];
  const k = 3;
  
  // Call the function
  slidingWindowSum(arr, k);
  


