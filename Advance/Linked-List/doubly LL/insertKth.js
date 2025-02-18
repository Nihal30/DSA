// Insert node before (kth node) in DLL

// Given the head of a doubly linked list and two integers X and K, insert a new node with value X,
//  before the Kth node of the linked list and return the head of the modified linked list.

// Input: head -> 1 <-> 3 <-> 5, X = 7, K = 2
// Output: head -> 1 <-> 7 <-> 3 <-> 5
// Explanation: A node with value 7 was added before the 2nd node.

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
    /* Function to insert a node before the
    Kth node in a doubly linked list */
    insertBeforeKthPosition(head, X, K) {
        // If node has to be inserted before the head
        if (K === 1) {
            let newHead = new ListNode(X, head, null);
            head.prev = newHead;
            return newHead;
        }

        // Temporary pointer
        let temp = head;

        // Reach Kth node
        let count = 0;
        while (temp !== null) {
            count++;

            // If Kth node is reached, Break out of the loop
            if (count === K) break;

            // Otherwise Keep moving temp forward
            temp = temp.next;
        }

        // Track the node
        let prev = temp.prev;

        // Create new node with data as X
        let newNode = new ListNode(X, temp, prev);

        // Join new node
        prev.next = newNode;
        temp.prev = newNode;

        // Return head
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

    /* Function call to insert a node before the
    Kth node in a doubly linked list */
    head = sol.insertBeforeKthPosition(head, 4, 4);

    // Print the Modified list
    console.log("Modified list: ");
    printLL(head);
}

main();

// Complexity Analysis:
// Time Complexity: O(N), where N is the number of nodes in the Linked List. In the worst case,
//  it involves traversing N nodes in the Doubly Linked List to reach the last element. 
//  In the best case, when K is 0 (insertion at the head), the time complexity is O(1) as 
//  it involves a constant number of operations. In the average case, it's O(K).

// Space Complexity: O(1) as no extra space is used.