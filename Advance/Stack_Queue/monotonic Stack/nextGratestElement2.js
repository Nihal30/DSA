// Given a circular integer array arr, return the next greater element for every element in arr.
// The next greater element for an element x is the first element greater than x that 
// we come across while traversing the array in a clockwise manner.
// If it doesn't exist, return -1 for that element element.

// Examples:
// Input: arr = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]
// Output: [10, -1, 6, 6, 2, 6, 7, 7, 9, 9, 10]
// Explanation: For the first element in arr i.e, 3, the greater element which comes next to it while 
// traversing and is closest to it is 10. Hence,10 is present on index 0 in the resultant array. Now for the second element 
// i.e, 10, there is no greater number and hence -1 is it’s next greater element (NGE). Similarly, 
// we got the NGEs for all other elements present in arr.  

class Solution {

    /* Function to find the next greater element
    for each element in the circular array */
    nextGreaterElements(arr) {
        
        let n = arr.length; // size of array
       
        // To store the next greater elements
        let ans = new Array(n).fill(-1);
       
        for(let i = 0; i < n; i++) {
           
            // Get the current element
            let currEle = arr[i];
            
            /* Nested loop to get the 
            next greater element */
            for(let j = 1; j < n; j++) {
               
                // Getting the hypothetical index
                let ind = (j + i) % n;
               
                // If the next greater element is found
                if(arr[ind] > currEle) {
                   
                    // Store the next greater element
                    ans[i] = arr[ind];
                   
                    // Break from the loop
                    break;
                }    
            }
        }
       
        // Return the answer
        return ans;
    }
}

// Creating an instance of Solution class
let sol = new Solution();

let n = 6;
let arr = [5, 7, 1, 7, 6, 0];

/* Function call to find the next greater element
for each element in the circular array */
let ans = sol.nextGreaterElements(arr);

console.log("The next greater elements are: " + ans.join(" "));
