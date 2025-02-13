// Delete the element with value X
// Given the head of a singly linked list and an integer X, delete the node with value X and return the head of the modified list.

// Input: head -> 3 -> 4 -> 5, X = 5
// Output: head -> 3 -> 4
// Explanation: The node with value 5 was removed.

// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // To delete a node with a specific value in a linked list
    deleteNodeWithValueX(head, X) {
        // Check if list is empty
        if (head === null)
            return head;

        // If first node has target value, delete
        if (head.val === X) {
            head = head.next;
            return head;
        }

        let temp = head;
        let prev = null;

        /* Traverse the list to find 
        the node with the target value */
        while (temp !== null) {
            if (temp.val === X) {
                // Adjust the pointers
                prev.next = temp.next;
                return head;
            }
            prev = temp;
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
let arr = [0, 1, 2];
let X = 1;
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);

// Print the original list
console.log("Original List: ");
printLL(head);

// Create a Solution object
let sol = new Solution();
head = sol.deleteNodeWithValueX(head, X);

// Print the modified linked list
console.log("List after deleting the given value: ");
printLL(head);