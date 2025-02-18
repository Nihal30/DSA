// Add two numbers in LL

// Given two non-empty linked lists l1 and l2 which represent two non-negative integers.
// The digits are stored in reverse order with each node storing one digit.
// Add two numbers and return the sum as a linked list.
// The sum Linked List will be in reverse order as well.
// The Two given Linked Lists represent numbers without any leading zeros, except when the number is zero itself.

// Input: l1 = head -> 5 -> 4, l2 = head -> 4
// Output: head -> 9 -> 4
// Explanation: l1 = 45, l2 = 4.
// l1 + l2 = 45 + 4 = 49.   

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    // Function to add two numbers as linked list
    addTwoNumbers(l1, l2) {
        /* Dummy node to act as the 
        starting point of the result list */
        let dummy = new ListNode(0);
        /* Temp pointer to build 
        the result list */
        let temp = dummy;
        // Initialize carry
        let carry = 0;

        /* Iterate while there are nodes in l1 or l2, 
        or there's a carry to process */
        while (l1 !== null || l2 !== null || carry !== 0) {
            let sum = 0;

            /* Add the value from l1 
            if available */
            if (l1 !== null) {
                sum += l1.val;
                l1 = l1.next;
            }

            /* Add the value from l2 
            if available */
            if (l2 !== null) {
                sum += l2.val;
                l2 = l2.next;
            }

            // Add the carry
            sum += carry;
            // Update the carry
            carry = Math.floor(sum / 10);

            /* Create a new node with the digit value 
            and attach it to the result list */
            let node = new ListNode(sum % 10);
            temp.next = node;
            /* Move to the 
            next position in the result list */
            temp = temp.next;
        }
        /* Return the result list
        skipping the dummy node */
        return dummy.next;
    }
}

// Function to print the linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    console.log();
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const solution = new Solution();
const result = solution.addTwoNumbers(l1, l2);

printList(result);


// Complexity Analysis
// Time Complexity: O(max(M, N)) Here, M and N represent the sizes of the linked lists l1 and l2,
//  respectively. The algorithm traverses both lists at most once, hence the time complexity depends on the length of the longer list.

// Space Complexity: O(max(M,N)) The length of the new list is at most max(M, N)+1.
