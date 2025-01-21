// 3 Sum

// Given an integer array nums.Return all triplets such that:
// i != j, i != k, and j != k
// nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
//  One element can be a part of multiple triplets. The output and the triplets can be returned in any order.

// Input: nums = [2, -2, 0, 3, -3, 5]
// Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]
// Explanation: nums[1] + nums[2] + nums[0] = 0
// nums[4] + nums[1] + nums[5] = 0
// nums[4] + nums[2] + nums[3] = 0

// brute

// class Solution {
//     // Function to find triplets having sum equals to target
//     threeSum(nums) {
//         // Set to store unique triplets
//         let tripletSet = new Set();

//         let n = nums.length;

//         // Check all possible triplets
//         for (let i = 0; i < n - 2; i++) {
//             for (let j = i + 1; j < n - 1; j++) {
//                 for (let k = j + 1; k < n; k++) {
//                     if (nums[i] + nums[j] + nums[k] === 0) {
//                         // Found a triplet that sums up to target
//                         let temp = [nums[i], nums[j], nums[k]];
                        
//                         /* Sort the triplet to ensure
//                         uniqueness when storing in set*/
//                         temp.sort((a, b) => a - b);
//                         tripletSet.add(temp.join(','));
//                     }
//                 }
//             }
//         }

//         // Convert set to array of arrays (unique triplets)
//         let ans = Array.from(tripletSet).map(triplet => triplet.split(',').map(num => parseInt(num)));

//         // Return the ans
//         return ans;
//     }
// }

// // Main function to test the solution
// let nums = [-1, 0, 1, 2, -1, -4];

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.threeSum(nums);

// // Print the result
// ans.forEach(triplet => {
//     console.log(`[${triplet.join(', ')}]`);
// });


// Time Limit Exceeded
// Complexity Analyis
// Time Complexity: O(N3 x log(no. of unique triplets)), where N is size of the array.
//  Using 3 nested loops & inserting triplets into the set takes O(log(no. of unique triplets)) time complexity.
//   But we are not considering the time complexity of sorting as we are just sorting 3 elements every time.

// Space Complexity: O(2 x no. of the unique triplets) for using a set data structure and a list to store the triplets.



// better solution using hash

// class Solution {
//     // Function to find triplets having sum equals to 0
//     threeSum(nums) {
//         // Set to store unique triplets
//         let tripletSet = new Set();

//         let n = nums.length;

//         // Check all possible triplets
//         for (let i = 0; i < n; i++) {
//             // Set to store elements seen so far in the loop
//             let hashset = new Set();

//             for (let j = i + 1; j < n; j++) {
//                 // Calculate the 3rd element needed to reach target
//                 let third =  - (nums[i] + nums[j]);

//                 /* Find if third element exists in 
//                 hashset (complements seen so far)*/
//                 if (hashset.has(third)) {
//                     // Found a triplet that sums up to target
//                     let temp = [nums[i], nums[j], third];

//                     /* Sort the triplet to ensure 
//                     uniqueness when storing in set*/
//                     temp.sort((a, b) => a - b);
//                     tripletSet.add(JSON.stringify(temp));
//                 }

//                 /* Insert the current element
//                 into hashset for future checks*/
//                 hashset.add(nums[j]);
//             }
//         }

//         // Convert set to list of lists (unique triplets)
//         let ans = Array.from(tripletSet).map(triplet => JSON.parse(triplet));

//         //Return the ans
//         return ans;
//     }
// }

// // Main function to test the solution
// let nums = [-1, 0, 1, 2, -1, -4];

// // Create an instance of Solution class
// let sol = new Solution();

// let ans = sol.threeSum(nums);

// // Print the result
// ans.forEach(triplet => {
//     console.log(`[${triplet.join(', ')}]`);
// });


// optimal

class Solution {
    // Function to find triplets having sum equals to target
    threeSum(nums) {
        
        // Array to store the triplets that sum up to target
        let ans = [];
        
        // Sort the input array nums
        nums.sort((a, b) => a - b);
        
        let n = nums.length;
        
        // Iterate through the array to find triplets
        for (let i = 0; i < n; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            
            // Two pointers approach
            let j = i + 1;
            let k = n - 1;
            
            while (j < k) {
                let sumVal = nums[i] + nums[j] + nums[k];
                
                if (sumVal < 0) {
                    j++;
                } else if (sumVal > 0) {
                    k--;
                } else {
                    // Found a triplet that sums up to target
                    let temp = [nums[i], nums[j], nums[k]];
                    ans.push(temp);
                    
                    // Skip duplicates
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) j++;
                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
            }
        }
        
        return ans;
    }
}

// Main function to test the Solution class
function main() {
    let nums = [-1, 0, 1, 2, -1, -4];
    
    // Create an instance of Solution class
    let sol = new Solution();

    let ans = sol.threeSum(nums);
    
    // Print the result
    ans.forEach(triplet => {
        console.log(`[${triplet.join(', ')}]`);
    });
}

// Invoke the main function
main();
