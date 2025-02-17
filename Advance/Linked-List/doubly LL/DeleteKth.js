// Delete Kth Element of DLL

// Given the head of a doubly linked list and an integer k, remove the 
// node at the kth position of the linked list and return the head of the modified list.

// Input: head -> 2 <-> 5 <-> 7 <-> 9, k = 2
// Output: head -> 2 <-> 7 <-> 9
// Explanation: The node with value 5 was removed.

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
    // Function to remove the Kth element
    deleteKthElement(head, k) {
        // If the list is empty, return null
        if (head === null) 
            return null;
    
        let count = 0;
        let kNode = head;

        // Traverse the list
        while (kNode !== null) {
            count++;
            if (count === k) break;
            kNode = kNode.next;
        }

        // If k is larger than the list size
        if (kNode === null) return head; 
        
        // Update the pointers
        let prev = kNode.prev;
        let front = kNode.next;

        // If node to be deleted is the only node in the list
        if (prev === null && front === null) {
            return null;
        }
        
        // If node to be deleted is head of the list
        else if (prev === null) {
            head = front;
            front.prev = null;
        }
        
        // If node to be deleted is tail of the list
        else if (front === null) {
            prev.next = null;
        }
        
        // If node to be deleted is in the middle of the list
        else {
            prev.next = front;
            front.prev = prev;
        }

        // Return modified list head
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
    const k = 2;

    // Creating the doubly linked list from given array
    let head = arrayToLinkedList(nums);

    // Print the Original list
    console.log("Original List: ");
    printLL(head);

    // Create an instance of Solution class
    let sol = new Solution();

    // Function call to delete the kth Node of the doubly linked list
    head = sol.deleteKthElement(head, k);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();

// Complexity Analysis:
// Time Complexity: O(k) because it only involves identifying the Kth node and updating its references to delete it.

// Space Complexity: O(1) as no extra space is used.