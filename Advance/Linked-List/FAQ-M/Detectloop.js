// // Detect a loop in LL

// // Given the head of a singly linked list. Return true if a loop exists in the linked list or return false.
// // A loop exists in a linked list if some node in the list can be reached again by continuously following the next pointer.
// // Internally, pos is used to denote the index(0-based) of the node from where the loop starts. Note that pos is not passed as 
// // a parameter.

// // Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1
// // Output: true
// // Explanation: The tail of the linked list connects to the node at 1st index.

// // brute
// //Definition of singly linked list:
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }


// class Solution {
//     // Function to detect a loop in the linked list
//     hasCycle(head) {
//         // Initialize a pointer 'temp'
//         // At the head of the linked list
//         let temp = head;  

//         // Create a set to keep track of
//         // Encountered nodes
//         let nodeSet = new Set();  

//         // Traverse the linked list
//         while (temp !== null) {
//             // If the node is already in the
//             // Set, there is a loop
//             if (nodeSet.has(temp)) {
//                 return true;
//             }
//             // Store the current node
//             // In the set
//             nodeSet.add(temp);
            
//             // Move to the next node
//             temp = temp.next;  
//         }

//         // If the list is successfully traversed 
//         // Without a loop, return false
//         return false;
//     }
// }

// // Function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     // Traverse the linked list and print each node's value
//     while (temp !== null) {
//         process.stdout.write(temp.val + " ");
//         temp = temp.next;
//     }
//     console.log();
// }

// // Main function
// function main() {
//     // Create a sample linked list
//     // With a loop for testing
    
//     let head = new ListNode(1);
//     let second = new ListNode(2);
//     let third = new ListNode(3);
//     let fourth = new ListNode(4);
//     let fifth = new ListNode(5);

//     head.next = second;
//     second.next = third;
//     third.next = fourth;
//     fourth.next = fifth;
//     // Create a loop
//     fifth.next = third; 

//     let sol = new Solution();
//     // Check if there is a loop 
//     // In the linked list
//     if (sol.hasCycle(head)) {
//         console.log("Loop detected in the linked list.");
//     } else {
//         console.log("No loop detected in the linked list.");
//     }
// }

// // Call the main function to start the program
// main();

// optimal
/* Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
*/

class Solution {
    // Function to detect a loop in a linked
    // list using the Tortoise and Hare Algorithm
    hasCycle(head) {
        // Initialize two pointers, slow and fast,
        // to the head of the linked list
        let slow = head;
        let fast = head;

        // Step 2: Traverse the linked list with
        // the slow and fast pointers
        while (fast !== null && fast.next !== null) {
            // Move slow one step
            slow = slow.next;
            // Move fast two steps
            fast = fast.next.next;

            // Check if slow and fast pointers meet
            if (slow === fast) {
                return true;  // Loop detected
            }
        }

        // If fast reaches the end of the list,
        // there is no loop
        return false;
    }
}

// Main function to test the Solution
function main() {
    // Create a sample linked list
    // with a loop for testing
    
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

    // Create an instance of the Solution class
    let solution = new Solution();

    // Check if there is a loop 
    // in the linked list
    if (solution.hasCycle(head)) {
        console.log("Loop detected in the linked list.");
    } else {
        console.log("No loop detected in the linked list.");
    }
}

// Call the main function to execute the test
main();

// Time Complexity: O(N), where N represents the number of nodes in the linked list.
//  In the worst-case scenario, the fast pointer, which advances more quickly, will either
//   reach the end of the list (if there's no loop) or catch up to the slow pointer (if there's a loop) in 
// a time proportional to the length of the list.

// The reason this complexity is O(N) and not slower is due to the fact that each step of the algorithm decreases the gap 
// between the fast and slow pointers (when they are within the loop) by one node. Thus, the maximum number of steps required 
// for them to meet is directly related to the number of nodes in the list.

// Space Complexity: O(1) The algorithm utilizes a constant amount of additional space, regardless of the size of the linked list.
//  This efficiency is achieved by using only two pointers (slow and fast) to detect the loop, without needing any significant extra 
//  memory, resulting in a constant space complexity of O(1).

