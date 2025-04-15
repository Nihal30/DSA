// Remove Duplicates From Sorted array

class Solution {
  removeAllDuplicates(nums) {
    let set = new Set();

    for(let val of nums){
        set.add(val)
    }

    let k = set.size;
    let j = 0;
    for(let val of s){
        nums[j++] = val;
    }
    return k
  }
}

// Helper function to print first n elements of the array
function printArray(nums, n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write(nums[i] + " ");
  }
  console.log();
}

// Example usage
let nums = [1, 1, 2, 2, 2, 3, 3];

console.log("Original Array: ");
printArray(nums, nums.length);

// Create an instance of the Solution class
let sol = new Solution();

// Function call to remove duplicates from array
let k = sol.removeDuplicates(nums);
