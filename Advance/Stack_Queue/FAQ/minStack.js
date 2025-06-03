// // Implement Min Stack
// // Design a stack that supports the following operations in constant time: push, pop, top, and retrieving the minimum element.

// // Implement the MinStack class:
// // MinStack(): Initializes the stack object.
// // void push(int val): Pushes the element val onto the stack.
// // void pop(): removes the element on the top of the stack.
// // int top(): gets the top element of the stack.
// // int getMin(): retrieves the minimum element in the stack.

// // brute 

// // Class to implement Minimum Stack
// class MinStack {
//     // Initialize a stack
//     constructor() {
//         this.st = [];
//     }

//     // Method to push a value in stack
//     push(value) {
//         // If stack is empty
//         if (this.st.length === 0) {
//             // Push current value as minimum
//             this.st.push([value, value]);
//             return;
//         }

//         // Update the current minimum
//         const mini = Math.min(this.getMin(), value);

//         // Add the pair to the stack
//         this.st.push([value, mini]);
//     }

//     // Method to pop a value from stack
//     pop() {
//         // Using in-built pop method
//         this.st.pop();
//     }

//     // Method to get the top of stack
//     top() {
//         // Return the top value
//         return this.st[this.st.length - 1][0];
//     }

//     // Method to get the minimum in stack
//     getMin() {
//         // Return the minimum
//         return this.st[this.st.length - 1][1];
//     }
// }

// // Main function to demonstrate the MinStack functionality
// const s = new MinStack();

// // Function calls
// s.push(-2);
// s.push(0);
// s.push(-3);
// console.log(s.getMin() + " ");
// s.pop();
// console.log(s.top() + " ");
// s.pop();
// console.log(s.getMin());

class MinStack {
    constructor() {
        // Initialize a stack
        this.st = [];
        // To store the minimum value
        this.mini = null;
    }

    // Method to push a value in stack
    push(value) {
        // If stack is empty
        if (this.st.length === 0) {
            // Update the minimum value
            this.mini = value;

            // Push current value as minimum
            this.st.push(value);
            return;
        }

        // If the value is greater than the minimum
        if (value > this.mini) {
            this.st.push(value);
        } else {
            // Add the modified value to stack
            this.st.push(2 * value - this.mini);
            // Update the minimum
            this.mini = value;
        }
    }

    // Method to pop a value from stack
    pop() {
        // Base case
        if (this.st.length === 0) return;

        // Get the top
        let x = this.st.pop();

        // If the modified value was added to stack
        if (x < this.mini) {
            // Update the minimum
            this.mini = 2 * this.mini - x;
        }
    }

    // Method to get the top of stack
    top() {
        // Base case
        if (this.st.length === 0) return -1;

        // Get the top
        let x = this.st[this.st.length - 1];

        // Return top if minimum is less than the top
        if (this.mini < x) return x;

        // Otherwise return mini
        return this.mini;
    }

    // Method to get the minimum in stack
    getMin() {
        // Return the minimum
        return this.mini;
    }
}

// Example usage
let s = new MinStack();

// Function calls
s.push(-2);
s.push(0);
s.push(-3);
console.log(s.getMin(), " ");
s.pop();
console.log(s.top(), " ");
s.pop();
console.log(s.getMin());



