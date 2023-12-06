class HashTable {
      constructor(size) {
            this.size = size
            this.table = new Array(size)
      }

      hash(key) {
            let hash = 0
            for(let i=0; i<key.length; i++){
                  hash += key.charCodeAt(i)
            }
            return hash % this.size
      }

      put(key, value) {
            let index = this.hash(key)
            this.table[index] = value
      }

      get(key) {
            let index = this.hash(key)
            return this.table[index]
      }

      remove(key) {
            let index = this.hash(key)
            delete this.table[index]
      }

      contains() {
            console.log(this.table);
      }
}

const hashTable = new HashTable(10);

hashTable.put("John", 25);
hashTable.put("Jane", 30);
hashTable.put("Doe", 35);

hashTable.remove("Jane");
hashTable.contains();
