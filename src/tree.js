/*
You are given a basic implementation of a binary tree node in JavaScript.
Your task is to implement different tree traversal algorithms: Pre-order, In-order, and Post-order traversal.
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(root) {
  // Your implementation
  const result = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }

  traverse(root);
  return result;
}

function preOrderTraversal(root) {
  // Your implementation
  const result = [];

  function traverse(node) {
    if (!node) return;
    result.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return result;
}

function postOrderTraversal(root) {
  // Your implementation
  const result = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.value);
  }

  traverse(root);
  return result;
}

/* sample binary tree
        1
       / \
      2   3
     / \   \
    4   5   6
*/
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(preOrderTraversal(root)); // Output: [1, 2, 4, 5, 3, 6]
console.log(inOrderTraversal(root)); // Output: [4, 2, 5, 1, 3, 6]
console.log(postOrderTraversal(root)); // Output: [4, 5, 2, 6, 3, 1]
