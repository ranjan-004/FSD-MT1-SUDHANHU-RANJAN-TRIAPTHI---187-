
function makeNode(value) {
    let node = {
        val: value,
        left: null,
        right: null
    };
    return node;
}

let root = null;

 // =========================== ** ============================ ** =========================== // q
function insertBST(value) {
    let newNode = makeNode(value);

    if (root == null) {
        root = newNode;
        return;
    }

    let temp = root;

    while (true) {
        if (value < temp.val) {
            if (temp.left == null) {
                temp.left = newNode;
                return;
            }
            temp = temp.left;
        }
        else {
            if (temp.right == null) {
                temp.right = newNode;
                return;
            }
            temp = temp.right;
        }
    }
}

 // =========================== ** ============================ ** =========================== // 
function searchBST(value) {
    let temp = root;

    while (temp != null) {
        if (temp.val == value) {
            return true;
        }
        else if (value < temp.val) {
            temp = temp.left;
        }
        else {
            temp = temp.right;
        }
    }

    return false;
}

 // =========================== ** ============================ ** =========================== // 
function inorder(node) {
    if (node != null) {
        inorder(node.left);
        console.log(node.val);
        inorder(node.right);
    }
}

 // =========================== ** ============================ ** =========================== // 
insertBST(45);
insertBST(20);
insertBST(60);
insertBST(10);
insertBST(30);

console.log("Inorder Traversal:");
inorder(root);

console.log("Search 30:", searchBST(30));
console.log("Search 99:", searchBST(99));
