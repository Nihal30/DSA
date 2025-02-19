// // Sort a LL of 0's 1's and 2's
// // Given the head of a singly linked list consisting of only 0, 1 or 2. 
// // Sort the given linked list and return the head of the modified list. 
// // Do it in-place by changing the links between the nodes without creating new nodes.

// // Input: head -> 1 -> 0 -> 2 -> 0 -> 1
// // Output: head -> 0 -> 0 -> 1 -> 1 -> 2
// // Explanation: The values after sorting are [0, 0, 1, 1, 2].
// // Definition of singly linked list:
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     // Function to sort the linked list
//     sortList(head) {
//         // Initialize counts
//         let c0 = 0, c1 = 0, c2 = 0;
//         let temp = head;

//         /* Count the number of 0s, 
//            1s, and 2s in the list */
//         while (temp !== null) {
//             if (temp.val === 0)
//                 c0++;
//             else if (temp.val === 1)
//                 c1++;
//             else if (temp.val === 2)
//                 c2++;
//             temp = temp.next;
//         }

//         temp = head;

//         /* Reassign values to 
//            the nodes based on 
//            the counts */
//         while (temp !== null) {
//             if (c0 > 0) {
//                 temp.val = 0;
//                 c0--;
//             } else if (c1 > 0) {
//                 temp.val = 1;
//                 c1--;
//             } else if (c2 > 0) {
//                 temp.val = 2;
//                 c2--;
//             }
//             temp = temp.next;
//         }

//         return head;
//     }
// }

// // Function to print linked list
// function printList(head) {
//     while (head !== null) {
//         process.stdout.write(head.val + " ");
//         head = head.next;
//     }
//     console.log();
// }

// // Function to create new node
// function newNode(data) {
//     return new ListNode(data);
// }

// (function() {
//     // Creating a linked list
//     let head = newNode(1);
//     head.next = newNode(2);
//     head.next.next = newNode(0);
//     head.next.next.next = newNode(1);
//     head.next.next.next.next = newNode(2);
//     head.next.next.next.next.next = newNode(0);
//     head.next.next.next.next.next.next = newNode(1);

//     // Print original list
//     process.stdout.write("Original list: ");
//     printList(head);

//     // Sort the list
//     let sol = new Solution();
//     head = sol.sortList(head);

//     // Print sorted list
//     process.stdout.write("Sorted list: ");
//     printList(head);
// })();

// // Complexity Analysis
// // Time Complexity: O(2N) because the code traverses the linked list twice: 
// // once while counting the frequency of 0's, 1's, and 2's, 
// // and once again while reassigning the values to the nodes. 
// // Here, N represents the length of the linked list or the number of nodes present in the linked list.
// // Space Complexity: O(1) because no extra space is used.


// optimal

// Definition of singly linked list:
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to sort the linked list
    sortList(head) {
        /* If the list is empty or has only one 
           node, return as it is already sorted */
        if (head === null || head.next === null)
            return head;

        // Dummy nodes to point to heads of 
        // three lists
        let zeroHead = new ListNode(-1);
        let oneHead = new ListNode(-1);
        let twoHead = new ListNode(-1);

        // Pointers to current last nodes of 
        // three lists
        let zero = zeroHead;
        let one = oneHead;
        let two = twoHead;
        let temp = head;

        /* Traverse the original list 
           and distribute the nodes 
           into three lists */
        while (temp !== null) {
            if (temp.val === 0) {
                zero.next = temp;
                zero = temp;
            } else if (temp.val === 1) {
                one.next = temp;
                one = temp;
            } else if (temp.val === 2) {
                two.next = temp;
                two = temp;
            }
            temp = temp.next;
        }

        // Connect the three lists together
        zero.next = oneHead.next ? oneHead.next : twoHead.next;
        one.next = twoHead.next;
        two.next = null;

        // New head of the sorted list
        let newHead = zeroHead.next;

        // Return the new head
        return newHead;
    }
}

// Helper function to print linked list
function printList(head) {
    while (head !== null) {
        process.stdout.write(head.val + " ");
        head = head.next;
    }
    console.log();
}

// Helper function to create a new node
function newNode(data) {
    return new ListNode(data);
}

(function() {
    // Creating a linked list
    let head = newNode(1);
    head.next = newNode(2);
    head.next.next = newNode(0);
    head.next.next.next = newNode(1);
    head.next.next.next.next = newNode(2);
    head.next.next.next.next.next = newNode(0);
    head.next.next.next.next.next.next = newNode(1);

    // Print original list
    process.stdout.write("Original list: ");
    printList(head);

    // Sort the list
    let sol = new Solution();
    head = sol.sortList(head);

    // Print sorted list
    process.stdout.write("Sorted list: ");
    printList(head);
})();
