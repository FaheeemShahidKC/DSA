class TrieNode {
      constructor() {
            this.children = {};
            this.isEndOfWord = false;
      }
}

class Trie {
      constructor() {
            this.root = new TrieNode();
      }

      insert(word) {
            let node = this.root;
            for (let char of word) {
                  if (!node.children[char]) {
                        node.children[char] = new TrieNode();
                  }
                  node = node.children[char];
            }
            node.isEndOfWord = true;
      }

      search(word) {
            let node = this.root;
            for (let char of word) {
                  if (!node.children[char]) {
                        return false;
                  }
                  node = node.children[char];
            }
            return node.isEndOfWord;
      }

      startsWith(prefix) {
            let node = this.root;
            for (let char of prefix) {
                  if (!node.children[char]) {
                        return false;
                  }
                  node = node.children[char];
            }
            return true;
      }
}

// Example usage:
const trie = new Trie();
trie.insert("abcd");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("abdc");
console.log(trie.search("app")); // true
console.log(trie.root);
console.log("====================");
console.log(trie.root.children);
console.log("====================");
console.log(trie.root.children.a);
console.log("====================");
console.log(trie.root.children.a.children);
console.log("====================");
console.log(trie.root.children.a.children.b);