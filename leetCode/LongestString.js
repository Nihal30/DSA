// // Find the Lexicographically Largest String From the Box I

// // You are given a string word, and an integer numFriends.

// // Alice is organizing a game for her numFriends friends. There are multiple rounds in the game, where in each round:

// // word is split into numFriends non-empty strings, such that no previous round has had the exact same split.
// // All the split words are put into a box.
// // Find the lexicographically largest string from the box after all the rounds are finished.

// function getMaxLexicographicString(word, numFriends) {
//   const box = [];

//   function backtrack(start, partsLeft, path) {
//     if (partsLeft === 0 && start === word.length) {
//       for (let part of path) box.push(part);
//       return;
//     }
//     if (partsLeft === 0 || start === word.length) return;

//     for (let i = start + 1; i <= word.length - partsLeft + 1; i++) {
//       const part = word.slice(start, i);
//       backtrack(i, partsLeft - 1, [...path, part]);
//     }
//   }

//   backtrack(0, numFriends, []);
//   return box.sort().at(-1); // Lexicographically last
// }


// optimal Using sliding window 

function getMaxLexicographicString(word, numFriends) {
  let maxStr = "";

  const n = word.length;

  function dfs(start, splitsLeft, path) {
    if (splitsLeft === 1) {
      const lastPart = word.slice(start);
      path.push(lastPart);
      for (let part of path) {
        if (part > maxStr) maxStr = part;
      }
      path.pop(); // backtrack
      return;
    }

    // Sliding window logic: Move the split point from start+1 to a valid end
    for (let end = start + 1; end <= n - splitsLeft + 1; end++) {
      const current = word.slice(start, end);
      path.push(current);
      dfs(end, splitsLeft - 1, path);
      path.pop(); // backtrack
    }
  }

  dfs(0, numFriends, []);
  return maxStr;
}
