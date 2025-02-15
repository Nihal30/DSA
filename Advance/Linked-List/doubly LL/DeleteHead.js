// Delete head of DLL
// Given the head of a doubly linked list, remove the node at the head of the linked list and return the head of the modified list.
// The head is the first node of the linked list.

// Input: head -> 1 <-> 2 <-> 3
// Output: head -> 2 <-> 3
// Explanation: The node with value 1 was removed.

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
    // Function to delete the head of the doubly linked list
    deleteHead(head) {
        if (head === null || head.next === null)
            return null; // Return null if list is empty or has one node
        
        // Store current head as 'prev'
        let prev = head;
        // Move 'head' to next node
        head = head.next;

        // Set 'prev' pointer
        head.prev = null;

        // Set 'next' pointer
        prev.next = null;

        // Return new head
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
    const nums = [1, 2, 3, 4, 5];

    // Creating the doubly linked list from given array
    let head = arrayToLinkedList(nums);

    // Print the Original list
    console.log("Original List: ");
    printLL(head);

    // Create an instance of Solution class
    let sol = new Solution();

    // Function call to delete the head of the doubly linked list
    head = sol.deleteHead(head);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();

// Complexity Analysis:
// Time Complexity: O(1) because removing the head node from a doubly linked list is a 
// constant-time operation. It's independent of the list's size, as it involves updating references to the head and the new head.

// Space Complexity: O(1) as no extra space is used.