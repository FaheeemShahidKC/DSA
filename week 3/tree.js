class Node {
      constructor(value) {
            this.value = value
            this.right = null
            this.left = null
      }
}

class Tree {

      constructor() {
            this.root = null
      }

      insert(value) {
            let node = new Node(value)
            let curr = this.root
            if (!curr) {
                  this.root = node
                  return
            }

            while (true) {
                  if (value < curr.value) {
                        if (curr.left === null) {
                              curr.left = node
                              break
                        } else {
                              curr = curr.left
                        }
                  } else {
                        if (curr.right === null) {
                              curr.right = node
                              break
                        } else {
                              curr = curr.right
                        }
                  }
            }
      }

      contains(value) {
            let curr = this.root
            while (curr !== null) {
                  if (value < curr.value) {
                        curr = curr.left
                  } else if (value > curr.value) {
                        curr = curr.right
                  } else {
                        return true
                  }
            }
            return false
      }

      remove(value, curr = this.root, parent = null) {
            while (curr !== null) {
                  if (value < curr.value) {
                        parent = curr
                        curr = curr.left
                  } else if (value > curr.value) {
                        parent = curr
                        curr = curr.right
                  } else {
                        if (curr.right !== null && curr.left !== null) {
                              curr.value = this.min(curr.right)
                              this.remove(curr.value, curr.right, curr)
                        } else {
                              if (parent === null) {
                                    if (curr.right === null) {
                                          this.root = curr.left
                                    } else {
                                          this.root = curr.right
                                    }
                              } else {
                                    if (parent.left === curr) {
                                          if (curr.right === null) {
                                                parent.left = curr.left
                                          } else {
                                                parent.left = curr.right
                                          }
                                    } else {
                                          if (curr.right === null) {
                                                parent.right = curr.left
                                          } else {
                                                parent.right = curr.right
                                          }
                                    }
                              }
                        }
                        break
                  }
            }
      }

      min(curr = this.root) {
            if (!curr.left) {
                  return curr.value
            } else {
                  return this.min(curr.left)
            }
      }

      max(curr = this.root) {
            if (!curr.right) {
                  return curr.value
            } else {
                  return this.min(curr.right)
            }
      }

      inOrder(node = this.root){
            if(node !== null){
                  this.inOrder(node.left)
                  console.log(node.value);
                  this.inOrder(node.right)
            }
      }

      preOrder(node = this.root){
            if(node !== null){
                  console.log(node.value);
                  this.preOrder(node.left)
                  this.preOrder(node.right)
            }
      }

      postOrder(node = this.root){
            if(node !== null){
                  this.postOrder(node.left)
                  this.postOrder(node.right)
                  console.log(node.value);
            }
      }

}

const tree = new Tree()
tree.insert(8)
tree.insert(7)
tree.insert(9)
tree.inOrder()
tree.preOrder()
tree.postOrder()
// tree.remove(8)
// console.log(tree.contains(7))