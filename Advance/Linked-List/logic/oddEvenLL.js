// // Segregate odd and even nodes in LL

// // Given the head of a singly linked list. Group all the nodes with odd indices 
// // followed by all the nodes with even indices and return the reordered list.
// // Consider the 1st node to have index 1 and so on. The relative order of the 
// // elements inside the odd and even group must remain the same as the given input.

// // Input: head -> 1 -> 2 -> 3 -> 4 -> 5
// // Output: head -> 1 -> 3 -> 5 -> 2 -> 4
// // Explanation: The nodes with odd indices are 1, 3, 5 and the ones with even indices are 2, 4.

// // Definition of singly linked list
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class Solution {
//     // Function to segregate odd and even indices nodes
//     oddEvenList(head) {
//         // Check if list is empty or has only one node
//         if (head === null || head.next === null)
//             return head;

//         // To store values
//         const array = [];
//         let temp = head;

//         /*Traverse the list, skipping one node , 
//         and store values in the vector*/
//         while (temp !== null && temp.next !== null) {
//             array.push(temp.val);
//             temp = temp.next.next;
//         }

//         /*If there's an even number 
//         of nodes, add the value
//          of the last node*/
//         if (temp !== null)
//             array.push(temp.val);

//         // Reset temp 
//         temp = head.next;

//         /*Traverse the list again, skipping one node ,
//          and store values 
//         in the vector*/
//         while (temp !== null && temp.next !== null) {
//             array.push(temp.val);
//             temp = temp.next.next;
//         }

//        /* If there's an odd number
//         of nodes, add the 
//         value of the last node*/
//         if (temp !== null)
//             array.push(temp.val);

//         // Reset temp 
//         temp = head;
//         let i = 0;

//         // Update node values 
//         while (temp !== null) {
//             temp.val = array[i];
//             temp = temp.next;
//             i++;
//         }

//         return head;
//     }
// }

// // Function to print the linked list
// function printLL(head) {
//     while (head !== null) {
//         process.stdout.write(head.val + " ");
//         head = head.next;
//     }
//     console.log();
// }

// // Main function
// // Create a linked list with given values
// const arr = [1, 3, 4, 2, 5, 6];
// let head = new ListNode(arr[0]);
// head.next = new ListNode(arr[1]);
// head.next.next = new ListNode(arr[2]);
// head.next.next.next = new ListNode(arr[3]);
// head.next.next.next.next = new ListNode(arr[4]);
// head.next.next.next.next.next = new ListNode(arr[5]);

// // Rearrange the list and print it
// const solution = new Solution();
// head = solution.oddEvenList(head);
// printLL(head);

// // Complexity Analysis
// // Time Complexity: O(2xN) for the following reasons:-
// // Traversing the odd-indexed elements takes O(N/2) time.
// // Traversing the even-indexed elements takes O(N/2) time.
// // Updating the linked list with the values from the array takes O(N) time.
// // Here N is the size of the linked list.

// // Space Complexity: O(N) because an additional list is used to store the grouped elements from the linked list.


// Optimal 

// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to rearrange nodes
    oddEvenList(head) {
        if (!head || !head.next)
            return head;

        /*Initialize pointers for odd 
        and even nodes and keep 
        track of the first even node*/
        let odd = head;
        let even = head.next;
        let firstEven = head.next;

        // Rearranging nodes
        while (even && even.next) {
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }

        /* Connect the last odd 
       node to the first even node*/
        odd.next = firstEven;

        return head;
    }
}

// Function to print the linked list
function printLL(head) {
    while (head) {
        process.stdout.write(head.val + " ");
        head = head.next;
    }
    console.log();
}

// Main function
// Create a linked list with given values
const arr = [1, 3, 4, 2, 5, 6];
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);
head.next.next.next = new ListNode(arr[3]);
head.next.next.next.next = new ListNode(arr[4]);
head.next.next.next.next.next = new ListNode(arr[5]);

// Print the original linked list
console.log("Original Linked List: ");
printLL(head);

// Rearrange the list and print it
const solution = new Solution();
head = solution.oddEvenList(head);
console.log("New Linked List: ");
printLL(head);
