
// question 

// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.

// Example 1
// Input: n=5, arr = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]

// Example 2
// Input: n=6, arr = [1,2,1,1,5,1]
// Output: [1,5,1,1,2,1]
// Explanation: The reverse of the array [1,2,1,1,5,1] is [1,5,1,1,2,1].




class Solution {
    // Function to reverse array using an auxiliary array
    reverse(arr, n) {
        let ans = new Array(n);
        
        /* Fill new array with elements of 
        original array in reverse order */
        for (let i = n - 1; i >= 0; i--) {
            ans[n - i - 1] = arr[i];
        }
        
        // Copy the elements back to the original array
        for (let i = 0; i < n; i++) {
            arr[i] = ans[i];
        }
        
        // Return
        return;
    }
}
 
// Function to print array
function printArray(arr, n) {
    console.log(arr.join(" "));
}
 
const n = 5;
const arr = [5, 4, 3, 2, 1];
 
// Creating instance of Solution class
let solution = new Solution();
console.log("Original array: ");
printArray(arr, n);
 
// Function call to reverse the array 
solution.reverse(arr, n); 
console.log("Reversed array: ");
printArray(arr, n);
