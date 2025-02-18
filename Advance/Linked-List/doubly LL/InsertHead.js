// Insert node before head in DLLInsert node before head in DLL

// Given the head of a doubly linked list and an integer X, insert a node with 
// value X before the head of the linked list and return the head of the modified list.

// Input: head -> 1 <-> 2 <-> 3, X = 3
// Output: head -> 3 <-> 1 <-> 2 <-> 3
// Explanation: 3 was added before the 1st node. Note that the head's value is changed.

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
    /* Function to insert a node before 
    head in a doubly linked list */
    insertBeforeHead(head, X) {
        // Create new node which will be the new head
        let newHead = new ListNode(X, head, null);

        // Point the current head back to new one
        head.prev = newHead;

        return newHead;  // Return new head
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
    const nums = [2, 3, 4, 5];

    // Creating the doubly linked list from given array
    let head = arrayToLinkedList(nums);

    // Print the Original list
    console.log("Original List: ");
    printLL(head);

    // Create an instance of Solution class
    let sol = new Solution();

    /* Function call to insert a node before 
    head in a doubly linked list */
    head = sol.insertBeforeHead(head, 1);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();