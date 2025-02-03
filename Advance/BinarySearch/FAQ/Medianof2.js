// // // Median of 2 sorted arrays
// // // Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays.

// // // The median is defined as the middle value of a sorted list of numbers. 
// // // In case the length of the list is even, the median is the average of the two middle elements.

// // // Input: arr1 = [2, 4, 6], arr2 = [1, 3, 5]
// // // Output: 3.5
// // // Explanation: The array after merging arr1 and arr2 will be [ 1, 2, 3, 4, 5, 6 ]. 
// // // As the length of the merged list is even, the median is the average of the two middle elements. 
// // // Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.

// // // brute 
// // class Solution {
// //     //Function to find the median of two sorted arrays.
// //     median(arr1, arr2) {
// //         // Size of two given arrays
// //         let n1 = arr1.length, n2 = arr2.length;

// //         let merged = [];
// //         // Apply the merge step
// //         let i = 0, j = 0;
// //         while (i < n1 && j < n2) {
// //             if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
// //             else merged.push(arr2[j++]);
// //         }

// //         // Copy the remaining elements
// //         while (i < n1) merged.push(arr1[i++]);
// //         while (j < n2) merged.push(arr2[j++]);

// //         // Find the median
// //         let n = n1 + n2;
// //         if (n % 2 === 1) {
// //             return merged[Math.floor(n / 2)];
// //         }

// //         let median = (merged[n / 2] + merged[(n / 2) - 1]) / 2.0;
// //         return median;
// //     }
// // }

// // const a = [1, 4, 7, 10, 12];
// // const b = [2, 3, 6, 15];

// // //Create an instance of Solution class
// // const sol = new Solution();

// // // Print the answer
// // console.log("The answer is:", sol.median(a, b));

// // better
// class Solution {
//     //Function to find the median of two sorted arrays.
//    median(arr1, arr2) {
//        // Size of two given arrays
//        const n1 = arr1.length, n2 = arr2.length;
//        const n = n1 + n2; // Total size

//        // Required indices for median calculation
//        const ind2 = Math.floor(n / 2);
//        const ind1 = ind2 - 1;
//        let cnt = 0;
//        let ind1el = -1, ind2el = -1;

//        // Apply the merge step
//        let i = 0, j = 0;
//        while (i < n1 && j < n2) {
//            if (arr1[i] < arr2[j]) {
//                if (cnt === ind1) ind1el = arr1[i];
//                if (cnt === ind2) ind2el = arr1[i];
//                cnt++;
//                i++;
//            } else {
//                if (cnt === ind1) ind1el = arr2[j];
//                if (cnt === ind2) ind2el = arr2[j];
//                cnt++;
//                j++;
//            }
//        }

//        // Copy the remaining elements
//        while (i < n1) {
//            if (cnt === ind1) ind1el = arr1[i];
//            if (cnt === ind2) ind2el = arr1[i];
//            cnt++;
//            i++;
//        }
//        while (j < n2) {
//            if (cnt === ind1) ind1el = arr2[j];
//            if (cnt === ind2) ind2el = arr2[j];
//            cnt++;
//            j++;
//        }

//        // Find the median
//        if (n % 2 === 1) {
//            return ind2el;
//        }

//        return (ind1el + ind2el) / 2;
//    }
// }

// const a = [1, 4, 7, 10, 12];
// const b = [2, 3, 6, 15];

// // Create an instance of the Solution class
// const sol = new Solution();

// // Print the median of the two sorted arrays
// console.log(`The median of two sorted arrays is ${sol.median(a, b)}`);

// BS

class Solution {
    //Function to find the median of two sorted arrays.
    median(arr1, arr2) {
        // Size of two given arrays
        const n1 = arr1.length, n2 = arr2.length;

        /* Ensure arr1 is not larger than 
        arr2 to simplify implementation*/
        if (n1 > n2) return this.median(arr2, arr1);

        const n = n1 + n2; // Total length
        // Length of left half
        const left = Math.floor((n1 + n2 + 1) / 2); 

        // Apply binary search
        let low = 0, high = n1;
        while (low <= high) {
            // Calculate mid index for arr1
            const mid1 = Math.floor((low + high) / 2); 
            
            // Calculate mid index for arr2
            const mid2 = left - mid1; 

            // Calculate l1, l2, r1, and r2
            const l1 = (mid1 > 0) ? arr1[mid1 - 1] : -Infinity;
            const r1 = (mid1 < n1) ? arr1[mid1] : Infinity;
            const l2 = (mid2 > 0) ? arr2[mid2 - 1] : -Infinity;
            const r2 = (mid2 < n2) ? arr2[mid2] : Infinity;

            if (l1 <= r2 && l2 <= r1) {
                // If condition for finding median is satisfied
                if (n % 2 === 1) return Math.max(l1, l2);
                else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
            } else if (l1 > r2) {
                // Eliminate the right half of arr1
                high = mid1 - 1;
            } else {
                // Eliminate the left half of arr1
                low = mid1 + 1;
            }
        }
        // Dummy statement
        return 0; 
    }
}

const arr1 = [1, 4, 7, 10, 12];
const arr2 = [2, 3, 6, 15];

// Create an instance of the Solution class
const sol = new Solution();

// Print the median of the two sorted arrays
console.log(`The median of two sorted arrays is ${sol.median(arr1, arr2)}`);


