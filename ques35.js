
let head = null;
function createNode(value) {
    let newNode = {
        val: value,
        next: null
    };
    return newNode;
}

 // =========================== ** ============================ ** =========================== // 
function insert(value) {
    let newNode = createNode(value);

    if (head == null) {
        head = newNode;
    } 
    else {
        let temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }
}

 // =========================== ** ============================ ** =========================== // 
 
function remove(value) {
    if (head == null) {
        return;
    }

    if (head.val == value) {
        head = head.next;
        return;
    }

    let temp = head;

    while (temp.next != null) {
        if (temp.next.val == value) {
            temp.next = temp.next.next;
            return;
        }
        temp = temp.next;
    }
}

 // =========================== ** ============================ ** =========================== // 
function search(value) {
    let temp = head;

    while (temp != null) {
        if (temp.val == value) {
            return true;
        }
        temp = temp.next;
    }

    return false;
}

 // =========================== ** ============================ ** =========================== // 
function display() {
    let temp = head;

    while (temp != null) {
        console.log(temp.val);
        temp = temp.next;
    }
}


insert(15);
insert(25);
insert(35);

console.log("Linked List:");
display();

console.log("Search 25:", search(25));

remove(25);

console.log("After deleting 25:");
display();
