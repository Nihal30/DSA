// // Given an array arr of size n containing elements, find the next greater element 
// // for each element in the array in the order of their appearance.
// // The next greater element of an element in the array is the nearest element on 
// // the right that is greater than the current element.
// // If there does not exist a next greater element for the current element, 
// // then the next greater element for that element is -1.

// // Examples:
// // Input: arr = [1, 3, 2, 4]
// // Output: [3, 4, 4, -1]
// // Explanation: In the array, the next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4 is -1, since it does not exist.


// // brute 

// class Solution {

//     /* Function to find the next greater 
//     element for each element in the array */
//     nextLargerElement(arr) {
        
//         let n = arr.length; // size of array
        
//         // To store the next greater elements
//         let ans = new Array(n).fill(-1);
        
//         for(let i = 0; i < n; i++) {
            
//             // Get the current element
//             let currEle = arr[i];
            
//             /* Nested loop to get the 
//             next greater element */
//             for(let j = i + 1; j < n; j++) {
                
//                 // If the next greater element is found
//                 if(arr[j] > currEle) {
                    
//                     // Store the next greater element
//                     ans[i] = arr[j];
                    
//                     // Break from the loop
//                     break;
//                 }    
//             }
//         }
        
//         // Return the answer
//         return ans;
//     }
// }

// // Creating an instance of Solution class
// let sol = new Solution();

// let n = 4;
// let arr = [1, 3, 2, 4];

// /* Function call to find the next greater element
// for each element in the array */
// let ans = sol.nextLargerElement(arr);

// console.log("The next greater elements are: " + ans.join(" "));


// optimal 

class Solution {

    /* Function to find the next greater 
    element for each element in the array */
    nextLargerElement(arr) {
        
        let n = arr.length; // size of array
        
        // To store the next greater elements
        let ans = new Array(n).fill(-1);
        
        // Stack to get elements in LIFO fashion
        let st = [];
        
        // Start traversing from the back
        for(let i = n - 1; i >= 0; i--) {
            
            // Get the current element
            let currEle = arr[i];
            
            /* Pop the elements in the stack until 
            the stack is not empty and the top 
            element is not the greater element */
            while(st.length > 0 && 
                  st[st.length - 1] <= currEle) {
                st.pop();
            }
            
            /* If the greater element is not 
            found, stack will be empty */
            if(st.length === 0) 
                ans[i] = -1;
            else 
                // Else store the answer
                ans[i] = st[st.length - 1];
            
            /* Push the current element in the stack 
            maintaining the decreasing order */
            st.push(currEle);
        }
        
        // Return the result
        return ans;
    }
}

// Creating an instance of Solution class
let sol = new Solution();

let n = 4;
let arr = [1, 3, 2, 4];

/* Function call to find the next greater 
element for each element in the array */
let ans = sol.nextLargerElement(arr);

console.log("The next greater elements are: " + ans.join(" "));

