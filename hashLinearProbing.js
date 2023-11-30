class HashTable {
      constructor(size) {
            this.size = size;
            this.keys = new Array(size);
            this.values = new Array(size);
      }

      hash(key) {
            let hashValue = 0;
            for (let i = 0; i < key.length; i++) {
                  hashValue += key.charCodeAt(i);
            }
            return hashValue % this.size;
      }

      put(key, value) {
            let index = this.hash(key);

            let i = 1
            while (this.keys[index] !== undefined) {
                  index = (index + i * i) % this.size;
                  i++
            }

            this.keys[index] = key;
            this.values[index] = value;
      }

      get(key) {
            let index = this.hash(key);

            while (this.keys[index] !== key) {
                  index = (index + 1) % this.size;

                  if (this.keys[index] === undefined) {
                        return undefined;
                  }
            }

            return this.values[index];
      }

      display(){
            console.log(this.values);
      }


}

const hashTable = new HashTable(10);

hashTable.put("John", 25);
hashTable.put("Jane", 30);
hashTable.put("Doe", 35);
hashTable.display()
console.log(hashTable.get("John")); 
console.log(hashTable.get("Jane")); 
console.log(hashTable.get("Doe"));  
console.log(hashTable.get("Smith")); 