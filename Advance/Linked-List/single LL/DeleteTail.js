// Deletion of the tail of LL
// Given the head of a singly linked list, delete the tail of the linked list and return the head of the modified list.
// The tail is the last node of the linked list.

// Input: head -> 1 -> 2 -> 3
// Output: head -> 1 -> 2
// Explanation: The last node was removed.
// Node structure
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to delete the tail node of linked list 
    deleteTail(head) {
        
        // If the list is empty or has only one node
        if (head === null || head.next === null)
            return null; // Return null
        
        // Temporary pointer
        let temp = head;
        
        /*Traverse to the second last
        node in the list*/
        while (temp.next.next !== null) {
            temp = temp.next;
        }
        
        // Delete the last node
        temp.next = null;
        
        // Return head of modified list
        return head;
    }
}

// Function to print the linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

// Function to insert a new node at the beginning of the linked list
function insertAtHead(head, data) {
    let newNode = new ListNode(data);
    newNode.next = head;
    return newNode;
}

// Main function
let head = null;
head = insertAtHead(head, 3);
head = insertAtHead(head, 2);
head = insertAtHead(head, 1);

console.log("Original list: ");
printList(head);

// Creating an instance of Solution class
let sol = new Solution();

// Function call to delete the tail node
head = sol.deleteTail(head);

console.log("List after deleting tail: ");
printList(head);