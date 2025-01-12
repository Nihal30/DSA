function printNaturalTail(n, current = 1) {
    // Base case: Stop recursion when current exceeds n
    if (current > n) {
        return;
    }
    // Print first
    console.log(current);
    // Recursive call as the last operation
    printNaturalTail(n, current + 1);
}

printNaturalTail(5);
// Output: 1, 2, 3, 4, 5
