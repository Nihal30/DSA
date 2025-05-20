// Implement a Last-In-First-Out (LIFO) stack using an array.
// The implemented stack should support the following operations: push, pop, peek, and isEmpty.

// Implement the ArrayStack class:

// void push(int x): Pushes element x onto the stack.
// int pop(): Removes and returns the top element of the stack.
// int top(): Returns the top element of the stack without removing it.
// boolean isEmpty(): Returns true if the stack is empty, false otherwise.


class ArrayStack {
    // Constructor
    constructor(size = 1000) {
        // Array to hold elements
        this.stackArray = new Array(size);
        // Maximum capacity
        this.capacity = size;
        // Index of top element
        this.topIndex = -1; // Initialize stack as empty
    }

    // Pushes element x 
    push(x) {
        if (this.topIndex >= this.capacity - 1) {
            console.log("Stack overflow");
            return;
        }
        this.stackArray[++this.topIndex] = x;
    }

    // Removes and returns top element
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            // Return invalid value
            return -1;
        }
        return this.stackArray[this.topIndex--];
    }

    // Returns top element
    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return -1;
        }
        return this.stackArray[this.topIndex];
    }

    /* Returns true if the 
       stack is empty, false otherwise */
    isEmpty() {
        return this.topIndex === -1;
    }
}

// Main function
const stack = new ArrayStack();
const commands = ["ArrayStack", "push", "push", "top", "pop", "isEmpty"];
const inputs = [[], [5], [10], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    switch (commands[i]) {
        case "push":
            stack.push(inputs[i][0]);
            console.log("null");
            break;
        case "pop":
            console.log(stack.pop());
            break;
        case "top":
            console.log(stack.top());
            break;
        case "isEmpty":
            console.log(stack.isEmpty() ? "true" : "false");
            break;
        case "ArrayStack":
            console.log("null");
            break;
    }
}
