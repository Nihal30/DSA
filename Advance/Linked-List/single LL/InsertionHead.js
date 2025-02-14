// Insertion at the head of LL

// Given the head of a singly linked list and an integer X, insert a node with
//  value X at the head of the linked list and return the head of the modified list.

// The head is the first node of the linked list.

// Input: head -> 1 -> 2 -> 3, X = 7
// Output: head -> 7 -> 1 -> 2 -> 3
// Explanation: 7 was added as the 1st node.

// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Solution class
class Solution {
    // Function to insert at head
    insertAtHead(head, X) {
        // Creating a new node
        let newnode = new ListNode(X);
        
        /* Making next of newly created node to 
        point to the head of the LinkedList */
        newnode.next = head;
        
        // Making newly created node as head
        head = newnode;
        
        // Return the head of modified list
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
let arr = [20, 30, 40];
let X= 10;
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);

// Print the original list
console.log("Original List: ");
printLL(head);

// Create a Solution object
let sol = new Solution();
head = sol.insertAtHead(head, X);

// Print the modified linked list
console.log("List after inserting the given value at head: ");
printLL(head);

// Complexity Analysis:
// Time Complexity: O(1) for inserting the new node at the head of the linked list
// Space Complexity: O(1) no extra space used.