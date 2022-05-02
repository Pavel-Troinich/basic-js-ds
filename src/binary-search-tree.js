const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node

{

    constructor(data)

    {

        this.data = data;

        this.left = null;

        this.right = null;

    }

} 

class BinarySearchTree {

  constructor()

    {
        this.root = null;
    }

  root() {
    return this.root;
  }

  add(data) {
    let newNode = new Node(data);

    if(this.root === null) {
        this.root = newNode;
      }  else
        this.insertNode(this.root, newNode); 
  }

  insertNode(node, newNode) {

    if(newNode.data < node.data) {

        if(node.left === null) {
            node.left = newNode;
        } else
            this.insertNode(node.left, newNode); 
    }
    else
    {
        if(node.right === null) {
            node.right = newNode;
        } else
            this.insertNode(node.right,newNode);
    }

} 

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(node, data) {
    if(node === null) {
        return null;
    } else if(data < node.data) {
        return this.search(node.left, data);
    } else if(data > node.data) {
      return this.search(node.right, data);
    } else
        return node; 
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min(node) {
    if(node.left === null)
        return node;
    else
        return this.min(node.left); 
  }

  max(node) {
    if(node.right === null)
        return node;
    else
        return this.max(node.right); 
  }
}

module.exports = {
  BinarySearchTree
};