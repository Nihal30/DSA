// Floor and Ceil in Sorted Array
// Given a sorted array nums and an integer x. Find the floor and ceil of x in nums.
//  The floor of x is the largest element in the array which is smaller than or equal to x.
//  The ceiling of x is the smallest element in the array greater than or equal to x. If no floor or ceil exists, output -1.

// Input : nums =[3, 4, 4, 7, 8, 10], x= 5
// Output: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

// Given have a sorted array where each element is distinct requirement is to find two specific values related to 𝑥 its
//  floor (largest element ≤ x) and its ceiling (smallest element ≥ x).

class Solution {
    // Helper function to find the floor of x
    findFloor(nums, n, x) {
        let low = 0, high = n - 1;
        let ans = -1;

        // Perform binary search to find the floor value
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            /*Check if mid element lesser than 
			      or equal to x, if it is update ans 
		        and eliminate the left half */
            if (nums[mid] <= x) {
                ans = nums[mid];  
                low = mid + 1;    
            } 
            else {
                high = mid - 1;
            }
        }
        return ans; 
    }

    // Helper function to find the ceil of x
    findCeil(nums, n, x) {
        let low = 0, high = n - 1;
        let ans = -1;

        //Perform binary search to find the ceil value
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            /*Check if mid element greater than 
			      or equal to x, if it is update ans 
		        and eliminate the left half */
            if (nums[mid] >= x) {
                ans = nums[mid];  
                high = mid - 1;  
            }
            else {
                low = mid + 1;
            }
        }
        return ans;  
    }

    // Function to find both floor and ceil of x 
        getFloorAndCeil(nums, x) {
        let n = nums.length;  

        /* Function call to find the floor 
		    value using helper functions*/
        let floor = this.findFloor(nums, n, x);

        /* Function call to find the ceil 
		    value using helper functions*/
        let ceil = this.findCeil(nums, n, x);

        return [floor, ceil]; 
    }
}

let nums = [3, 4, 4, 7, 8, 10];
let x = 5;

// Create an instance of the Solution class
let sol = new Solution();

// Function call to get floor and ceil
let result = sol.getFloorAndCeil(nums, x);

console.log("The floor and ceil are:", result[0], result[1]);