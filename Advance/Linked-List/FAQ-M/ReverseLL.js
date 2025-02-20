// Reverse a LL
// Given the head of a singly linked list. Reverse the given linked list and return the head of the modified list.


// Input: head -> 1 -> 2 -> 3 -> 4 -> 5
// Output: head -> 5 -> 4 -> 3 -> 2 -> 1
// Explanation: All the links are reversed and the head now points to the last node of the original list.

// brute
// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /*Function to reverse a linked list
    Using the 3-pointer approach*/
    reverseList(head) {
        /*Initialize 'temp' at
        head of linked list*/
        let temp = head;
        
        /*Initialize pointer 'prev' to NULL,
        representing the previous node*/
        let prev = null;
        
        /*Traverse the list, continue till
        'temp' reaches the end (NULL)*/
        while (temp !== null) {
            /* Store the next node in
            'front' to preserve the reference*/
            let front = temp.next;
            
            /*Reverse the direction of the
            current node's 'next' pointer
            to point to 'prev'*/
            temp.next = prev;
            
            /*Move 'prev' to the current
            node for the next iteration*/
            prev = temp;
            
            /*Move 'temp' to the 'front' node
            advancing the traversal*/
            temp = front;
        }
        
        /*Return the new head of
        the reversed linked list*/
        return prev;
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

// Create a linked list with
// Values 1, 3, 2, and 4
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(4);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

// Solution instance
const solution = new Solution();
// Reverse the linked list
head = solution.reverseList(head);

// Print the reversed linked list
console.log("Reversed Linked List: ");
printLinkedList(head);
