// Insertion before the value X in LL

// Given the head of a singly linked list and two integers X and val, insert a node with 
// value val before the node with value X in the linked list and return the head of the modified list.

// Input: head -> 1 -> 2 -> 3, X = 2, val = 5
// Output: head -> 1 -> 5 -> 2 -> 3
// Explanation: The node with value 5 was added before the node with value 2

// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Solution class
class Solution {
    // Function to insert a new node before the given node
    insertBeforeX(head, X, val) {
        if (head === null) {
            return null;
        }

        /* Insert at the beginning if the
        value matches the head's data */
        if (head.val === X) {
            return new ListNode(val, head);
        }

        let temp = head;
        while (temp.next !== null) {
            /* Insert at the current position if the 
            next node has the desired value */
            if (temp.next.val === X) {
                let newNode = new ListNode(val, temp.next);
                temp.next = newNode;
                break;
            }
            temp = temp.next;
        }
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
let arr = [1, 2, 4, 5];
let X = 4, val = 3;
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);

// Print the original list
console.log("Original List: ");
printLL(head);

// Create a Solution object
let sol = new Solution();
head = sol.insertBeforeX(head, X, val);

// Print the modified linked list
console.log("List after inserting a new node before the given node: ");
printLL(head);