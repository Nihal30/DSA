// Delete Tail of DLL

// Given the head of a doubly linked list, remove the node at the tail of the linked list and return the head of the modified list.
// The tail is the last node of the linked list.

// Input: head -> 1 <-> 2 <-> 3
// Output: head -> 1 <-> 2
// Explanation: The node with value 3 was removed.

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
    // Function to delete the tail of a doubly linked list
    deleteTail(head) {
        if (head === null || head.next === null) {
            return null;  // Return null if list is empty or has one node
        }
        
        // Navigate to the tail of the linked list
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        
        // Update the pointers
        let newTail = tail.prev;
        newTail.next = null;
        tail.prev = null;

        // Return head of modified list
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

    // Function call to delete the tail of the doubly linked list
    head = sol.deleteTail(head);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();