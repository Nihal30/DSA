// Count subarrays with given xor K
// Given an array of integers nums and an integer k, return the total number of subarrays whose XOR equals to k.
// Input : nums = [4, 2, 2, 6, 4], k = 6
// Output : 4
// Explanation : The subarrays having XOR of their elements as 6 are [4, 2],  [4, 2, 2, 6, 4], [2, 2, 6], and [6]

// brute 

// class Solution {
//     // Function to count the number of subarrays with XOR k
//     subarraysWithXorK(nums, k) {
//         const n = nums.length;
//         let cnt = 0;

//         // Step 1: Generate subarrays
//         for (let i = 0; i < n; i++) {
//             for (let j = i; j < n; j++) {
//                 let xorr = 0;
//                 /* Step 2: Calculate XOR of 
//                    all elements in the subarray */
//                 for (let K = i; K <= j; K++) {
//                     xorr ^= nums[K];
//                 }
//                 // Step 3: Check XOR and count
//                 if (xorr === k) cnt++;
//             }
//         }
//         return cnt;
//     }
// }

// const a = [4, 2, 2, 6, 4];
// const k = 6;

// // Create an instance of the Solution class
// const solution = new Solution();

// // Function call to get the result
// const ans = solution.subarraysWithXorK(a, k);

// console.log("The number of subarrays with XOR k is:", ans);

// better 


// class Solution {
//     // Function to count the number of subarrays with XOR k
//     subarraysWithXorK(nums, k) {
//         const n = nums.length;
//         let cnt = 0;

//         // Step 1: Generate subarrays
//         for (let i = 0; i < n; i++) {
//             let xorr = 0;
//             for (let j = i; j < n; j++) {
//                 /* Step 2: Calculate XOR of
//                    all elements in the subarray */
//                 xorr ^= nums[j];

//                 // Step 3: Check XOR and count
//                 if (xorr === k) cnt++;
//             }
//         }
//         return cnt;
//     }
// }

// const a = [4, 2, 2, 6, 4];
// const k = 6;

// // Create an instance of the Solution class
// const solution = new Solution();

// // Function call to get the result
// const ans = solution.subarraysWithXorK(a, k);

// console.log("The number of subarrays with XOR k is:", ans);

// optimal 


class Solution {
    subarraysWithXorK(nums, k) {
        const n = nums.length;
        let xr = 0;
        const mpp = new Map();
        // setting the value of 0.
        mpp.set(xr, (mpp.get(xr) || 0) + 1);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
            // prefix XOR till index i:
            xr = xr ^ nums[i];

            // By formula: x = xr ^ k:
            const x = xr ^ k;

            // add the occurrence of xr ^ k to the count:
            cnt += mpp.get(x) || 0;

            // Insert the prefix xor till index i into the map:
            mpp.set(xr, (mpp.get(xr) || 0) + 1);
        }
        return cnt;
    }
}

const a = [4, 2, 2, 6, 4];
const k = 6;

// Create an instance of the Solution class
const solution = new Solution();

// Function call to get the result
const ans = solution.subarraysWithXorK(a, k);

console.log("The number of subarrays with XOR k is:", ans);


