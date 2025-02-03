// // Median of 2 sorted arrays
// // Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays.

// // The median is defined as the middle value of a sorted list of numbers. 
// // In case the length of the list is even, the median is the average of the two middle elements.

// // Input: arr1 = [2, 4, 6], arr2 = [1, 3, 5]
// // Output: 3.5
// // Explanation: The array after merging arr1 and arr2 will be [ 1, 2, 3, 4, 5, 6 ]. 
// // As the length of the merged list is even, the median is the average of the two middle elements. 
// // Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.

// // brute 
// class Solution {
//     //Function to find the median of two sorted arrays.
//     median(arr1, arr2) {
//         // Size of two given arrays
//         let n1 = arr1.length, n2 = arr2.length;

//         let merged = [];
//         // Apply the merge step
//         let i = 0, j = 0;
//         while (i < n1 && j < n2) {
//             if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
//             else merged.push(arr2[j++]);
//         }

//         // Copy the remaining elements
//         while (i < n1) merged.push(arr1[i++]);
//         while (j < n2) merged.push(arr2[j++]);

//         // Find the median
//         let n = n1 + n2;
//         if (n % 2 === 1) {
//             return merged[Math.floor(n / 2)];
//         }

//         let median = (merged[n / 2] + merged[(n / 2) - 1]) / 2.0;
//         return median;
//     }
// }

// const a = [1, 4, 7, 10, 12];
// const b = [2, 3, 6, 15];

// //Create an instance of Solution class
// const sol = new Solution();

// // Print the answer
// console.log("The answer is:", sol.median(a, b));

// better
class Solution {
    //Function to find the median of two sorted arrays.
   median(arr1, arr2) {
       // Size of two given arrays
       const n1 = arr1.length, n2 = arr2.length;
       const n = n1 + n2; // Total size

       // Required indices for median calculation
       const ind2 = Math.floor(n / 2);
       const ind1 = ind2 - 1;
       let cnt = 0;
       let ind1el = -1, ind2el = -1;

       // Apply the merge step
       let i = 0, j = 0;
       while (i < n1 && j < n2) {
           if (arr1[i] < arr2[j]) {
               if (cnt === ind1) ind1el = arr1[i];
               if (cnt === ind2) ind2el = arr1[i];
               cnt++;
               i++;
           } else {
               if (cnt === ind1) ind1el = arr2[j];
               if (cnt === ind2) ind2el = arr2[j];
               cnt++;
               j++;
           }
       }

       // Copy the remaining elements
       while (i < n1) {
           if (cnt === ind1) ind1el = arr1[i];
           if (cnt === ind2) ind2el = arr1[i];
           cnt++;
           i++;
       }
       while (j < n2) {
           if (cnt === ind1) ind1el = arr2[j];
           if (cnt === ind2) ind2el = arr2[j];
           cnt++;
           j++;
       }

       // Find the median
       if (n % 2 === 1) {
           return ind2el;
       }

       return (ind1el + ind2el) / 2;
   }
}

const a = [1, 4, 7, 10, 12];
const b = [2, 3, 6, 15];

// Create an instance of the Solution class
const sol = new Solution();

// Print the median of the two sorted arrays
console.log(`The median of two sorted arrays is ${sol.median(a, b)}`);

