// Implement a Last-In-First-Out (LIFO) stack using a single queue. 
// The implemented stack should support the following operations: push, pop, top, and isEmpty.

// Implement the QueueStack class:
// void push(int x): Pushes element x onto the stack.
// int pop(): Removes and returns the top element of the stack.
// int top(): Returns the top element of the stack without removing it.
// boolean isEmpty(): Returns true if the stack is empty, false otherwise.

// Stack implementation using Queue
class QueueStack {
    constructor() {
        // Queue
        this.q = [];
    }

    // Method to push element in the stack
    push(x) {
        // Get size
        let s = this.q.length;
        // Add element
        this.q.push(x);

        // Move elements before new element to back
        for (let i = 0; i < s; i++) {
            this.q.push(this.q.shift());
        }
    }

    // Method to pop element from stack
    pop() {
        // Get front element
        let n = this.q[0];
        // Remove front element
        this.q.shift();
        // Return removed element
        return n;
    }

    // Method to return the top of stack
    top() {
        // Return front element
        return this.q[0];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.q.length === 0;
    }
}

const st = new QueueStack();

// List of commands
const commands = ["QueueStack", "push", "push", "pop", "top", "isEmpty"];
const inputs = [[], [4], [8], [], [], []];

for (let i = 0; i < commands.length; ++i) {
    switch (commands[i]) {
        case "push":
            st.push(inputs[i][0]);
            console.log("null ");
            break;
        case "pop":
            console.log(st.pop() + " ");
            break;
        case "top":
            console.log(st.top() + " ");
            break;
        case "isEmpty":
            console.log(st.isEmpty() ? "true " : "false ");
            break;
        case "QueueStack":
            console.log("null ");
            break;
    }
}