// // Merge two Sorted Lists

// // Given the heads of two linked lists, list1 and list2, where each linked list has its elements sorted 
// // in non-decreasing order, 
// // merge them into a single sorted linked list and return the head of the merged linked list.

// // Input: list1 = head -> 2 -> 4 -> 7 -> 9, list2 = head -> 1 -> 2 -> 5 -> 6
// // Output: head -> 1 -> 2 -> 2 -> 4 -> 5 -> 6 ->7 -> 9
// // Explanation: head -> 1 -> 2 -> 2 -> 4 -> 5 -> 6 ->7 -> 9, the underlined nodes come from list2, the others come from list1.

// // Definition of singly linked list
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     // Function to merge two sorted linked lists
//     mergeTwoLists(list1, list2) {
//         let arr = [];
//         let temp1 = list1;
//         let temp2 = list2;

        
//         // Add elements from list1 to the vector
//         while (temp1) {
//             arr.push(temp1.val);
//             // Move to the next node in list1
//             temp1 = temp1.next;
//         }

//         // Add elements from list2 to the vector
//         while (temp2) {
//             arr.push(temp2.val);
//             // Move to the next node in list2
//             temp2 = temp2.next;
//         }

//         // Sorting the vector in ascending order
//         arr.sort((a, b) => a - b);

//         // Sorted vector to linked list
//         let dummyNode = new ListNode(-1);
//         let temp = dummyNode;
//         for (let i = 0; i < arr.length; i++) {
//             temp.next = new ListNode(arr[i]);
//             temp = temp.next;
//         }

//         // Return the head of 
//         // merged sorted linked list
//         return dummyNode.next;
//     }
// }

// // Function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     while (temp) {
//         // Print the data of the current node
//         process.stdout.write(temp.val + " ");
//         // Move to the next node
//         temp = temp.next;
//     }
//     console.log();
// }

// let list1 = new ListNode(1);
// list1.next = new ListNode(3);
// list1.next.next = new ListNode(5);

// let list2 = new ListNode(2);
// list2.next = new ListNode(4);
// list2.next.next = new ListNode(6);

// console.log("First sorted linked list: ");
// printLinkedList(list1);

// console.log("Second sorted linked list: ");
// printLinkedList(list2);

// let solution = new Solution();
// let mergedList = solution.mergeTwoLists(list1, list2);

// console.log("Merged sorted linked list: ");
// printLinkedList(mergedList);


// // Complexity Analysis
// // Time Complexity: O(N1 + N2) + O(N log N) + O(N) where N1 is the number of linked list nodes in the first list,
// //  N2 is the number of linked list nodes in the second list, and N is the total number of nodes (N1 + N2). 
// //  Traversing both lists into the array takes O(N1 + N2), sorting the array takes O((N1 + N2) X log(N1 + N2)),
// //   and then traversing the sorted array and creating a list gives us another O(N1 + N2).

// // Space Complexity: O(N) + O(N) where N is the total number of nodes from both lists (N1 + N2). 
// // O(N) to store all the nodes of both the lists in an external array and another O(N) to create a new combined list.

// optimal
// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to merge two sorted linked lists
    mergeTwoLists(list1, list2) {
        // Create a dummy node to serve as 
        // the head of the merged list
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
            // Move the temporary pointer 
            // to the next node
            temp = temp.next;
        }

        /*If any list still 
        has remaining elements, 
        append them to the merged list*/
        if (list1 !== null) {
            temp.next = list1;
        } else {
            temp.next = list2;
        }

        // Return merged list
        return dummyNode.next;
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

// Example Linked Lists
let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

console.log("First sorted linked list: ");
printLinkedList(list1);

console.log("Second sorted linked list: ");
printLinkedList(list2);

let solution = new Solution();
let mergedList = solution.mergeTwoLists(list1, list2);

console.log("Merged sorted linked list: ");
printLinkedList(mergedList);

// Complexity Analysis
// Time Complexity: O(N1 + N2) because both lists are traversed in a single pass for merging without any additional
//  loops or nested iterations. Here N1 is the number of nodes in the first linked list and N2 is the number of nodes 
//  in the second linked list.

// Space Complexity: O(1) because no additional data structures or space is allocated for storing data, 
// only a constant space for pointers to maintain for traversing the linked list.
