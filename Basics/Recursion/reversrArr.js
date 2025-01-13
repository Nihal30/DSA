
// Given an input string as an array of characters, write a function that reverses the string.
// Input : s = ["h", "e", "l", "l", "o"]
// Output : ["o", "l", "l", "e", "h"]
// Explanation : The given string is s = "hello" and after reversing it becomes s = "olleh".

class Solution {
    // Function to reverse the given string
    reverseString(s) {
        // Arrow function to reverse the string recursively
        const reverse = (s, left, right) => {
            // Base case
            if (left >= right) {
                return;
            }
            
            // Swap characters at left and right positions
            [s[left], s[right]] = [s[right], s[left]];
            
            // Recursive call with updated indices
            reverse(s, left + 1, right - 1);
        };

        reverse(s, 0, s.length - 1);
        return s;
    }
}

// Main function to test the solution
const solution = new Solution();
const s = ['h', 'e', 'l', 'l', 'o'];

// Function call to reverse the given string
const reversed_s = solution.reverseString(s);
console.log(reversed_s);