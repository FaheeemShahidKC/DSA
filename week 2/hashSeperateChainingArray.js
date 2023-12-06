class HashTableArray {
      constructor(size) {
            this.size = size
            this.table = new Array(size)
      }

      hash(key) {
            let hash = 0
            for (let i = 0; i < key.length; i++) {
                  hash += key.charCodeAt(i)
            }
            return hash % this.size
      }

      put(key, value) {
            let index = this.hash(key)
            let bucket = this.table[index]
            if (!bucket) {
                  this.table[index] = [[key, value]]
            } else {
                  const sameKey = bucket.find(item => item[0] === key)
                  if (sameKey) {
                        sameKey[1] = value
                  }else{
                        bucket.push([key, value])
                  }
            }
      }

      get(key) {
            let index = this.hash(key)
            let bucket = this.table[index]
            if (bucket) {
                  const sameKey = bucket.find(item => item[0] === key)
                  if (sameKey) {
                        return sameKey[1]
                  }
            }
      }

      remove(key) {
            let index = this.hash(key)
            let bucket = this.table[index]
            if (bucket) {
                  const sameKey = bucket.find(item => item[0] === key)
                  if (sameKey) {
                        bucket.splice(bucket.indexOf(sameKey),1)
                  }
            }
      }

      contains() {
            console.log(this.table);
      }
}

const hashTable = new HashTableArray(10);

hashTable.put("John", 25);
hashTable.put("Jane", 30);
hashTable.put("Doe", 35);
hashTable.put("oDe", 35);
hashTable.get("John")
// hashTable.remove("Doe");
hashTable.contains();