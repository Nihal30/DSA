// // Remove Duplicates From Sorted array

// class Solution {
//   removeAllDuplicates(nums) {
//     let set = new Set();

//     for(let val of nums){
//         set.add(val)
//     }

//     let k = set.size;
//     let j = 0;
//     for(let val of s){
//         nums[j++] = val;
//     }
//     return k
//   }
// }

// // Helper function to print first n elements of the array
// function printArray(nums, n) {
//   for (let i = 0; i < n; i++) {
//     process.stdout.write(nums[i] + " ");
//   }
//   console.log();
// }

// // Example usage
// let nums = [1, 1, 2, 2, 2, 3, 3];

// console.log("Original Array: ");
// printArray(nums, nums.length);

// // Create an instance of the Solution class
// let sol = new Solution();

// // Function call to remove duplicates from array
// let k = sol.removeDuplicates(nums);



// optimal 

let nums =[1,1,2,2,3,3]

function removeAllDuplicates (nums){
    if(nums.length ===0){
        return 0
    }

    let i=0;
    for(let j=1;j<nums.length;j++){
        if(nums[i] !==nums[j] ){
            i++
            nums[i]=nums[j]
        }
    }
    return i+1

}