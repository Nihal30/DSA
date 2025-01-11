 # Recursion Theory

   # Function Overview
    -A function is a reusable block of code designed to perform a specific task. It can take input (parameters) and may return a result. Functions allow us to break down complex problems into smaller, manageable pieces.

# Recursion 
 - Recursion occurs when a function calls itself directly or indirectly to solve a problem. It is an elegant approach to handle problems that can be broken down into smaller, similar subproblems.
 - Infinite Recursion: Infinite recursion happens when a function does not have a base condition to stop the recursive calls. This leads to the function calling itself indefinitely, eventually causing a stack overflow.

# Base Case/Condition
 - The base case is a stopping condition in recursive functions that prevents infinite recursion. It defines the simplest instance of the problem that can be solved without further recursion.
 - Note: Writing effective recursion involves defining a base case or condition that ensures the recursion terminates. Without a base case, recursion will continue indefinitely, leading to stack overflow.

# Recursive Stack Space
 - Each time a function calls itself, a new frame is added to the function call stack. The stack keeps track of the current function execution. When a base condition is met, the stack starts unwinding, returning the results in reverse order.

# Program Flow in Recursion
 - When a recursive function is called, a new instance of that function is created and the control is passed to it until it hits the base case. Each recursive call adds a new frame to the stack. Once the base case is reached, the stack starts unwinding, returning the results step by step.

# Types of Recursion :
 - 1. Direct Recursion
     - A function calls itself directly.
     - Example 

      function countdown(num) {
     // Base case: Stop recursion when num is less than or equal to 0
     if (num <= 0) {
        console.log("Done!");
        return;
     }
      console.log(num);
     // Recursive call
     countdown(num - 1);
     }
     countdown(5); // Output: 5, 4, 3, 2, 1, Done!

 - 2. Indirect Recursion 
     - A function calls another function, and that function eventually calls the first function.   
     - Example 

      function funcA(num) {
     if (num <= 0) {
        console.log("End of recursion!");
        return;
     }
      console.log(`From funcA: ${num}`);
     funcB(num - 1); // Calls funcB
      }

      function funcB(num) {
     if (num <= 0) {
        console.log("End of recursion!");
        return;
     }
     console.log(`From funcB: ${num}`);
     funcA(num - 1); // Calls funcA
      }

      funcA(3); 
     // Output:
     // From funcA: 3
     // From funcB: 2
     // From funcA: 1
     // End of recursion!

 - 3. Tail Recursion
     - A recursive call is the last operation performed in the function. Optimized by JavaScript engines (if tail call optimization is  supported). 
     - Example 
      function tailFactorial(n, accumulator = 1) {
     // Base case: When n reaches 0, return the accumulated result
      if (n === 0) {
        return accumulator;
     }
      // Recursive call with updated accumulator
     return tailFactorial(n - 1, n * accumulator);
     }

     console.log(tailFactorial(5)); // Output: 120


 


 - 4. Head Recursion
     - The recursive call is made first, before performing any other operation
     - Example 
       function headRecursion(num) {
      // Base case: Stop recursion when num is less than or equal to 0
     if (num <= 0) {
        return;
     }
     // Recursive call first
     headRecursion(num - 1);
     console.log(num); // Operations after the recursive call
     }

     headRecursion(5); 
     // Output: 1, 2, 3, 4, 5
 
 - 5. Tree Recursion
     - A function calls itself more than once in its body, creating a "tree" of recursive calls.
     - Example 
      function treeRecursion(num) {
     // Base case: Stop recursion when num is less than or equal to 0
     if (num <= 0) {
        return;
     }
     console.log(num);
     treeRecursion(num - 1); // First recursive call
     treeRecursion(num - 2); // Second recursive call
     }

     treeRecursion(3); 
     // Output:
     // 3
     // 2
     // 1
     // 0 (implicitly stops)
     // 1
     // 0 (implicitly stops)

 
 - 6. Nested Recursion
     - A function's parameter involves a recursive call to itself.
     - Example . 
        function nestedRecursion(num) {
     // Base case: When num is greater than 10, stop recursion
     if (num > 10) {
        return num;
     }
     // Recursive call within another recursive call
     return nestedRecursion(nestedRecursion(num + 2));
     }

     console.log(nestedRecursion(5)); // Output: 11

