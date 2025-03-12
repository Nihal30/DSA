// Delete all occurrences of a key in DLL
// Given the head of a doubly linked list and an integer target. 
// Delete all nodes in the linked list with the value target and return the head of the modified linked list.


// Examples:
// Input: head -> 1 <-> 2 <-> 3 <-> 1 <-> 4, target = 1
// Output: head -> 2 <-> 3 <-> 4

// Explanation: All nodes with the value 1 were removed.

// Brute
// Definition of doubly linked list
class ListNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class Solution {
    // Function to delete all occurrences of a target value
    deleteAllOccurrences(head, target) {
        let temp = head;

        while (temp !== null) {
            if (temp.val === target) {
                // Update head if needed
                if (temp === head) {
                    head = temp.next;
                }

                let nextNode = temp.next;
                let prevNode = temp.prev;

                // Update previous node's next
                if (nextNode !== null) {
                    nextNode.prev = prevNode;
                }

                // Update next node's previous
                if (prevNode !== null) {
                    prevNode.next = nextNode;
                }

                // Move to the next node
                temp = nextNode;
            } else {
                temp = temp.next;
            }
        }

        return head;
    }
}

// Function to print doubly linked list
function printList(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.val + " ");
        temp = temp.next;
    }
    console.log();
}

// Helper function to create a new node
function newNode(data) {
    return new ListNode(data);
}

(function() {
    // Creating doubly linked list
    let head = newNode(1);
    head.next = newNode(2);
    head.next.prev = head;
    head.next.next = newNode(3);
    head.next.next.prev = head.next;
    head.next.next.next = newNode(2);
    head.next.next.next.prev = head.next.next;
    head.next.next.next.next = newNode(4);
    head.next.next.next.next.prev = head.next.next.next;
    head.next.next.next.next.next = newNode(2);
    head.next.next.next.next.next.prev = head.next.next.next.next;
    head.next.next.next.next.next.next = newNode(5);
    head.next.next.next.next.next.next.prev = head.next.next.next.next.next;

    // Print original list
    process.stdout.write("Original list: ");
    printList(head);

    // Delete all occurrences of 2
    let sol = new Solution();
    head = sol.deleteAllOccurrences(head, 2);

    // Print modified list
    process.stdout.write("Modified list: ");
    printList(head);
})();
