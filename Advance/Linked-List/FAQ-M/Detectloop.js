// Detect a loop in LL

// Given the head of a singly linked list. Return true if a loop exists in the linked list or return false.
// A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index(0-based) of the node from where the loop starts. Note that pos is not passed as 
// a parameter.

// Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1
// Output: true
// Explanation: The tail of the linked list connects to the node at 1st index.

// brute
//Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution {
    // Function to detect a loop in the linked list
    hasCycle(head) {
        // Initialize a pointer 'temp'
        // At the head of the linked list
        let temp = head;  

        // Create a set to keep track of
        // Encountered nodes
        let nodeSet = new Set();  

        // Traverse the linked list
        while (temp !== null) {
            // If the node is already in the
            // Set, there is a loop
            if (nodeSet.has(temp)) {
                return true;
            }
            // Store the current node
            // In the set
            nodeSet.add(temp);
            
            // Move to the next node
            temp = temp.next;  
        }

        // If the list is successfully traversed 
        // Without a loop, return false
        return false;
    }
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    // Traverse the linked list and print each node's value
    while (temp !== null) {
        process.stdout.write(temp.val + " ");
        temp = temp.next;
    }
    console.log();
}

// Main function
function main() {
    // Create a sample linked list
    // With a loop for testing
    
    let head = new ListNode(1);
    let second = new ListNode(2);
    let third = new ListNode(3);
    let fourth = new ListNode(4);
    let fifth = new ListNode(5);

    head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = fifth;
    // Create a loop
    fifth.next = third; 

    let sol = new Solution();
    // Check if there is a loop 
    // In the linked list
    if (sol.hasCycle(head)) {
        console.log("Loop detected in the linked list.");
    } else {
        console.log("No loop detected in the linked list.");
    }
}

// Call the main function to start the program
main();
