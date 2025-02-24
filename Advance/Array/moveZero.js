// // Move all Zeros to the end of the array

// // Problem Statement: You are given an array of integers, your task is to move all the zeros in 
// // the array to the end of the array and move non-negative integers to the front by maintaining their order.

// // Example 1:
// // Input:
// //  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// // Output:
// //  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// // Explanation:
// //  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order




// function moveZeros(n, a) {
//     // Temporary array
//     let temp = [];
    
//     // Copy non-zero elements from original array to temp array
//     for (let i = 0; i < n; i++) {
//         if (a[i] !== 0) {
//             temp.push(a[i]);
//         }
//     }
    
//     // Number of non-zero elements
//     let nz = temp.length;
    
//     // Copy elements from temp and fill the first nz fields of the original array
//     for (let i = 0; i < nz; i++) {
//         a[i] = temp[i];
//     }
    
//     // Fill the rest of the cells with 0
//     for (let i = nz; i < n; i++) {
//         a[i] = 0;
//     }
    
//     return a;
// }

// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// let n = 10;
// let ans = moveZeros(n, arr);
// console.log(ans.join(' '));

// // Time Complexity: O(N) + O(X) + O(N-X) ~ O(2*N), where N = total no. of elements,
// // X = no. of non-zero elements, and N-X = total no. of zeros.
// // Reason: O(N) for copying non-zero elements from the original to the temporary array.
// //  O(X) for again copying it back from the temporary to the original array. O(N-X) 
// //  for filling zeros in the original array. So, the total time complexity will be O(2*N).

// // Space Complexity: O(N), as we are using a temporary array to solve this problem and the maximum size of the array can be N 
// // in the worst case.
// // Reason: The temporary array stores the non-zero elements. In the worst case, all the given array elements will be non-zero.





function moveZeros(n, a) {
    let j = -1;
    
    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }
    
    // No non-zero elements
    if (j === -1) return a;
    
    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
        }
    }
    
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(' '));

// Time Complexity: O(N), N = size of the array.
// Reason: We have used 2 loops and using those loops, we are basically traversing the array once.

// Space Complexity: O(1) as we are not using any extra space to solve this problem.






