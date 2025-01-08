// You are given a string s. Return true if the string is palindrome, otherwise false.
//  A string is called palindrome if it reads the same forward and backward.

class Solution {
    // Function to check if a given string is a palindrome
    palindromeCheck(s) {
        let left = 0;            
        let right = s.length - 1; 

        // Iterate while  start pointer is less than  end pointer
        while (left < right) {
            // If characters don't match, it's not a palindrome
            if (s[left] !== s[right]) {
                return false;
            }
            left++;   
            right--;  
        }
        return true;  
    }
}

// Main function to test the palindromeCheck method
function main() {
    const solution = new Solution();
    const str = "racecar";  

    if (solution.palindromeCheck(str)) {
        console.log(`${str} is a palindrome.`);
    } else {
        console.log(`${str} is not a palindrome.`);
    }
}

// Call the main function to demonstrate the functionality
main();
