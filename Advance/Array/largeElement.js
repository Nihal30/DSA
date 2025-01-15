// Largest Element
// Given an array of integers nums, return the value of the largest element in the array

// Input: nums = [3, 3, 6, 1]
// Output: 6
// Explanation: The largest element in array is 6

function largest(arr){
   let lag = arr[0];
   for(i=0;i<arr.length;i++){
    if (arr[i]> lag){
        lag = arr[i]
    }
}
return lag;
}

let arr =[1,2,123,11]
console.log('largest(arr)', largest(arr))
largest(arr)