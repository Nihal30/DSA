// Convert an array to Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
    const size = arr.length;
    if (size === 0) return null;

    // Create head of the linked list
    let head = new Node(arr[0]);
    let current = head;

    /* Iterate through the array 
    and create linked list nodes */
    for (let i = 1; i < size; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.data + " -> ");
        current = current.next;
    }
    console.log("null");
}

const arr = [1, 2, 3, 4, 5];

// Convert array to linked list
const head = arrayToLinkedList(arr);

// Print the linked list
printLinkedList(head);
