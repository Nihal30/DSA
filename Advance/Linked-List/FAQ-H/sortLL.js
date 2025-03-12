// // Sort LL

// // Given the head of a singly linked list. 
// // Sort the values of the linked list in non-decreasing order and return the head of the modified linked list.

// // Examples:
// // Input: head -> 5 -> 6 -> 1 -> 2 -> 1
// // Output: head -> 1 -> 1 -> 2 -> 5 -> 6
// // Explanation: 1 <= 1 <= 2 <= 5 <= 6

// // Brute 

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     // Function to sort Linked List
//     sortList(head) {
//         // Array to store node values
//         let arr = [];

//         /*Temporary pointer to
//         traverse the linked list*/
//         let temp = head;

//         /* Traverse the linked list and
//         store node values in the array*/
//         while (temp !== null) {
//             arr.push(temp.val);
//             temp = temp.next;
//         }

//         // Sort array containing node values
//         arr.sort((a, b) => a - b);

//         // Reassign sorted values to linked list nodes
//         temp = head;
//         for (let i = 0; i < arr.length; i++) {
//             // Update the node's data
//             temp.val = arr[i];
//             // Move to the next node
//             temp = temp.next;
//         }

//         // Return the head
//         return head;
//     }
// }

// // Function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     while (temp !== null) {
//         // Print the data of the current node
//         process.stdout.write(temp.val + " ");
//         // Move to the next node
//         temp = temp.next;
//     }
//     console.log();
// }

// // Linked List: 3 2 5 4 1
// let head = new ListNode(3);
// head.next = new ListNode(2);
// head.next.next = new ListNode(5);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(1);

// console.log("Original Linked List: ");
// printLinkedList(head);

// let solution = new Solution();
// // Sort the linked list
// head = solution.sortList(head);

// console.log("Sorted Linked List: ");
// printLinkedList(head);
                
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to merge two sorted linked lists
    mergeTwoSortedLinkedLists(list1, list2) {
        // Create dummy node to serve as head of merged list
        let dummyNode = new ListNode(-1);
        let temp = dummyNode;

        // Traverse both lists simultaneously
        while (list1 !== null && list2 !== null) {
            /*Compare elements of both lists 
            and link the smaller node 
            to the merged list*/
            if (list1.val <= list2.val) {
                temp.next = list1;
                list1 = list1.next;
            } else {
                temp.next = list2;
                list2 = list2.next;
            }
            // Move the temporary pointer to the next node
            temp = temp.next; 
        }

        /*If any list still has 
        remaining elements append 
        them to the merged list*/
        if (list1 !== null) {
            temp.next = list1;
        } else {
            temp.next = list2;
        }
        // Return the merged list starting 
        // from the next of the dummy node
        return dummyNode.next;
    }

    // Function to find the middle of a linked list
    findMiddle(head) {
        // If the list is empty or has only one node, 
        // the middle is the head itself
        if (head === null || head.next === null) {
            return head;
        }

        // Initializing slow and fast pointers
        let slow = head;
        let fast = head.next;

       /* Move the fast pointer twice as fast as the slow pointer
        When the fast pointer reaches the end, the slow pointer 
        will be at the middle*/
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // Function to perform merge sort on a linked list
    sortList(head) {
        /*Base case: if the list is empty or has only one node, 
        it is already sorted, so return the head*/
        if (head === null || head.next === null) {
            return head;
        }
        
        // Find middle of list using findMiddle function
        let middle = this.findMiddle(head);
        
        // Divide the list into two halves
        let right = middle.next;
        middle.next = null;
        let left = head;
        
        // Recursively sort left and right halves
        left = this.sortList(left);
        right = this.sortList(right);
        
        // Merge the sorted halves using the 
        // mergeTwoSortedLinkedLists function
        return this.mergeTwoSortedLinkedLists(left, right);
    }
}

// Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        // Print the data of the current node
        process.stdout.write(temp.val + " "); 
        // Move to the next node
        temp = temp.next; 
    }
    console.log();
}

// Linked List: 3 2 5 4 1
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(5);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(1);

console.log("Original Linked List: ");
printLinkedList(head);

let solution = new Solution();
// Sort the linked list
head = solution.sortList(head);

console.log("Sorted Linked List: ");
printLinkedList(head);

// Complexity Analysis
// Time Complexity: O(N log N) where N is the number of nodes in the linked list.
//  Finding the middle node of the linked list requires traversing it linearly taking O(N) 
//  time complexity and to reach the individual nodes of the list, it has to be split log N times 
//  (continuously halve the list until we have individual elements).

// Space Complexity: O(1) as no additional data structures or space is allocated for storage during the merging process.
//  However, space proportional to O(log N) stack space is required for the recursive calls. The maximum recursion depth 
//  of log N height is occupied on the call stack.
