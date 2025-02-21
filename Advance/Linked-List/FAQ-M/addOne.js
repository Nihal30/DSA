// Add one to a number represented by LL

// Given the head of a singly linked list representing a positive integer number. 
// Each node of the linked list represents a digit of the number, with the 1st node 
// containing the leftmost digit of the number and so on. The task is to add one to the value 
// represented by the linked list and return the head of a linked list containing the final value.

// The number will contain no leading zeroes except when the value represented is zero itself.


// Examples:
// Input: head -> 1 -> 2 -> 3
// Output: head -> 1 -> 2 -> 4
// Explanation: The number represented by the linked list = 123.
// 123 + 1 = 124.

// brute
// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to reverse the linked list
    reverseList(head) {
        // Initialize pointers
        let prev = null;
        let current = head;
        let next = null;
        
        while (current !== null) {
            // Store next node
            next = current.next;
            // Reverse the link
            current.next = prev;
            // Move prev to current
            prev = current;
            // Move current to next
            current = next;
        }
        
        return prev;
    }
    
    // Function to add one to Linked List
    addOne(head) {
        // Reverse the linked list
        head = this.reverseList(head);
        
        // Create a dummy node
        let current = head;
        // Initialize carry with 1
        let carry = 1;  
        
        while (current !== null) {
            // Sum the current node's value and the carry
            let sum = current.val + carry;
            // Update carry
            carry = Math.floor(sum / 10);
            // Update the node's value
            current.val = sum % 10;
            
            // If no carry left, break the loop
            if (carry === 0) {
                break;
            }
            
            // If we've reached the end of the list and there's still a carry,
            // add a new node with the carry value
            if (current.next === null && carry !== 0) {
                current.next = new ListNode(carry);
                break;
            }
            
            // Move to the next node
            current = current.next;
        }
        
        // Reverse the list 
        head = this.reverseList(head);
        
        // New head
        return head;
    }
}

// Function to print the linked list
function printList(head) {
    while (head !== null) {
        process.stdout.write(head.val + " ");
        head = head.next;
    }
    console.log();
}

// Creation of Linked List
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);

// Solution instance
const solution = new Solution();
head1 = solution.addOne(head1);
console.log("Result after adding one: ");
printList(head1);

// Complexity Analysis
// Time Complexity: O(N) because we traverse the linked list three times,
//  each with a time complexity of O(N), resulting in O(3N), which simplifies to O(N) 
//  since constant factors are ignored in Big-O notation. Here, N is the number of nodes in the linked list.

// Space Complexity: O(1) because we use a constant amount of extra space for pointers and variables.
