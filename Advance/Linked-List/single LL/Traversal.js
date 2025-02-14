// // Traversal in Linked List
// Given the head of a singly Linked List. 
// Traverse the entire Linked List and return its elements in an array in the order of their appearance.

// Input: head -> 5 -> 4 -> 3 -> 1 -> 0
// Output: [5, 4, 3, 1, 0]
// Explanation: The nodes in the Linked List are 5 -> 4 -> 3 -> 1 -> 0, with the head pointing to node with value 5.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    //Function for 
    //Linked List Traversal
    LLTraversal(head) {
        //Storing a copy 
        //Of the linked list
        let temp = head;
        //To store the 
        //Values sequentially
        let ans = [];

        //Keep traversing 
        //Until the null is 
        //Not encountered
        while (temp !== null) {
            // Storing of the values
            ans.push(temp.val);
            //Storing the address 
            //Of the next node
            temp = temp.next;
        }

        //Return answer 
        return ans;
    }
}

//Manual creation of nodes
let y1 = new ListNode(2);
let y2 = new ListNode(5);
let y3 = new ListNode(8);
let y4 = new ListNode(7);

//Linking the nodes
y1.next = y2;
y2.next = y3;
y3.next = y4;

//Solution instance
let sol = new Solution();

// Calling LLTraversal method to get the values
let result = sol.LLTraversal(y1);

// Printing the result
console.log("Linked List Values:");
for (let val of result) {
    console.log(val + " ");
}

