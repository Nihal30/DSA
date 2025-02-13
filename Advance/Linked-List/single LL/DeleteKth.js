// Deletion of the Kth element of LL
// Given the head of a singly linked list and an integer k,
//  delete the kth node of the linked list and return the head of the modified list.

// Input: head -> 3 -> 4 -> 5, k = 2
// Output: head -> 3 -> 5
// Explanation: The 2nd node with value 4 was removed.

// Node structure
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to delete the k-th node of a linked list
    deleteKthNode(head, k) {
        // If the list is empty, return null
        if (head === null)
            return null;

        // If k is 1, delete the head node
        if (k === 1) {
            head = head.next;
            return head;
        }

        // Initialize a temporary pointer
        let temp = head;

        // Traverse to the (k-1)th node
        for (let i = 0; temp !== null && i < k - 2; i++) {
            temp = temp.next;
        }

        /* If k is greater than the number of nodes, 
        return the unchanged list */
        if (temp === null || temp.next === null)
            return head;

        // Delete the k-th node
        temp.next = temp.next.next;

        // Return head
        return head;
    }
}

// Function to print the linked list
function printLL(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

// Main function
let arr = [12, 5, 8, 7];

// Create a linked list with the values from the array
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);
head.next.next.next = new ListNode(arr[3]);

// Print the original linked list
console.log("Original list: ");
printLL(head);

// Creating an instance of Solution class
let sol = new Solution();

// Call the deleteKthNode function to delete the k-th node
let k = 2;
head = sol.deleteKthNode(head, k);

// Print the linked list after deletion
console.log("List after deleting the kth node: ");
printLL(head);