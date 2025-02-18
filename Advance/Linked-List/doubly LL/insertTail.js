// Insert node before tail in DLL

// Given the head of a doubly linked list and an integer X, insert a node with value X 
// before the tail of the linked list and return the head of the modified list.

// Input: head -> 1 <-> 2 <-> 4, X = 3
// Output: head -> 1 <-> 2 <-> 3 <-> 4
// Explanation: 3 was added before the last node.

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
    // Function to insert a node before tail of a doubly linked list
    insertBeforeTail(head, X) {
        // Edge case
        if (head.next === null) {
            // Create new node with data as X
            let newHead = new ListNode(X, head, null);
            head.prev = newHead;
            return newHead;
        }

        // Create pointer tail
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
        }

        // Keep track of node before tail using prev
        let prev = tail.prev;

        // Create new node with value X
        let newNode = new ListNode(X, tail, prev);

        // Join the new node
        prev.next = newNode;
        tail.prev = newNode;

        // Return updated linked list
        return head;
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
    const nums = [1, 2, 3, 5];

    // Creating the doubly linked list from given array
    let head = arrayToLinkedList(nums);

    // Print the Original list
    console.log("Original List: ");
    printLL(head);

    // Create an instance of Solution class
    let sol = new Solution();

    /* Function call to insert a node
    before tail of a doubly linked list */
    head = sol.insertBeforeTail(head, 4);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();

// Complexity Analysis:
// Time Complexity: O(N) where N is the length of the array. 
// We iterate through the input array exactly once and at each element perform constant time operations.

// Space Complexity: O(1) as no extra space is used.