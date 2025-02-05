// Find peak element
// Given an array arr of integers. A peak element is defined as an element greater than both of its neighbors.
//  Formally, if arr[i] is the peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i]. Find the index(0-based)
//   of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.

// Note: As there can be many peak values, 1 is given as output if the returned index is a peak number, otherwise 0.

// Input : arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1]
// Output: 7
// Explanation: In this example, there is only 1 peak that is at index 7.

// ls
class Solution {
    // Function to find the peak element in the array
    findPeakElement(arr) {
        // Size of array
        let n = arr.length;
        
        /* Iterate through the array
           to find the peak element */
        for (let i = 0; i < n; i++) {
            
            // Check if arr[i] is a peak
            if ((i === 0 || arr[i - 1] < arr[i]) && (i === n - 1 || arr[i] > arr[i + 1])) {
                
                // Return the index of peak element
                return i;
            }
        }
        /* Return -1 if no peak element
           found (dummy return) */
        return -1;
    }
}

function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
    
    // Create an instance of the Solution class
    let sol = new Solution();
    
    let ans = sol.findPeakElement(arr);
    
    // Output the result
    console.log("The peak is at index:", ans);
}

// Call the main function
main();
