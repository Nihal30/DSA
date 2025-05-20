// Implement a First-In-First-Out (FIFO) queue using an array. 
// The implemented queue should support the following operations: push, dequeue, pop, and isEmpty.

// Implement the ArrayQueue class:

// void push(int x): Adds element x to the end of the queue.
// int pop(): Removes and returns the front element of the queue.
// int peek(): Returns the front element of the queue without removing it.
// boolean isEmpty(): Returns true if the queue is empty, false otherwise.

// Class implementing Queue using Arrays
class ArrayQueue {
    // Constructor
    constructor() {
        // Array to store queue elements
        this.arr = new Array(10);
        // Indices for start and end of the queue
        this.start = -1;
        this.end = -1;
        // Current size and maximum size of the queue
        this.currSize = 0;
        this.maxSize = 10;
    }

    // Method to push an element into the queue
    push(x) {
        // Check if the queue is full
        if (this.currSize === this.maxSize) {
            console.log("Queue is full\nExiting...");
            process.exit(1);
        }

        // If the queue is empty, initialize start and end
        if (this.end === -1) {
            this.start = 0;
            this.end = 0;
        } 
        else {
            // Circular increment of end
            this.end = (this.end + 1) % this.maxSize;
        }

        this.arr[this.end] = x;
        this.currSize++;
    }

    // Method to pop an element from the queue
    pop() {
        // Check if the queue is empty
        if (this.start === -1) {
            console.log("Queue Empty\nExiting...");
            process.exit(1);
        }
        let popped = this.arr[this.start];

        // If the queue has only one element, reset start and end
        if (this.currSize === 1) {
            this.start = -1;
            this.end = -1;
        } 
        else {
            // Circular increment of start
            this.start = (this.start + 1) % this.maxSize;
        }

        this.currSize--;
        return popped;
    }

    // Method to get the front element of the queue
    peek() {
        // Check if the queue is empty
        if (this.start === -1) {
            console.log("Queue is Empty");
            process.exit(1);
        }
        return this.arr[this.start];
    }

    // Method to determine whether the queue is empty
    isEmpty() {
        return this.currSize === 0;
    }
}

const queue = new ArrayQueue();
const commands = ["ArrayQueue", "push", "push", "peek", "pop", "isEmpty"];
const inputs = [[], [5], [10], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    if (commands[i] === "push") {
        queue.push(inputs[i][0]);
        console.log("null ");
    } else if (commands[i] === "pop") {
        console.log(queue.pop() + " ");
    } else if (commands[i] === "peek") {
        console.log(queue.peek() + " ");
    } else if (commands[i] === "isEmpty") {
        console.log(queue.isEmpty() ? "true " : "false ");
    } else if (commands[i] === "ArrayQueue") {
        console.log("null ");
    }
}