// Clone a LL with random and next pointer
// Given the head of a special linked list of n nodes where each node contains an additional pointer called 'random' 
// which can point to any node in the list or null.

// Construct a deep copy of the linked list where,
// n new nodes are created with corresponding values as original linked list.
// The random pointers point to the corresponding new nodes as per their arrangement in the original list.
// Return the head of the newly constructed linked list.

// Note: For custom input, a n x 2 matrix is taken with each row having 2 values:[ val, random_index] where,

// val: an integer representing ListNode.val
// random_index: index of the node (0 - n-1) that the random pointer points to, otherwise -1.

// Examples:
// Input: [[1, -1], [2, 0], [3, 4], [4, 1], [5, 2]]
// Output: 1 2 3 4 5, true
// Explanation: All the nodes in the new list have same corresponding values as original nodes.
// All the random pointers point to their corresponding nodes in the new list.
// 'true' represents that the nodes and references were created new.


// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

class Solution {
    // Function to clone linked list with random pointers
    copyRandomList(head) {
        // If the head is null, return null
        if (!head) return null;

        // Create a Map to map original nodes to their corresponding copied nodes
        let mpp = new Map();
        let temp = head;

        // Create copies of each node
        while (temp !== null) {
            // Create new node with same value as original
            let newNode = new ListNode(temp.val);
            // Map to original node
            mpp.set(temp, newNode);
            // Move to next node
            temp = temp.next;
        }

        // Reset temp
        temp = head;

        // Connect the next and random pointers of the copied nodes using the map
        while (temp !== null) {
            // Get copied node from the map
            let copyNode = mpp.get(temp);
            // Set next pointer of copied node to the copied node of the next original node
            copyNode.next = mpp.get(temp.next) || null;
            // Set the random pointer of the copied node to the copied node of the random original node
            copyNode.random = mpp.get(temp.random) || null;
            temp = temp.next;
        }

        // Return the head
        return mpp.get(head);
    }
}

// Function to print the linked list
function printClonedLinkedList(head) {
    while (head !== null) {
        // Print the data of the current node
        process.stdout.write(`Data: ${head.val}`);
        // Print the data of the random pointer, if it exists
        if (head.random !== null) {
            process.stdout.write(`, Random: ${head.random.val}`);
        } else {
            process.stdout.write(", Random: null");
        }
        console.log();
        // Move to the next node
        head = head.next;
    }
}

// Main function
// Example linked list: 7 -> 14 -> 21 -> 28
let head = new ListNode(7);
head.next = new ListNode(14);
head.next.next = new ListNode(21);
head.next.next.next = new ListNode(28);

// Assigning random pointers
head.random = head.next.next; // 7 -> 21
head.next.random = head; // 14 -> 7
head.next.next.random = head.next.next.next; // 21 -> 28
head.next.next.next.random = head.next; // 28 -> 14

// Print the original linked list
console.log("Original Linked List with Random Pointers:");
printClonedLinkedList(head);

// Clone the linked list
let solution = new Solution();
let clonedList = solution.copyRandomList(head);

// Print the cloned linked list
console.log("\nCloned Linked List with Random Pointers:");
printClonedLinkedList(clonedList);
