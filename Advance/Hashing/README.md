# Hashing in Data Structures and Algorithms (DSA)

# Introduction
 - Hashing is a technique used in data structures and algorithms to store and retrieve data efficiently.
 - It uses a hash function to map keys to values in a fixed-size table known as a hash table. 
 - The goal is to provide quick lookups, insertions, and deletions in constant time (O(1)) in the best case.

# Hashing Concepts
 1. Hash Function
 - A hash function is used to compute an index (or hash code) for a given key. A good hash function should:
 - Distribute keys uniformly across the table
 - Be fast to compute

  Minimize collisions
  Example:
 int hashFunction(int key, int tableSize) {
    return key % tableSize;
 }

 2. Collision Handling Techniques
 - Since multiple keys may produce the same hash, collision handling techniques are used:
 - Chaining: Uses linked lists to store multiple values at the same hash index.
 - Open Addressing: Finds alternative slots within the table (e.g., linear probing, quadratic probing, double hashing).

 # Applications of Hashing
 - Data Caching: Used in databases, web caching, and CPU caches.
 - Password Storage: Hashing is used to securely store passwords.
 - Symbol Tables: Used in compilers and interpreters.
 - Checking Duplicates: Quickly determine duplicate values in an array.
 
 # Conclusion
 - Hashing is a powerful technique for optimizing search, insert, and delete operations in various applications.
- Understanding different hashing methods and collision resolution strategies helps in designing efficient algorithms.

