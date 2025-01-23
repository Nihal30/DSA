// Majority Element-I
// Given an integer array nums of size n, return the majority element of the array.
// The majority element of an array is an element that appears more than n/2 times in the array.
// The array is guaranteed to have a majority element.

// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
// Output: 7
// Explanation: The number 7 appears 5 times in the 9 sized array

// brute ..
// linear search using 2 loops 
// class Solution {
//     // Function to find the majority element in an array
//     majorityElement(nums) {
        
//         // Size of the given array
//         let n = nums.length;
        
//         // Iterate through each element of the array
//         for (let i = 0; i < n; i++) {
            
//             // Counter to count occurrences of nums[i]
//             let cnt = 0; 
            
//             // Count the frequency of nums[i] in the array
//             for (let j = 0; j < n; j++) {
//                 if (nums[j] === nums[i]) {
//                     cnt++;
//                 }
//             }
            
//             // Check if frequency of nums[i] is greater than n/2
//             if (cnt > Math.floor(n / 2)) {
//                 // Return the majority element
//                 return nums[i]; 
//             }
//         }
        
//         // Return -1 if no majority element is found
//         return -1; 
//     }
// }

// function main() {
//     let arr = [2, 2, 1, 1, 1, 2, 2];
    
//     // Create an instance of Solution class
//     let sol = new Solution();
 
//     let ans = sol.majorityElement(arr);
    
//     // Print the majority element found
//     console.log("The majority element is:", ans);
// }

// // Execute the main function
// main();

// better ..
// using hashing 

// class Solution {
//     // Function to find the majority element in an array
//     majorityElement(nums) {
        
//         // Size of the given array
//         let n = nums.length;
        
//         // Hash map to store element counts
//         let map = new Map();
        
//         // Count occurrences of each element
//         for (let num of nums) {
//             map.set(num, (map.get(num) || 0) + 1);
//         }
        
//         /* Iterate through the map to
//         find the majority element */
//         for (let [key, value] of map.entries()) {
//             if (value > n / 2) {
//                 return key;
//             }
//         }
        
//         // Return -1 if no majority element is found
//         return -1;
//     }
// }

// // Main function to test the Solution class
// function main() {
//     let arr = [2, 2, 1, 1, 1, 2, 2];
    
//     // Create an instance of Solution class
//     let sol = new Solution();
 
//     let ans = sol.majorityElement(arr);
    
//     // Print the majority element found
//     console.log("The majority element is:", ans);
// }

// // Execute the main function
// main();

// optimal ..
// Moore Majority Voting Algorithm

class Solution {
    // Function to find the majority element in an array
    majorityElement(nums) {
        // Size of the given array
        let n = nums.length;
        
        // Count
        let cnt = 0;
        
        // Element
        let el = 0;
        
        // Applying the algorithm
        for (let num of nums) {
            if (cnt === 0) {
                cnt = 1;
                el = num;
            } else if (el === num) {
                cnt++;
            } else {
                cnt--;
            }
        }
        
        /* Checking if the stored element
         is the majority element*/
        let cnt1 = nums.filter(num => num === el).length;
        
        // Return element if it is a majority element
        if (cnt1 > Math.floor(n / 2)) {
            return el;
        }
        
        // Return -1 if no such element found
        return -1;
    }
}

let arr = [2, 2, 1, 1, 1, 2, 2];

// Create an instance of Solution class
let sol = new Solution();

let ans = sol.majorityElement(arr);

// Print the majority element found
console.log(`The majority element is: ${ans}`);







