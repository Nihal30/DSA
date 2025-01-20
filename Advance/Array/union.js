// Union of two sorted arrays

// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. 
// The elements in the union must be in ascending order.
// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.
// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
// Output: [1, 2, 3, 4, 5, 7]
// Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

// brut using set

class Solution {
    unionArray(nums1, nums2) {
        // Using Set for storing unique elements
        let set = new Set();
        let union = [];

        // Insert all elements of nums1 into the set
        for (let num of nums1) {
            set.add(num);
        }

        // Insert all elements of nums2 into the set
        for (let num of nums2) {
            set.add(num);
        }

        /* Convert the set to an array and sort
        it to get the union in ascending order */
        union = Array.from(set).sort((a, b) => a - b);

        return union;
    }
}

// Main function to test the Solution class
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums2 = [2, 3, 4, 4, 5, 11, 12];

// Create an instance of the Solution class
const finder = new Solution();

/* Get the union of nums1 and
nums2 using the class method*/
const union = finder.unionArray(nums1, nums2);

console.log("Union of nums1 and nums2 is:");
console.log(union.join(" "));