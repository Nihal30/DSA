// // Find the starting point in LL

// // Given the head of a singly linked list, the task is to find the starting point of a loop in the linked list if it exists.
// // Return the starting node if a loop exists; otherwise, return null.

// // A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer.
// //  Internally, pos denotes the index (0-based) of the node from where the loop starts.

// // Note that pos is not passed as a parameter.
// // Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1
// // Output(value of the returned node is displayed): 2
// // Expla﻿nation: The tail of the linked list connects to the node at 1st index.
// /*Definition of singly linked list:
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// */

// // brute

// class Solution {
//     findStartingPoint(head) {
//         // Use temp to traverse the linked list
//         let temp = head;

//         // Map to store all visited nodes
//         const visited = new Map();

//         // Traverse the list using temp
//         while (temp !== null) {
//             // Check if temp has been encountered again
//             if (visited.has(temp)) {
//                 // A loop is detected hence return temp
//                 return temp;
//             }
//             // Store temp as visited
//             visited.set(temp, true);
//             // Move to the next node
//             temp = temp.next;
//         }

//         // If no loop is detected, return null
//         return null;
//     }
// }

// // Create a sample linked list with a loop
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// node1.next = node2;
// let node3 = new ListNode(3);
// node2.next = node3;
// let node4 = new ListNode(4);
// node3.next = node4;
// let node5 = new ListNode(5);
// node4.next = node5;

// // Make a loop from node5 to node2
// node5.next = node2;

// // Set the head of the linked list
// let head = node1;

// // Create an instance of the Solution class
// const solution = new Solution();

// // Detect the loop in the linked list
// let loopStartNode = solution.findStartingPoint(head);

// if (loopStartNode) {
//     console.log("Loop detected. Starting node of the loop is:", loopStartNode.val);
// } else {
//     console.log("No loop detected in the linked list.");
// }

//Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    findStartingPoint(head) {
        // Initialize a slow and fast 
        // pointers to the head of the list
        let slow = head;
        let fast = head;

        // Phase 1: Detect the loop
        while (fast !== null && fast.next !== null) {
            
            // Move slow one step
            slow = slow.next;
            
            // Move fast two steps
            fast = fast.next.next;

            // If slow and fast meet,
            // a loop is detected
            if (slow === fast) {
                
                // Reset the slow pointer
                // to the head of the list
                slow = head;

                // Phase 2: Find the first node of the loop
                while (slow !== fast) {
                    
                    // Move slow and fast one step
                    // at a time
                    slow = slow.next;
                    fast = fast.next;

                    // When slow and fast meet again,
                    // it's the first node of the loop
                }
                
                // Return the first node of the loop
                return slow;
            }
        }
        
        // If no loop is found, return null
        return null;
    }
}

// Function to create a sample linked list with a loop and detect the loop
function main() {
    // Create a sample linked list with a loop
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    node1.next = node2;
    const node3 = new ListNode(3);
    node2.next = node3;
    const node4 = new ListNode(4);
    node3.next = node4;
    const node5 = new ListNode(5);
    node4.next = node5;

    // Make a loop from node5 to node2
    node5.next = node2;

    // Set the head of the linked list
    const head = node1;

    // Detect the loop in the linked list
    const sol = new Solution();
    const loopStartNode = sol.findStartingPoint(head);

    if (loopStartNode) {
        console.log("Loop detected. Starting node of the loop is: " + loopStartNode.val);
    } else {
        console.log("No loop detected in the linked list.");
    }
}

main();
