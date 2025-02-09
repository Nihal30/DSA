// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// Definition for a singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Brute Force Solution
// 1. Convert linked lists to numbers.
// 2. Add the numbers.
// 3. Convert the result back to a linked list.
function addTwoNumbersBrute(l1, l2) {
    function getNumber(node) {
        let num = 0, factor = 1;
        while (node) {
            num += node.val * factor;
            factor *= 10;
            node = node.next;
        }
        return num;
    }
    let sum = getNumber(l1) + getNumber(l2);
    let dummy = new ListNode();
    let current = dummy;
    if (sum === 0) return new ListNode(0);
    while (sum > 0) {
        current.next = new ListNode(sum % 10);
        sum = Math.floor(sum / 10);
        current = current.next;
    }
    return dummy.next;
}
