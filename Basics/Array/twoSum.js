// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var nums = [2, 7, 11, 15]; // Input array
var target = 9; // Target sum

var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i]; // First number
        for (var j = 0; j < nums.length; j++) {
            var item2 = nums[j]; // Second number
            var sum = item + item2; // Calculate their sum
            
            if (sum === target) {
                return [i, j]; // Return indices if the sum matches the target
            }
        }
    }
    return []; // Return an empty array if no solution is found
};

console.log(twoSum(nums, target)); // Output: [0, 1]

//  tc - O(n^2)
// sc - O(1)
