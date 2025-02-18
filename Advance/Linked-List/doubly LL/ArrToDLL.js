// Convert Array to DLL

// Given an array nums, convert it into a doubly linked list and return the head of the list.

// Input: nums = [1, 2, 3, 4]
// Output: head -> 1 <-> 2 <-> 3 <-> 4

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
    // Function to convert an array to a doubly linked list
    arrayToLinkedList(nums) {
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
}

// Helper function to print the linked list
function printLL(head) {
    while (head !== null) {
        process.stdout.write(head.val + " ");
        head = head.next;
    }
    console.log();
}

const main = () => {
    let nums = [1, 2, 3, 4, 5];

    // Create an instance of Solution class
    let sol = new Solution();

    // Function call to convert an array to a doubly linked list
    let head = sol.arrayToLinkedList(nums);

    // Print the doubly linked list
    console.log("The doubly linked list is: ");
    printLL(head);
}

main();