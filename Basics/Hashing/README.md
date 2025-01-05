# Hashing

- Hashing is a technique used in computer science to quickly find, store, and manage data.
- It works by taking an input, like a number or a string, and converting it into a fixed-size value called a hash.
- This hash then points to where the data is stored in a structure called a hash table.
- The main goal of hashing is to make data retrieval fast, even when dealing with large amounts of information.
- Hashing is widely used in various applications, such as searching databases, managing passwords, and speeding up data lookups in many types of software.

# Hashing in Array Operations: Counting Occurrences
 - In the context of arrays, hashing provides a highly efficient method for solving problems like counting the frequency of elements. Consider the array arr[] = {5, 6, 5, 6, 9, 6}.
 - To determine how many times the number 6 appears in this array, there are several approaches that can be taken.

# Method 1: Basic Traversal and Counting
- The simplest method involves traversing the entire array and counting the occurrences of the number 6.
- Although this method is straightforward, it is not optimal for large datasets as it requires a complete traversal of the array.

# Example 
  # Cpp 

   <!-- #include<bits/stdc++.h>
   using namespace std;

   int main() {
    int arr[] = {5, 6, 5, 6, 9, 6};
    int count = 0;
    for(int i = 0; i < 6; i++) {
        if(arr[i] == 6) {
            count++;
        }
    }
    cout << count << endl;  // Output: 3
    return 0;
   } -->

   # JS 

   <!-- const arr = [5, 6, 5, 6, 9, 6];
   let count = 0;

   for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 6) {
        count++;
    }
   }

   console.log(count);  // Output: 3 -->

# Method 2: Hashing for Efficient Counting
 - A more efficient approach involves using hashing.
 - Here, the array is hashed into another array, often called a hash table, where the index represents the element value and the   content at that index represents the count of occurrences.
- This method allows the counting operation to be completed in a single iteration of the array, making it highly efficient.

# Example 
 # CPP

 <!-- #include<bits/stdc++.h>
 using namespace std;

 int main() {
    int arr[] = {5, 6, 5, 6, 9, 6};
    int hashTable[10] = {0};
    for(int i = 0; i < 6; i++) {
        hashTable[arr[i]]++;
    }
    cout << hashTable[6] << endl;  // Output: 3
    return 0;
 }  -->

 # JS

 <!-- const arr = [5, 6, 5, 6, 9, 6];
 const hashTable = new Array(10).fill(0);

 for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]]++;
 }

 console.log(hashTable[6]);  // Output: 3 -->


# Exploring Internal Hashing Methods: Division, Folding, and Mid-Square Techniques
- Hashing is a fundamental technique used to map data to specific locations in a data structure.
- Various methods can be employed internally to calculate hash values, each with its own unique approach and applications.

 # In this editorial, we will delve into three widely used hashing methods:
  -  the division method,
  -  the folding method,
  -  and the mid-square method. Additionally,
  - we will explore how the division method implements chaining internally to resolve collisions, along with common problems associated with these techniques.

# Division Method: A Detailed Explanation
 - The division method is one of the simplest and most commonly used hashing techniques.
 - The fundamental idea behind this method is to divide the key by a suitable prime number and use the remainder as the hash value.
 - The choice of the prime number is crucial as it ensures a more uniform distribution of hash values, thereby minimizing collisions.

#  Steps of the Division Method
 - Choose a Prime Number: The first step is to select a large prime number, denoted as p, which will serve as the divisor in the hashing  process.
 - Prime numbers are preferred because they tend to distribute hash values more uniformly across the available range.

 - Compute the Hash Value: For a given key k, the hash value h(k) is computed using the formula:
   h(k) = k % p
 - Here, the modulus operation (%) returns the remainder when the key k is divided by the prime number p.
 - This remainder serves as the index in the hash table where the key will be stored.

# Folding Method
 - The folding method is a hashing technique where the key is divided into equal parts, and these parts are added together to form the hash value.
 - If the key cannot be evenly divided, the remaining digits can be handled by various strategies such as padding or wrapping around.

# Mid-Square Method
- The mid-square method involves squaring the key and then extracting a portion of the resulting digits, typically from the middle, to  use as the hash value.
-  This method benefits from its ability to spread out similar keys more uniformly across the hash table.

# Chaining in Division Method: Internal Implementation
 - Chaining is a collision resolution technique commonly used in conjunction with the division method.
 -  When two keys hash to the same index, chaining stores them in a linked list or another secondary data structure at that index, thereby allowing multiple elements to occupy the same position in the hash table.

# Steps of Chaining Implementation
 - Initialize the Hash Table: Begin by creating an array of linked lists (or another secondary structure) where each element in the array corresponds to an index in the hash table.
 - Insert Key into the Hash Table: For each key k, compute the hash value using the division method.
 -  If a collision occurs (i.e., the computed index is already occupied), append the new key to the linked list at that index.
  - Resolve Collisions: In the event of multiple keys hashing to the same index, chaining ensures that each key is accessible by traversing the linked list at that index.

# Problems and Challenges
 - While these hashing techniques are powerful, they are not without challenges:

  # Collisions:
    -  Even with well-chosen hash functions, collisions are inevitable.
    -  Techniques like chaining help manage collisions, but they can introduce additional complexity and performance overhead.

  # Load Factor:
   - The efficiency of hashing is highly dependent on the load factor, which is the ratio of the number of elements to the number of available positions in the hash table.
   - A high load factor increases the likelihood of collisions, while a low load factor can lead to inefficient use of memory.

  # Choice of Hash Function:
   - The choice of a hash function is critical in ensuring uniform distribution of keys.
   - Poorly chosen hash functions can lead to clustering, where many keys map to the same or nearby indices, degrading performance.

  # Memory Overhead:
   - Techniques like chaining require additional memory to store linked lists or other secondary structures, which can become significant in large-scale applications. 




