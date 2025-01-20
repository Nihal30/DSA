// Move Zeros to End
// Given an integer array nums, move all the 0's to the end of the array. 
// The relative order of the other elements must remain the same. This must be done in place, without making a copy of the array.
// Input: nums = [0, 1, 4, 0, 5, 2]
// Output: [1, 4, 5, 2, 0, 0]
// Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same

// brute 

// function bruteMoveZeroes(nums){
//     const n = nums.length;
//     const temp = new Array(n).fill(0);
//         let count = 0;

//     // add non zero element 
//     for (let i =0;i<n;i++){
//         if(nums[i]!= 0){
//             temp[count++] = nums[i];
//         }

//     }
//        // Copy non-zero elements back to nums
//        for (let i = 0; i < count; i++) {
//         nums[i] = temp[i];
//     }
//      // Fill the rest with zeroes
//      for (let i = count; i < n; i++) {
//         nums[i] = 0;
//     }

// }

// let nums = [1,2,0,3,0,1,4,0]
// bruteMoveZeroes(nums)   

//  optimal Solution
// we will be using 2 pointers to solve this 

class Solution {
    moveZeroes(nums) {
        let j = -1;
       // length of nums
        const n = nums.length; 
        
        // place the pointer j:
        for (let i = 0; i < n; i++) {
            if (nums[i] === 0) {
                j = i;
                break;
            }
        }
        
        // no non-zero elements:
        if (j === -1) {
            return nums;
        }
        
        /* Move the pointers i and 
        j and swap accordingly*/
        for (let i = j + 1; i < n; i++) {
            if (nums[i] !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j++;
            }
        }
        
        return nums;
    }
}

// Example usage:
const arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];

//Create an instance of the class
const solution = new Solution();

solution.moveZeroes(arr);

// Print the modified array
console.log(arr);
