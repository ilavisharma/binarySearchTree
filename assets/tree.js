// the tree object is just a wrapper for the nodes

function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function (value) {
    var n = new Node(value);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}

Tree.prototype.traverse = function () {
    this.root.visit();
}

Tree.prototype.search = function (value) {
    var foundNode = this.root.searchValue(value);
    if (foundNode != null) {
        return foundNode;
    } else {
        return 'Not found';
    }
}

var tree = new Tree();

for (var i = 0; i < 10; i++) {
    tree.addValue(Math.floor(Math.random() * 100));
}
console.log(tree);