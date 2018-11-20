# Binary Search Tree
Binary search trees (BST) are called ordered or **sorted binary trees**. 
In a binary search tree all the left sub tree elements are less than the root and all the right sub tree elements are greater than the root element.<br>
*This property is satisfied at every node of the tree.*

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/200px-Binary_search_tree.svg.png"><br>
    A binary search tree of size 9 and depth 3, with 8 at the root.
</p>

## Creation of the Tree and Nodes
The tree and the nodes can be created easily.
```javascript
// Constructor function for creating the tree
function Tree() {
    this.root = null;
}
```
```javascript
// Constructor function for creating nodes
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
```
```javascript
var tree = new Tree();
// populating the tree with some values
for (var i = 0; i < 10; i++) {
    tree.addValue(Math.floor(Math.random() * 100));
}
console.log(tree);
```
<p align="center">
    ![Tree](assets/images/tree.png)
</p>


### Traversal
Once the binary search tree has been created, its elements can be retrieved in-order by recursively traversing the left subtree of the root node, accessing the node itself, then recursively traversing the right subtree of the node, continuing this pattern with each node in the tree as it's recursively accessed.<br>

```javascript
Tree.prototype.traverse = function () {
    this.root.visit();
}
Node.prototype.visit = function () {
    if (this.left != null)
        this.left.visit();
    console.log(this.value);
    if (this.right != null)
        this.right.visit();
}
```
<p align="center">
    ![Tree](assets/images/tree_traverse.png)
</p>
*An in-order traversal of a binary search tree will always result in a sorted list of node items.*

## Operations
Binary search trees support three main operations: insertion of elements, deletion of elements, and searching (checking whether a value is present).

### Searching
We begin by examining the root node. If the tree is *null*, the value we are searching for does not exist in the tree. Otherwise, if the value equals that of the root, the search is successful and we return the node. If the value is less than that of the root, we search the left subtree. Similarly, if the value is greater than that of the root, we search the right subtree. This process is repeated until the value is found or the remaining subtree is null. If the searched value is not found after a null subtree is reached, then the value is not present in the tree. This is easily implemented by *recursion*

```javascript
Tree.prototype.search = function (value) {
    var foundNode = this.root.searchValue(value);
    if (foundNode != null) {
        return foundNode;
    } else {
        return 'Not found';
    }
}

Node.prototype.searchValue = function (value) {
    if (this.value == value) {
        return this;
    }
    else if (this.value > value && this.left != null) {
        return this.left.searchValue(value);
    }
    else if (this.value < value && this.right != null) {
        return this.right.searchValue(value);
    }
    return null;
}
```
<p align="center">
    ![Tree](assets/images/tree_search.png)
</p>

### Insertion
Insertion begins as a search would begin, we examine the root and recursively insert the new node to the left subtree if its key is less than that of the root, or the right subtree if its key is greater than or equal to the root.

```javascript
Tree.prototype.addValue = function (value) {
    var n = new Node(value);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}
Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        if (this.left == null)
            this.left = n;
        else
            this.left.addNode(n);
    }
    else if (n.value > this.value) {
        if (this.right == null)
            this.right = n;
        else
            this.right.addNode(n);
    }
}
```
<p align="center">
    ![Tree](assets/images/add_value.png)
</p>
