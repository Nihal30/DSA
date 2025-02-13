// Deletion of the head of LL
// Given the head of a singly linked list, delete the head of the linked list and return the head of the modified list.
// The head is the first node of the linked list.


// Input: head -> 1 -> 2 -> 3
// Output: head -> 2 -> 3
// Explanation: The first node was removed.

// Node structure
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to delete the head node of the linked list
    deleteHead(head) {
        // If list is empty, nothing to delete
        if (head === null) 
            return null;

        // Set temporary pointer
        let temp = head;

        // Update head to the next node 
        head = head.next;

        // Delete original head    
        temp = null;

        // Return new head          
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
    process.stdout.write("\n");
}

// Function to insert a new node at the beginning of the linked list
function insertAtHead(head, data) {
    let newNode = new ListNode(data);
    newNode.next = head;
    head = newNode;
    return head;
}

// Main function
function main() {
    // Create a linked list
    let head = null;
    head = insertAtHead(head, 3);
    head = insertAtHead(head, 2);
    head = insertAtHead(head, 1);

    process.stdout.write("Original list: ");
    printList(head);
    
    // Creating an instance of Solution Class
    let sol = new Solution();
    
    // Function call to delete the head node
    head = sol.deleteHead(head);

    process.stdout.write("List after deleting head: ");
    printList(head);
}

// Execute the main function
main();