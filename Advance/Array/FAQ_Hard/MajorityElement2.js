// Majority Element-II
// Given an integer array nums of size n.
//  Return all elements which appear more than n/3 times in the array. The output can be returned in any order.

// Input: nums = [1, 2, 1, 1, 3, 2]
// Output: [1]
// Explanation: Here, n / 3 = 6 / 3 = 2.
// Therefore the elements appearing 3 or more times is : [1]
// brute 

// class Solution {
//     // Function to find majority elements in an array
//     majorityElementTwo(nums) {
//         // Size of the array
//         let n = nums.length;
        
//         // List of answers
//         let result = [];
        
//         for (let i = 0; i < n; i++) {
//             /* Checking if nums[i] is not 
//             already part of the answer */
//             if (result.length === 0 || result[0] !== nums[i]) {
//                 let cnt = 0;
//                 for (let j = 0; j < n; j++) {
//                     // counting the frequency of nums[i]
//                     if (nums[j] === nums[i]) {
//                         cnt++;
//                     }
//                 }
                
//                 // check if frequency is greater than n/3
//                 if (cnt > Math.floor(n / 3)) {
//                     result.push(nums[i]);
//                 }
//             }
            
//             // if result size is equal to 2 break out of loop
//             if (result.length === 2) {
//                 break;
//             }
//         }
        
//         // return the majority elements
//         return result;
//     }
// }

// let arr = [11, 33, 33, 11, 33, 11];

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.majorityElementTwo(arr);

// // Print the majority elements found
// console.log("The majority elements are: " + ans.join(" "));

// better ..
// hashing 
// class Solution {
//     // Function to find majority elements in an array
//     majorityElementTwo(nums) {
        
//         // Size of the array
//         let n = nums.length;

//         // List of answers
//         let result = [];

//         // Declaring a map
//         let mpp = new Map();

//         // Least occurrence of the majority element
//         let mini = Math.floor(n / 3) + 1;

//         // Storing the elements with its occurrence
//         for (let i = 0; i < n; i++) {
//             let num = nums[i];
//             if (!mpp.has(num)) {
//                 mpp.set(num, 0);
//             }
//             mpp.set(num, mpp.get(num) + 1);

//             // Checking if num is the majority element
//             if (mpp.get(num) === mini) {
//                 result.push(num);
//             }

//             // If result size is equal to 2 break out of loop
//             if (result.length === 2) {
//                 break;
//             }
//         }

//         // Return the majority elements
//         return result;
//     }
// }

// let arr = [11, 33, 33, 11, 33, 11];

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.majorityElementTwo(arr);

// // Print the majority elements found
// console.log("The majority elements are:", ans.join(" "));

// optimal
class Solution {
    // Function to find majority elements in an array
    majorityElementTwo(nums) {
        
        // Size of the array
        let n = nums.length;

        // Counts for elements el1 and el2
        let cnt1 = 0, cnt2 = 0;
        
        /* Initialize Element 1 and 
        Element 2 with INT_MIN value */
        let el1 = Number.MIN_SAFE_INTEGER, el2 = Number.MIN_SAFE_INTEGER;

        /* Find the potential candidates using
        Boyer Moore's Voting Algorithm */
        for (let i = 0; i < n; i++) {
            if (cnt1 === 0 && el2 !== nums[i]) {
                cnt1 = 1;
                // Initialize el1 as nums[i]
                el1 = nums[i]; 
            } else if (cnt2 === 0 && el1 !== nums[i]) {
                cnt2 = 1;
                // Initialize el2 as nums[i]
                el2 = nums[i]; 
            } else if (nums[i] === el1) {
                // Increment count for el1
                cnt1++;
            } else if (nums[i] === el2) {
                // Increment count for el2
                cnt2++; 
            } else {
                // Decrement count for el1
                cnt1--; 
                // Decrement count for el2
                cnt2--;
            }
        }

        //Validate the candidates by counting occurrences in nums
        //Reset counts for el1 and el2
        cnt1 = 0; cnt2 = 0; 
        
        for (let i = 0; i < n; i++) {
            if (nums[i] === el1) {
                // Count occurrences of el1
                cnt1++; 
            }
            if (nums[i] === el2) {
                // Count occurrences of el2
                cnt2++;
            }
        }

        /* Determine the minimum count
        required for a majority element */
        let mini = Math.floor(n / 3) + 1;
        
        // List of answers
        let result = [];

        /* Add elements to the result array
        if they appear more than n/3 times */
        if (cnt1 >= mini) {
            result.push(el1);
        }
        if (cnt2 >= mini && el1 !== el2) {
            // Avoid adding duplicate if el1 == el2
            result.push(el2); 
        }

        // Uncomment the following line if you want to sort the answer array
        // result.sort((a, b) => a - b); // TC --> O(2*log2) ~ O(1);

        //return the majority elements
        return result;
    }
}

// Main function to test the solution
let arr = [11, 33, 33, 11, 33, 11];

//Create an instance of Solution class
let sol = new Solution();

let ans = sol.majorityElementTwo(arr);

// Print the majority elements found
console.log("The majority elements are:", ...ans);





