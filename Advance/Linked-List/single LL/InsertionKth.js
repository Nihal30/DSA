// Insertion at the Kth position of LL

// Given the head of a singly linked list and two integers X and K, insert a node with 
// value X as the kth node of the linked list and return the head of the modified list.

// Input: head -> 1 -> 2 -> 3, X = 5, K = 2
// Output: head -> 1 -> 5 -> 2 -> 3

// Definition of singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Solution class
class Solution {
    // Function to insert a new node at the kth position 
    insertAtKthPosition(head, X, K) {
        /* If the linked list is empty 
        and k is 1, insert the 
        new node as the head */
        if (head === null) {
            if (K === 1)
                return new ListNode(X);
            else
                return head;
        }

        /* If K is 1, insert the new
        node at the beginning 
        of the linked list */
        if (K === 1)
            return new ListNode(X, head);

        let cnt = 0;
        let temp = head;

        /* Traverse the linked list 
        to find the node at position k-1 */
        while (temp !== null) {
            cnt++;
            if (cnt === K - 1) {
                /* Insert the new node after the node 
                at position k-1 */
                let newNode = new ListNode(X, temp.next);
                temp.next = newNode;
                break;
            }
            temp = temp.next;
        }

        return head;
    }
}

// Helper Function to print the linked list
function printLL(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

// Main function
let arr = [10, 30, 40];
let X = 20, K = 2;
let head = new ListNode(arr[0]);
head.next = new ListNode(arr[1]);
head.next.next = new ListNode(arr[2]);


// Print the original list
console.log("Original List: ");
printLL(head);


// Create a Solution object
let sol = new Solution();
head = sol.insertAtKthPosition(head, X, K);


// Print the modified linked list
console.log("List after inserting the given value at the Kth position: ");
printLL(head);