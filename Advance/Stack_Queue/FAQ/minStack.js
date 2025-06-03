// Implement Min Stack
// Design a stack that supports the following operations in constant time: push, pop, top, and retrieving the minimum element.

// Implement the MinStack class:
// MinStack(): Initializes the stack object.
// void push(int val): Pushes the element val onto the stack.
// void pop(): removes the element on the top of the stack.
// int top(): gets the top element of the stack.
// int getMin(): retrieves the minimum element in the stack.

// brute 

// Class to implement Minimum Stack
class MinStack {
    // Initialize a stack
    constructor() {
        this.st = [];
    }

    // Method to push a value in stack
    push(value) {
        // If stack is empty
        if (this.st.length === 0) {
            // Push current value as minimum
            this.st.push([value, value]);
            return;
        }

        // Update the current minimum
        const mini = Math.min(this.getMin(), value);

        // Add the pair to the stack
        this.st.push([value, mini]);
    }

    // Method to pop a value from stack
    pop() {
        // Using in-built pop method
        this.st.pop();
    }

    // Method to get the top of stack
    top() {
        // Return the top value
        return this.st[this.st.length - 1][0];
    }

    // Method to get the minimum in stack
    getMin() {
        // Return the minimum
        return this.st[this.st.length - 1][1];
    }
}

// Main function to demonstrate the MinStack functionality
const s = new MinStack();

// Function calls
s.push(-2);
s.push(0);
s.push(-3);
console.log(s.getMin() + " ");
s.pop();
console.log(s.top() + " ");
s.pop();
console.log(s.getMin());


