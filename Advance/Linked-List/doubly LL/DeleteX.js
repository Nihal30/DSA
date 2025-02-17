// Removing given node in DLL

// Given a node's reference within a doubly linked list, remove that node from the linked list while preserving the list's integrity.
// You will only be given the node's reference, not the head of the list. 
// It is guaranteed that the given node will not be the head of the list.

// Definition of doubly linked list
class ListNode {
    constructor(data1 = 0, next1 = null, prev1 = null) {
        this.val = data1;
        this.next = next1;
        this.prev = prev1;
    }
}

// Solution class
class Solution {
    /* Function to delete the given node 
    from doubly linked list */
    deleteGivenNode(node) {
        let prev = node.prev;
        let front = node.next;

        // Edge case if the given node is the tail node
        if (front === null) {
            prev.next = null;
            node.prev = null;
            return;
        }

        // Disconnect node
        prev.next = front;
        front.prev = prev;

        // Set node's pointers to null
        node.next = null;
        node.prev = null;
    }
}

// Helper Function to convert an array to a doubly linked list
function arrayToLinkedList(nums) {
    // If array is empty, return null
    if (nums.length === 0) return null;

    // Create head node with first element of the array
    let head = new ListNode(nums[0]);
    // Initialize 'prev' to the head node
    let prev = head;

    for (let i = 1; i < nums.length; i++) {
        // Create a new node
        let temp = new ListNode(nums[i], null, prev);
        // Update 'next' pointer
        prev.next = temp;
        // Move 'prev' to newly created node
        prev = temp;
    }

    // Return head
    return head;
}

// Helper Function to print the linked list
function printLL(head) {
    while (head !== null) {
        process.stdout.write(head.val + " ");
        head = head.next;
    }
    console.log();
}

const main = () => {
    const nums = [1, 2, 3, 4, 5];

    // Creating the doubly linked list from given array
    let head = arrayToLinkedList(nums);
    // Node to be deleted
    let node = head.next.next;

    // Print the Original list
    console.log("Original List: ");
    printLL(head);

    // Create an instance of Solution class
    let sol = new Solution();

    /* Function call to delete the given
    node from the doubly linked list */
    sol.deleteGivenNode(node);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();

