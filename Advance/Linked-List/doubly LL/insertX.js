// Insert before given node in DLL

// Given a node's reference within a doubly linked list and an integer X, insert a node with value 
// X before the given node in the linked list while preserving the list's integrity.

// You will only be given the node's reference, not the head of the list. 
// It is guaranteed that the given node will not be the head of the list.

// Input: head -> 1 <-> 2 <-> 6, node = 2, X = 7
// Output: head -> 1 <-> 7 <-> 2 <-> 6
// Explanation: Note that the head was not given to the function.

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
    /* Function to insert a new node before
    given node in a doubly linked list */
    insertBeforeGivenNode(node, X) {
        // Get node before the given node
        let prev = node.prev;

        // Create new node
        let newNode = new ListNode(X, node, prev);

        // Connect newNode
        prev.next = newNode;
        node.prev = newNode;

        // void function to just update
        return;
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
    const nums = [1, 2, 4, 5];

    // Creating the doubly linked list from given array
    let head = arrayToLinkedList(nums);

    // Node before which the new node must be inserted
    let node = head.next.next;

    // Print the Original list
    console.log("Original List: ");
    printLL(head);

    // Create an instance of Solution class
    let sol = new Solution();

    /* Function call to insert a new node before
    given node in a doubly linked list */
    sol.insertBeforeGivenNode(node, 3);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();

// Complexity Analysis:
// Time Complexity: O(1) because only a constant number of pointer updates 
// are being performed regardless of the size of the Doubly Linked List.

// Space Complexity: O(1) as no extra space is used.