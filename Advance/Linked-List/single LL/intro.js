class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function main() {
    const arr = [2, 5, 8, 7];

    /* 
     * Assigning values to 
     * the nodes 
     */
    const y1 = new Node(arr[0]);
    const y2 = new Node(arr[1]);
    const y3 = new Node(arr[2]);
    const y4 = new Node(arr[3]);

    /* 
     * Linking of 
     * Nodes 
     */
    y1.next = y2;
    y2.next = y3;
    y3.next = y4;

    /* 
     * Printing Nodes with their 
     * values and data 
     */
    printNode(y1);
    printNode(y2);class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }
    
    function main() {
        const arr = [2, 5, 8, 7];
    
        /* 
         * Assigning values to 
         * the nodes 
         */
        const y1 = new Node(arr[0]);
        const y2 = new Node(arr[1]);
        const y3 = new Node(arr[2]);
        const y4 = new Node(arr[3]);
    
        /* 
         * Linking of 
         * Nodes 
         */
        y1.next = y2;
        y2.next = y3;
        y3.next = y4;
    
        /* 
         * Printing Nodes with their 
         * values and data 
         */
        printNode(y1);
        printNode(y2);
        printNode(y3);
        printNode(y4);
    }
    
    function printNode(node) {
        console.log(`Node data: ${node.data}, Next node: ${node.next ? node.next.data : null}`);
    }
    
    main();
    
    printNode(y3);
    printNode(y4);
}

function printNode(node) {
    console.log(`Node data: ${node.data}, Next node: ${node.next ? node.next.data : null}`);
}

main();
