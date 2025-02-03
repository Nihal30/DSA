// // Find peak element
// // Given an array arr of integers. A peak element is defined as an element greater than both of its neighbors. Formally,
// //  if arr[i] is the peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i]. Find the index(0-based) of a peak element
// //   in the array. If there are multiple peak numbers, return the index of any peak number.

// class Solution {
//     // Function to find the peak element in the array
//     findPeakElement(arr) {
//         // Size of array
//         let n = arr.length;
        
//         /* Iterate through the array
//            to find the peak element */
//         for (let i = 0; i < n; i++) {
            
//             // Check if arr[i] is a peak
//             if ((i === 0 || arr[i - 1] < arr[i]) && (i === n - 1 || arr[i] > arr[i + 1])) {
                
//                 // Return the index of peak element
//                 return i;
//             }
//         }
//         /* Return -1 if no peak element
//            found (dummy return) */
//         return -1;
//     }
// }

// function main() {
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
    
//     // Create an instance of the Solution class
//     let sol = new Solution();
    
//     let ans = sol.findPeakElement(arr);
    
//     // Output the result
//     console.log("The peak is at index:", ans);
// }

// // Call the main function
// main();

// bs
class Solution {
    // Function to find peak element in the array
    findPeakElement(arr) {
        // Size of array
        let n = arr.length;
        
        // Edge cases:
        if (n == 1) return 0;
        if (arr[0] > arr[1]) return 0;
        if (arr[n - 1] > arr[n - 2]) return n - 1;

        let low = 1, high = n - 2;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2); 

            // If arr[mid] is the peak
            if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
                return mid;

            // If we are in the left part of the array
            if (arr[mid] < arr[mid - 1])
                high = mid - 1;
            // If we are in the right part of the array
            else 
                low = mid + 1;
        }
        // Return -1 if no peak element found 
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
