// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
    for(var i =0;i<nums.length;i++){
        var item = nums[i];   
        for(var j=0; j < nums.length;j++){
            var item2 = nums[j];
            var sum = item + item2;
            
        if(sum === target ){
          return [i,j];
          
        }
      }
     }
};