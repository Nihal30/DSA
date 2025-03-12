// Sort LL

// Given the head of a singly linked list. 
// Sort the values of the linked list in non-decreasing order and return the head of the modified linked list.

// Examples:
// Input: head -> 5 -> 6 -> 1 -> 2 -> 1
// Output: head -> 1 -> 1 -> 2 -> 5 -> 6
// Explanation: 1 <= 1 <= 2 <= 5 <= 6

// Brute 

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to sort Linked List
    sortList(head) {
        // Array to store node values
        let arr = [];

        /*Temporary pointer to
        traverse the linked list*/
        let temp = head;

        /* Traverse the linked list and
        store node values in the array*/
        while (temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }

        // Sort array containing node values
        arr.sort((a, b) => a - b);

        // Reassign sorted values to linked list nodes
        temp = head;
        for (let i = 0; i < arr.length; i++) {
            // Update the node's data
            temp.val = arr[i];
            // Move to the next node
            temp = temp.next;
        }

        // Return the head
        return head;
    }
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        // Print the data of the current node
        process.stdout.write(temp.val + " ");
        // Move to the next node
        temp = temp.next;
    }
    console.log();
}

// Linked List: 3 2 5 4 1
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(5);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(1);

console.log("Original Linked List: ");
printLinkedList(head);

let solution = new Solution();
// Sort the linked list
head = solution.sortList(head);

console.log("Sorted Linked List: ");
printLinkedList(head);
                