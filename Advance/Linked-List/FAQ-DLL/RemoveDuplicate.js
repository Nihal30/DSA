// Remove duplicated from sorted DLL
// Given the head of a doubly linked list with its values sorted in non-decreasing order.
// Remove all duplicate occurrences of any value in the list so that only distinct values are present in the list.

// Return the head of the modified linked list.

// Examples:
// Input: head -> 1 <-> 1 <-> 3 <-> 3 <-> 4 <-> 5
// Output: head -> 1 <-> 3 <-> 4 <-> 5
// Explanation: head -> 1 <-> 1 <-> 3 <-> 3 <-> 4 <-> 5
// The underlined nodes were deleted to get the desired result.

// Definition of doubly linked list
class ListNode {
    constructor(val = 0, next = null, prev = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class Solution {
    // To remove duplicates from a sorted doubly linked list
    removeDuplicates(head) {
        let temp = head;
        
        // Traverse the list
        while (temp !== null && temp.next !== null) {
            let nextNode = temp.next;
            
            // Remove all duplicate nodes
            while (nextNode !== null && nextNode.val === temp.val) {
                // Store the duplicate node
                let duplicate = nextNode;
                // Move to the next node
                nextNode = nextNode.next;
                // Delete the duplicate node
                duplicate = null;
            }
            
            /* Link the current node 
               to the next non-duplicate node */
            temp.next = nextNode;
            /* Update previous pointer 
               of next non-duplicate node */
            if (nextNode !== null) {
                nextNode.prev = temp;
            }
            
            // Move to the next node
            temp = temp.next;
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
    // Creating a sorted doubly linked list:
    let head = newNode(1);
    head.next = newNode(2);
    head.next.prev = head;
    head.next.next = newNode(2);
    head.next.next.prev = head.next;
    head.next.next.next = newNode(3);
    head.next.next.next.prev = head.next.next;
    head.next.next.next.next = newNode(4);
    head.next.next.next.next.prev = head.next.next.next;
    head.next.next.next.next.next = newNode(4);
    head.next.next.next.next.next.prev = head.next.next.next.next;
    head.next.next.next.next.next.next = newNode(5);
    head.next.next.next.next.next.next.prev = head.next.next.next.next.next;

    // Print original list
    process.stdout.write("Original list: ");
    printList(head);

    // Remove duplicates
    let sol = new Solution();
    head = sol.removeDuplicates(head);

    // Print modified list
    process.stdout.write("Modified list: ");
    printList(head);
})();


// Complexity Analysis
// Time Complexity: O(n) and not O(n^2) because each node in the doubly linked list is visited exactly once. 
// The outer loop traverses each distinct node, and the inner loop skips over consecutive duplicates in a single pass,
//  ensuring a total linear traversal of the list. Thus the combined process does not create nested iterations and remains efficient.

// Space Complexity: O(1) no extra space is used.

