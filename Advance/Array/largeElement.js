// Largest Element
// Given an array of integers nums, return the value of the largest element in the array

// Input: nums = [3, 3, 6, 1]
// Output: 6
// Explanation: The largest element in array is 6

// function largest(arr){
//    let lag = arr[0];
//    for(i=0;i<arr.length;i++){
//     if (arr[i]> lag){
//         lag = arr[i]
//     }
// }
// return lag;
// }

// let arr =[1,2,123,11]
// console.log('largest(arr)', largest(arr))
// largest(arr)

class Solution {

    largestElement(nums) {
        // Sort array
        nums.sort((a, b) => a - b);

        /** The largest element will be at the 
           last index of the array*/
        const largest = nums[nums.length - 1];

        // Return the largest element
        return largest;
    }
}

const nums = [3, 2, 1, 5, 2];

// Create an instance of the Solution class
const sol = new Solution();

const largest = sol.largestElement(nums);

// Print the largest element
console.log(largest);
