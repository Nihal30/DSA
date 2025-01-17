// Check if string is palindrome or not
// Given a string s, return true if the string is palindrome, otherwise false.
// A string is called palindrome if it reads the same forward and backward.

// Input : s = "hannah"
// Output : true
// Explanation : The string when reversed is --> "hannah", which is same as original string , so we return true.

class Solution {
    // Method to check if a string is a palindrome
    palindromeCheck(s) {
        return this.isPalindrome(s, 0, s.length - 1); // Start recursion with the whole string
    }

    // Helper method to perform the recursive check
    isPalindrome(s, left, right) {
        // Base Case: If the start index is greater than or equal to the end index, it's a palindrome
        if (left >= right) {
            return true;
        }
        // Check if characters at the current positions are the same
        if (s[left] !== s[right]) {
            return false; // Characters do not match, so it's not a palindrome
        }
        // Recur for the next set of characters
        return this.isPalindrome(s, left + 1, right - 1);
    }
}

// Main method to test the palindromeCheck function
function main() {
    const solution = new Solution();
    console.log(solution.palindromeCheck("hannah"));  // Output: true
    console.log(solution.palindromeCheck("aabbaaa"));  // Output: false
    console.log(solution.palindromeCheck("aba"));      // Output: true
}

main(); // Call the main method to run the tests
