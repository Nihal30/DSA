// // Flattening of LL

// // Given a special linked list containing n head nodes where every node in the linked list contains two pointers:

// // ‘Next’ points to the next node in the list
// // ‘Child’ pointer to a linked list where the current node is the head
// // Each of these child linked lists is in sorted order and connected by a 'child' pointer.

// // Flatten this linked list such that all nodes appear in a single sorted layer connected by the 'child' 
// // pointer and return the head of the modified list.

// // Brute

// class ListNode {
//     constructor(val = 0, next = null, child = null) {
//         this.val = val;
//         this.next = next;
//         this.child = child;
//     }
// }

// class Solution {
//     // Function to convert an array to a linked list
//     convertArrToLinkedList(arr) {
//         /* Create a dummy node to serve as
//          the head of the linked list */
//         let dummyNode = new ListNode(-1);
//         let temp = dummyNode;

//         /* Iterate through the array and
//          create nodes with array elements */
//         for (let i = 0; i < arr.length; i++) {
//             // Create a new node with the array element
//             temp.child = new ListNode(arr[i]);
            
//             // Update the temporary pointer
//             temp = temp.child;
//         }
        
//         /* Return the linked list starting
//          from the next of the dummy node */
//         return dummyNode.child;
//     }

//     // Function to flatten a linked list with child pointers 
//     flattenLinkedList(head) {
//         let arr = [];

//         // Traverse through the linked list
//         while (head !== null) {
//             /* Traverse through the child
//              nodes of each head node */
//             let t2 = head;
            
//             while (t2 !== null) {
//                 // Store each node's data in the array
//                 arr.push(t2.val);
                
//                 // Move to the next child node
//                 t2 = t2.child;
//             }

//             // Move to the next head node
//             head = head.next;
//         }

//         // Sort the array containing node values
//         arr.sort((a, b) => a - b);

//         // Convert the sorted array back to a linked list
//         return this.convertArrToLinkedList(arr);
//     }
// }

// // Function to print the linked list
// function printLinkedList(head) {
//     while (head !== null) {
//         process.stdout.write(head.val + " ");
//         head = head.child;
//     }
//     console.log();
// }

// // Function to print the linked list in a grid-like structure
// function printOriginalLinkedList(head, depth) {
//     while (head !== null) {
//         process.stdout.write(head.val.toString());

//         /* If child exists, recursively
//          print it with indentation */
//         if (head.child) {
//             process.stdout.write(" -> ");
//             printOriginalLinkedList(head.child, depth + 1);
//         }

//         // Add vertical bars for each level in the grid
//         if (head.next) {
//             console.log();
//             for (let i = 0; i < depth; ++i) {
//                 process.stdout.write("| ");
//             }
//         }
//         head = head.next;
//     }
// }

// let head = new ListNode(5);
// head.child = new ListNode(14);

// head.next = new ListNode(10);
// head.next.child = new ListNode(4);

// head.next.next = new ListNode(12);
// head.next.next.child = new ListNode(20);
// head.next.next.child.child = new ListNode(13);

// head.next.next.next = new ListNode(7);
// head.next.next.next.child = new ListNode(17);

// // Print the original linked list structure
// console.log("Original linked list:");
// printOriginalLinkedList(head, 0);

// // Creating an instance of Solution class
// let sol = new Solution();

// // Function call to flatten the linked list
// let flattened = sol.flattenLinkedList(head);

// // Printing the flattened linked list
// console.log("\nFlattened linked list: ");
// printLinkedList(flattened);


// // Complexity Analysis
// // Time Complexity: O(NxM) + O(NxM log(NxM)) + O(NxM) where N is the number of nodes along the next 
// // pointers and M is the number of nodes along the child pointers.

// // O(NxM) because we traverse through all the nodes, iterating through N nodes along the next pointers and M nodes 
// // along the child pointers.
// // O(NxM log(NxM)) because we sort the array containing NxM total elements.
// // O(NxM) because we reconstruct the linked list from the sorted array by iterating over the NxM elements.
// // Space Complexity: O(NxM) + O(NxM) where N is the number of nodes along the next pointers and M is the number of nodes along the child pointers.

// // O(NxM) for storing all the elements in an additional array for sorting.
// // O(NxM) to reconstruct the linked list from the array after sorting.

// Optimal

class ListNode {
    constructor(val = 0, next = null, child = null) {
        this.val = val;
        this.next = next;
        this.child = child;
    }
}

class Solution {
    /* Merge the two linked lists in a particular
     order based on the data value */
    merge(list1, list2) {
        /* Create a dummy node as a 
        placeholder for the result */
        let dummyNode = new ListNode(-1);
        let res = dummyNode;

        // Merge the lists based on data values
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                res.child = list1;
                res = list1;
                list1 = list1.child;
            } else {
                res.child = list2;
                res = list2;
                list2 = list2.child;
            }
            res.next = null;
        }

        // Connect the remaining elements if any
        if (list1 !== null) {
            res.child = list1;
        } else {
            res.child = list2;
        }

        // Break the last node's link to prevent cycles
        if (dummyNode.child !== null) {
            dummyNode.child.next = null;
        }

        return dummyNode.child;
    }

    // Function to flatten a linked list with child pointers 
    flattenLinkedList(head) {
        // If head is null or there is no next node
        if (head === null || head.next === null) {
            return head; // Return head
        }

        // Recursively flatten the rest of the linked list
        let mergedHead = this.flattenLinkedList(head.next);

        // Merge the lists
        head = this.merge(head, mergedHead);
        return head;
    }
}

// Function to print the linked list
function printLinkedList(head) {
    while (head !== null) {
        process.stdout.write(head.val + " ");
        head = head.child;
    }
    console.log();
}

// Function to print the linked list in a grid-like structure
function printOriginalLinkedList(head, depth) {
    while (head !== null) {
        process.stdout.write(head.val.toString());

        /* If child exists, recursively
         print it with indentation */
        if (head.child) {
            process.stdout.write(" -> ");
            printOriginalLinkedList(head.child, depth + 1);
        }

        // Add vertical bars for each level in the grid
        if (head.next) {
            console.log();
            for (let i = 0; i < depth; ++i) {
                process.stdout.write("| ");
            }
        }
        head = head.next;
    }
}

let head = new ListNode(5);
head.child = new ListNode(14);

head.next = new ListNode(10);
head.next.child = new ListNode(4);

head.next.next = new ListNode(12);
head.next.next.child = new ListNode(20);
head.next.next.child.child = new ListNode(13);

head.next.next.next = new ListNode(7);
head.next.next.next.child = new ListNode(17);

// Print the original linked list structure
console.log("Original linked list:");
printOriginalLinkedList(head, 0);

// Creating an instance of Solution class
let sol = new Solution();

// Function call to flatten the linked list
let flattened = sol.flattenLinkedList(head);

// Printing the flattened linked list
console.log("\nFlattened linked list: ");
printLinkedList(flattened);