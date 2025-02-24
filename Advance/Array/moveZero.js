// Move all Zeros to the end of the array

// Problem Statement: You are given an array of integers, your task is to move all the zeros in 
// the array to the end of the array and move non-negative integers to the front by maintaining their order.

// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order




function moveZeros(n, a) {
    // Temporary array
    let temp = [];
    
    // Copy non-zero elements from original array to temp array
    for (let i = 0; i < n; i++) {
        if (a[i] !== 0) {
            temp.push(a[i]);
        }
    }
    
    // Number of non-zero elements
    let nz = temp.length;
    
    // Copy elements from temp and fill the first nz fields of the original array
    for (let i = 0; i < nz; i++) {
        a[i] = temp[i];
    }
    
    // Fill the rest of the cells with 0
    for (let i = nz; i < n; i++) {
        a[i] = 0;
    }
    
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(' '));


