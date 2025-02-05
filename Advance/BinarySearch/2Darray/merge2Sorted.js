// // Merge two sorted arrays without extra space
// // Given two integer arrays nums1 and nums2. Both arrays are sorted in non-decreasing order.

// // Merge both the arrays into a single array sorted in non-decreasing order.
// // The final sorted array should be stored inside the array nums1 and it should be done in-place.
// // nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s.
// // nums2 has a length of n.

// // Input: nums1 = [-5, -2, 4, 5], nums2 = [-3, 1, 8]
// // Output: [-5, -3, -2, 1, 4, 5, 8]
// // Explanation: The merged array is: [-5, -3, -2, 1, 4, 5, 8], where [-5, -2, 4, 5] are from nums1 and [-3, 1, 8] are from nums2

// // brute
// class Solution {
//     // Function to merge two sorted arrays nums1 and nums2
//     merge(nums1, m, nums2, n) {
        
//         // Declare a 3rd array and 2 pointers:
//         let merged = new Array(m + n);
//         let left = 0;
//         let right = 0;
//         let index = 0;

//         /* Insert elements from nums1 and nums2 into
//         merged array using left and right pointers */
//         while (left < m && right < n) {
//             if (nums1[left] <= nums2[right]) {
//                 merged[index++] = nums1[left++];
//             } else {
//                 merged[index++] = nums2[right++];
//             }
//         }

//         // If right pointer reaches the end of nums2:
//         while (left < m) {
//             merged[index++] = nums1[left++];
//         }

//         // If left pointer reaches the end of nums1:
//         while (right < n) {
//             merged[index++] = nums2[right++];
//         }

//         /* Copy elements from merged array
//         array back to nums1 and nums2 */
//         for (let i = 0; i < m + n; i++) {
//             nums1[i] = merged[i];
//         }
//     }
// }

// // Main function to test the solution
// let nums1 = [-5, -2, 4, 5, 0, 0, 0];
// let nums2 = [-3, 1, 8];
// let m = 4;
// let n = 3;

// // Create an instance of the Solution class
// let sol = new Solution();

// sol.merge(nums1, m, nums2, n);

// // Output the merged arrays
// console.log("The merged arrays is:");
// console.log("nums1[] =", nums1);

// // Optimal
// class Solution {
//     // Function to merge two sorted arrays nums1 and nums2
//     merge(nums1, m, nums2, n) {
//         // Pointer for nums1 (end of valid elements)
//         let left = m - 1;
        
//         // Pointer for nums2 (beginning of valid elements)
//         let right = 0;
        
//         /* Swap the elements until nums1[left]
//         is smaller than nums2[right]*/
//         while (left >= 0 && right < n) {
//             if (nums1[left] > nums2[right]) {
//                 [nums1[left], nums2[right]] = [nums2[right], nums1[left]];
//                 left--;
//                 right++;
//             } else {
//                 break;
//             }
//         }
        
//         // Sort nums1 from index 0 to m-1
//         let sortedSlice = nums1.slice(0, m).sort((a, b) => a - b);

//         // Replace the sorted segment back into the original array
//         nums1.splice(0, sortedSlice.length, ...sortedSlice);
         
//         // Sort nums2 from start to end
//         nums2.sort((a, b) => a - b);
        
//         // Put the elements of nums2 in nums1
//         for (let i = m; i < m + n; i++) {
//             nums1[i] = nums2[i - m];
//         }
//     }
// }

// // Example usage
// let nums1 = [-5, -2, 4, 5, 0, 0, 0];
// let nums2 = [-3, 1, 8];
// let m = 4, n = 3;

// // Create an instance of the Solution class
// let sol = new Solution();

// sol.merge(nums1, m, nums2, n);

// // Output the merged arrays
// console.log("The merged arrays are:");
// console.log("nums1[] = " + nums1.join(" "));

// Optimal 2 
class Solution {
    // Function to merge two sorted arrays nums1 and nums2
    merge(nums1, m, nums2, n) {
        let len = n + m;
        let gap = Math.ceil(len / 2);

        while (gap > 0) {
            let left = 0;
            let right = left + gap;
            while (right < len) {
                // When left in nums1[] and right in nums2[]
                if (left < m && right >= m) {
                    this.swapIfGreater(nums1, nums2, left, right - m);
                }
                // When both pointers in nums2[]
                else if (left >= m) {
                    this.swapIfGreater(nums2, nums2, left - m, right - m);
                }
                // When both pointers in nums1[]
                else {
                    this.swapIfGreater(nums1, nums1, left, right);
                }
                // Increment the pointers by 1 each
                left++;
                right++;
            }
            // If gap is equal, break out of the loop
            if (gap === 1) break;
            gap = Math.ceil(gap / 2);
        }

        // Copy elements of nums2 into nums1
        for (let i = m; i < m + n; i++) {
            nums1[i] = nums2[i - m];
        }
    }

    // Utility function to swap elements if needed
    swapIfGreater(arr1, arr2, idx1, idx2) {
        if (arr1[idx1] > arr2[idx2]) {
            [arr1[idx1], arr2[idx2]] = [arr2[idx2], arr1[idx1]];
        }
    }
}

// Example usage
let nums1 = [-5, -2, 4, 5, 0, 0, 0];
let nums2 = [-3, 1, 8];
let m = 4, n = 3;

// Create an instance of the Solution class
let sol = new Solution();

sol.merge(nums1, m, nums2, n);

// Output the merged arrays
console.log("The merged array is:");
console.log("nums1[] = " + nums1.join(" "));
