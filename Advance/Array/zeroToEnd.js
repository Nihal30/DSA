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