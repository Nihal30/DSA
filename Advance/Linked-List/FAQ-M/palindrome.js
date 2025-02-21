// Check if LL is palindrome or not

// Given the head of a singly linked list representing a positive integer number. 
// Each node of the linked list represents a digit of the number, with the 1st node containing the 
// leftmost digit of the number and so on. Check whether the linked list values form a palindrome or not.
//  Return true if it forms a palindrome, otherwise, return false.

// A palindrome is a sequence that reads the same forward and backwards.

// Input: head -> 3 -> 7 -> 5 -> 7 -> 3
// Output: true
// Explanation: 37573 is a palindrome.

// brute
// Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    isPalindrome(head) {
        /*Create an empty stack 
        to store values*/
        const stack = [];
        
        /*Initialize temporary 
        pointer to the head 
        of the linked list*/
        let temp = head;
        
       /* Traverse the linked list 
       and push values onto the stack*/
        while (temp !== null) {
           /* Push the data from the 
           current node onto the stack*/
            stack.push(temp.val);
            
            // Move to the next node
            temp = temp.next;
        }
        
        /*Reset temporary 
        pointer back to the 
        head of the linked list*/
        temp = head;
        
        /*Compare values by popping 
        from the stack and checking 
        against linked list nodes*/
        while (temp !== null) {
            if (temp.val !== stack.pop()) {
                /*If values don't match, 
                it's not a palindrome*/
                return false;
            }
            
            /*Move to the next node 
            in the linked list*/
            temp = temp.next;
        }
        
        /*If all values match,
         it's a palindrome*/
        return true;
    }
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.val + " ");
        temp = temp.next;
    }
    console.log();
}

// Main function to test the code
(function main() {
    // Create a linked list with values 1, 5, 2, 5, and 1 (15251, a palindrome)
    let head = new ListNode(1);
    head.next = new ListNode(5);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(5);
    head.next.next.next.next = new ListNode(1);
    
    // Print the original linked list
    process.stdout.write("Original Linked List: ");
    printLinkedList(head);
    
    // Check if the linked list is a palindrome
    const solution = new Solution();
    if (solution.isPalindrome(head)) {
        console.log("The linked list is a palindrome.");
    } else {
        console.log("The linked list is not a palindrome.");
    }
})();
