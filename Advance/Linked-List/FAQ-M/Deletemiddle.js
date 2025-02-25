// // Delete the middle node in LL

// // Given the head of a non-empty singly linked list containing integers, delete the middle node of the linked list.
// //  Return the head of the modified linked list.

// // The middle node of a linked list of size n is the (⌊n / 2⌋ + 1)th node from the start using 1-based indexing, 
// // where ⌊x⌋ denotes the largest integer less than or equal to x.

// // Input: head -> 1 -> 2 -> 3 -> 4 -> 5
// // Output: head -> 1 -> 2 -> 4 -> 5
// // Explanation: n = 5.
// // ⌊n / 2⌋ + 1 = 3, therefore middle node has index 3 and so the node with value 3 was deleted.

// // brute

// // Definition of singly linked list:
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     // Function to delete middle node of linked list
//     deleteMiddle(head) {
//         /* Edge case: if the list is empty 
//          * or has only one node, return null */
//         if (head === null || head.next === null) {
//             return null;
//         }

//         // Temporary node to traverse
//         let temp = head;
        
//         // Variable to store number of nodes
//         let n = 0;
        
//         /* Loop to count the number of nodes 
//         in the linked list */
//         while (temp !== null) {
//             n++;
//             temp = temp.next;
//         }
        
//         // Index of the middle node
//         const middleIndex = Math.floor(n / 2);
        
//         // Reset temporary node 
//         // to beginning of linked list
//         temp = head;
        
//         /* Loop to find the node 
//         just before the middle node */
//         for (let i = 1; i < middleIndex; i++) {
//             temp = temp.next;
//         }
        
//         // If the middle node is found
//         if (temp.next !== null) {
//             // Create pointer to the middle node
//             const middle = temp.next;
            
//             // Adjust pointers to skip middle node
//             temp.next = temp.next.next;
            
//         }
        
//         // Return the head of the modified linked list
//         return head;
//     }
// }

// // Function to print the linked list
// function printLL(head) {
//     let temp = head;
//     while (temp !== null) {
//         process.stdout.write(temp.val + " ");
//         temp = temp.next;
//     }
//     console.log();
// }

// // Creating a sample linked list: 
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// // Display the original linked list
// process.stdout.write("Original Linked List: ");
// printLL(head);

// // Deleting the middle node
// const solution = new Solution();
// head = solution.deleteMiddle(head);

// // Displaying the updated linked list
// process.stdout.write("Updated Linked List: ");
// printLL(head);

// optimal
// Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to delete the middle node of a linked list
    deleteMiddle(head) {
        /* If the list is empty or has only one node,
         * return null as there is no middle node to delete */
        if (head === null || head.next === null) {
            return null;
        }

        // Initialize slow and fast pointers
        let slow = head;
        let fast = head.next.next;

        // Move 'fast' pointer twice as fast as 'slow'
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Delete the middle node by skipping it
        slow.next = slow.next.next;
        return head;
    }
}

// Function to print the linked list
function printLL(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.val + " ");
        temp = temp.next;
    }
    console.log();
}

// Creating a sample linked list: 
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Display the original linked list
process.stdout.write("Original Linked List: ");
printLL(head);

// Deleting the middle node
const solution = new Solution();
head = solution.deleteMiddle(head);

// Displaying the updated linked list
process.stdout.write("Updated Linked List: ");
printLL(head);

