// Intersection of two sorted arrays  
// Given two sorted arrays nums1 and nums2, return an array containing the intersection of these two arrays.
// The intersection of two arrays is an array where all values are present in both arrays.  

// Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]
// Output: [1, 2]
// Explanation: The elements 1, 2 are the only elements present in both nums1 and nums2

// brute 

// class Solution {
//     //Function to find intersection of two sorted arrays
//     intersectionArray(nums1, nums2) {
//         let ansList = [];
//         let visited = new Array(nums2.length).fill(0);
//         let i = 0, j = 0;

//         while (i < nums1.length) {
//             while (j < nums2.length) {

//                /*If nums1[i] is equal to nums2[j] and nums2[j]
//                 is not visited then add nums2[j] in ans.*/
//                 if (nums1[i] === nums2[j] && visited[j] === 0) {
//                     ansList.push(nums2[j]);
//                     visited[j] = 1;
//                     break;
//                 } 
//                 //If nums2[j] is greater than nums1[i], break out of loop
//                 else if (nums2[j] > nums1[i]) {
//                     break;
//                 }
//                 j++;
//             }
//             i++;
//         }
//         //Return the final ans
//         return ansList;
//     }

//     main() {
//         const nums1 = [1, 2, 3, 3, 4, 5, 6, 7];
//         const nums2 = [3, 3, 4, 4, 5, 8];

//         // Create an instance of the Solution class
//         const finder = new Solution();

//         // Get intersection of nums1 and nums2 using class method
//         const ans = finder.intersectionArrays(nums1, nums2);

//         console.log("Intersection of nums1 and nums2 is:");
//         console.log(ans);
//     }
// }

// // Execute main function
// new Solution().main();


