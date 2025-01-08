// Given a string, the task is to reverse it.
//  The string is represented by an array of characters s. Perform the reversal in place with O(1) extra memory.

// Input : s = ["h", "e" ,"l" ,"l" ,"o"]

// Output : ["o", "l", "l", "e", "h"]

// Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

// brute solution 

function reverseString(s){
   let reversed = []
   for (let i=s.length - 1; i>=0 ; i--){
    reversed.push(s[i])
   }

   for (let i =0;i<s.length;i++){
    s[i]= reversed[i]
   }

   return s
}

let s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s); 

// tc O(n)
// sc O(n)


// Optimal Solution

function reverseStringOptimal(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters
        [s[left], s[right]] = [s[right], s[left]];
        
        // Move pointers
        left++;
        right--;
    }

}