// Count Inversions

// Given an integer array nums. Return the number of inversions in the array.
// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
// It indicates how close an array is to being sorted.
// A sorted array has an inversion count of 0.
// An array sorted in descending order has maximum inversion.
// Input: nums = [2, 3, 7, 1, 3, 5]

// Output: 5
// Explanation: The responsible indexes are:
// nums[0], nums[3], values: 2 > 1 & indexes: 0 < 3
// nums[1], nums[3], values: 3 > 1 & indexes: 1 < 3
// nums[2], nums[3], values: 7 > 1 & indexes: 2 < 3
// nums[2], nums[4], values: 7 > 3 & indexes: 2 < 4
// nums[2], nums[5], values: 7 > 5 & indexes: 2 < 5

// brute 
// class Solution {
//     // Function to find number of inversions in an array
//     numberOfInversions(nums) {
        
//         // Size of the array
//         let n = nums.length;

//         // Count the number of pairs
//         let cnt = 0;

//         for (let i = 0; i < n; i++) {
//             for (let j = i + 1; j < n; j++) {
                
//                 /* If nums[i] is greater than
//                 nums[j], increase count by 1*/
//                 if (nums[i] > nums[j]) {
//                     cnt++;
//                 }
//             }
//         }

//         // Return the count of inversions
//         return cnt;
//     }
// }

// const nums = [5, 4, 3, 2, 1];

// //Create an instance of Solution class
// const sol = new Solution();

// let result = sol.numberOfInversions(nums);

// // Print the number of inversions found
// console.log(`The number of inversions is: ${result}`);

// optimal 
// using merge sort 

class Solution {
    
    /* Merge function to count 
    inversions and merge sorted halves */
    merge(arr, low, mid, high) {
        
        // Temporary array for merging
        const temp = [];
        
        // Starting indices of left and right halves
        let left = low;
        let right = mid + 1;

        // Count variable to count the pairs
        let cnt = 0;

        // Merge sorted halves into temp array
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                
                temp.push(arr[left]);
                left++;
                
            } else {
                temp.push(arr[right]);
                
                // Count inversions
                cnt += (mid - left + 1);
                
                right++;
            }
        }

        // Copy remaining elements of left half
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        // Copy remaining elements of right half
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        /* Copy elements from temp 
        array back to original array */
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
        
        // Return the count of inversions
        return cnt;
    }

    // Merge sort function to recursively sort and count inversions
    mergeSort(arr, low, high) {
        let cnt = 0;
        if (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            
            // Sort left half
            cnt += this.mergeSort(arr, low, mid);  
            
            // Sort right half
            cnt += this.mergeSort(arr, mid + 1, high); 
            
            // Merge and count inversions
            cnt += this.merge(arr, low, mid, high);  
        }
        return cnt;
    }
    
    // Function to find number of inversions in an array
    numberOfInversions(nums) {
        
        // Size of the array
        const n = nums.length;

        // Count the number of pairs
        return this.mergeSort(nums, 0, n - 1);
    }
}

const nums = [5, 4, 3, 2, 1];

// Create an instance of Solution class
const sol = new Solution();

const result = sol.numberOfInversions(nums);

// Print the number of inversions found
console.log("The number of inversions are: " + result);
