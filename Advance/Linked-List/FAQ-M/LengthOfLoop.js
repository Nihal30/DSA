// Length of loop in LL

// Given the head of a singly linked list, find the length of the loop in the linked list if it exists.
//  Return the length of the loop if it exists; otherwise, return 0.

// A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer.
//  Internally, pos is used to denote the index (0-based) of the node from where the loop starts.

// Note that pos is not passed as a parameter.

// Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1
// Output: 4
// Explanation: 2 -> 3 -> 4 -> 5 - >2, length of loop = 4.
// Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1
// Output: 4
// Explanation: 2 -> 3 -> 4 -> 5 - >2, length of loop = 4.

// brute
// Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to find length
    findLengthOfLoop(head) {
        // Map to store visited nodes and their timer values
        const visitedNodes = new Map();

        // Initialize pointer to traverse the linked list
        let temp = head;

        // Initialize timer 
        // to track visited nodes
        let timer = 0;

        // Traverse the linked list 
        // till temp reaches null
        while (temp !== null) {
            // If revisiting a node return 
            // difference of timer values
            if (visitedNodes.has(temp)) {
                // Calculate the length of the loop
                const loopLength = timer - visitedNodes.get(temp);

                // Return length of loop
                return loopLength;
            }
            /* Store the current node 
            and its timer value in 
            the Map */
            visitedNodes.set(temp, timer);

            // Move to the next node
            temp = temp.next;

            // Increment the timer
            timer++;
        }

        /** If traversal is completed 
         * and we reach the end 
         * of the list (null)
         * means there is no loop */
        return 0;
    }
}

// Sample linked list with a loop
const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);
const fifth = new ListNode(5);

// Create a loop from fifth to second
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = second;

const solution = new Solution();
const loopLength = solution.findLengthOfLoop(head);
if (loopLength > 0) {
    console.log("Length of the loop:", loopLength);
} else {
    console.log("No loop found in the linked list.");
}
