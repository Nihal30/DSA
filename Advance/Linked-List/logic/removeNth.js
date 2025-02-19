// // Remove Nth node from the back of the LL

// // Given the head of a singly linked list and an integer n. Remove 
// // the nth node from the back of the linked List and return the head of the modified list. 
// // The value of n will always be less than or equal to the number of nodes in the linked list.

// // Input: head -> 1 -> 2 -> 3 -> 4 -> 5, n = 2
// // Output: head -> 1 -> 2 -> 3 -> 5
// // Explanation: The 2nd node from the back was the node with value 4.
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     // Function to remove the nth node from end
//     removeNthFromEnd(head, n) {
//         if (head === null) {
//             return null;
//         }
//         let cnt = 0;
//         let temp = head;

//         // Count the number of nodes
//         while (temp !== null) {
//             cnt++;
//             temp = temp.next;
//         }

//         /* If N equals 
//         the total number of nodes
//         delete the head */
//         if (cnt === n) {
//             return head.next;
//         }

//         /* Calculate the position 
//         of the node to delete (res) */
//         let res = cnt - n;
//         temp = head;

//         /* Traverse to the node 
//         just before the one to delete */
//         while (res > 1) {
//             res--;
//             temp = temp.next;
//         }

//         // Delete the Nth node from the end
//         temp.next = temp.next.next;
//         return head;
//     }
// }

// // Function to print the linked list
// function printLL(head) {
//     let current = head;
//     while (current !== null) {
//         process.stdout.write(current.val + " ");
//         current = current.next;
//     }
//     console.log();
// }

// const arr = [1, 2, 3, 4, 5];
// const N = 3;
// let head = new ListNode(arr[0]);
// head.next = new ListNode(arr[1]);
// head.next.next = new ListNode(arr[2]);
// head.next.next.next = new ListNode(arr[3]);
// head.next.next.next.next = new ListNode(arr[4]);

// // Solution instance
// const solution = new Solution();
// head = solution.removeNthFromEnd(head, N);
// printLL(head);

// // Complexity Analysis
// // Time Complexity: O(L) + O(L-N) We are calculating the length of 
// // the linked list and then iterating up to the (L-N)th node of the linked list, 
// // where L is the total length of the list and N is the position of the node to delete.

// // Space Complexity: O(1) as we have not used any extra space.

// optimal

// Definition of Single Linked List
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to remove the nth node from end
    removeNthFromEnd(head, n) {
        // Creating pointers
        let fastp = head;
        let slowp = head;

        /* Move the fastp pointer 
        N nodes ahead */
        for (let i = 0; i < n; i++) {
            fastp = fastp.next;
        }

        /* If fastp becomes NULL
        the Nth node from the 
        end is the head */
        if (fastp === null) {
            return head.next;
        }

        /* Move both pointers 
        Until fastp reaches the end */
        while (fastp.next !== null) {
            fastp = fastp.next;
            slowp = slowp.next;
        }

        // Delete the Nth node from the end
        slowp.next = slowp.next.next;
        return head;
    }
}

// Function to print the linked list
function printLL(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

const arr = [1, 2, 3, 4, 5];
const N = 3;
// Creation of linked list
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);
head.next.next.next = new ListNode(arr[3]);
head.next.next.next.next = new ListNode(arr[4]);

// Solution instance
const solution = new Solution();
head = solution.removeNthFromEnd(head, N);
printLL(head);

// Complexity Analysis
// Time Complexity: O(N) since the fast pointer will 
// traverse the entire linked list, where N is the length of the linked list.

// Space Complexity: O(1), as we have not used any extra space.

