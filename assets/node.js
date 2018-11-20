function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
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

Node.prototype.visit = function () {
    if (this.left != null)
        this.left.visit();
    console.log(this.value);
    if (this.right != null)
        this.right.visit();
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