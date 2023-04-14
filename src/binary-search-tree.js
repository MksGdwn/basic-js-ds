const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.start = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.start;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.start) {
      this.start = new Node(data);
    } else {
      let current = this.start;
      
      while(current) {
        if(data > current.data) {
          if(current.right) {
            current = current.right;
          } else {
            current.right = new Node(data);
            break;
          }
        } else {
          if(current.left) {
            current = current.left;
          } else {
            current.left = new Node(data);
            break;
          }
        }
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let current = this.start;

    while(current) {
      if(current.data === data) {
        return true;
      }

      if(data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.start;

    while(current) {
      if(current.data === data) {
        return current;
      }

      if(data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.has(data)) {
      let root = null;
      let current = this.start;

      while(current.data !== data) {
        if(current.data > data) {
          root = current;
          current = root.left;
        } else {
          root = current;
          current = root.right;
        }
      }

      if(current.left == null && current.right == null) {
        if(root.data > current.data) {
          root.left = null;
        } else {
          root.right = null;
        }
      } else if(current.left == null) {
        if(root.data > current.data) {
          root.left = current.right;
        } else {
          root.right = current.right;
        }
      } else if(current.right == null) {
        if(root.data > current.data) {
          root.left = current.left;
        } else {
          root.right = current.left;
        }
      } else {
        let leafRoot = current;
        let leaf = current.left;

        while(leaf.right) {
          leafRoot = leaf;
          leaf = leaf.right;
        }

        current.data = leaf.data;
        
        if(leaf.left) {
          leafRoot.right = leaf.left;
        } else {
          leafRoot.right = null;
        }
      }

    } else {
      return false;
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let current = this.start;

    while(current) {
      if(current.left === null) {
        return current.data;
      } else {
        current = current.left;
      }
    }

    return current;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let current = this.start;

    while(current) {
      if(current.right === null) {
        return current.data;
      } else {
        current = current.right;
      }
    }

    return current;
  }
}

module.exports = {
  BinarySearchTree
};