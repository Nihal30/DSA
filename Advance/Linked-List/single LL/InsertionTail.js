// Insertion at the tail of LL
// Given the head of a singly linked list and an integer X, insert a 
// node with value X at the tail of the linked list and return the head of the modified list.

// The tail is the last node of the linked list.

// Input: head -> 1 -> 2 -> 3, X = 7
// Output: head -> 1 -> 2 -> 3 -> 7
// Explanation: 7 was added as the last node.

// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Solution class
class Solution {
    // Function to insert a new node at the tail of the linked list
    insertAtTail(head, X) {
        if (head === null)
            return new ListNode(X);

        let temp = head;
        // Traversing until the last node
        while (temp.next !== null) {
            temp = temp.next;
        }

        let newNode = new ListNode(X);
        temp.next = newNode;

        return head;
    }
}

// Helper Function to print the linked list
function printLL(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

// Main function
let arr = [10, 20, 30];
let val = 40;
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);

// Print the original list
console.log("Original List: ");
printLL(head);


// Create a Solution object
let sol = new Solution();
head = sol.insertAtTail(head, val);


// Print the modified linked list
console.log("List after inserting the given value at the tail:");
printLL(head);