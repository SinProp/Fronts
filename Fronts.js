class Node {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;

    }

    // problem 1
    addFront(data) {
        let new_node = new Node(data);
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
    }

    // problem 2
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        let deletedNode = this.head;
        this.head = deletedNode.next;
        deletedNode.next = null; // this is important to point the orignal head node to something that tells the cpmputer to clean it up at some point 
        return this.head;

    }

    frontValue(){
        return this.head.value
    }

    length(){
        if(this.head == null){
            return 0;
        }
        let runner = this.head;
        let count = 0;
        while(runner != null){
            count++;
            runner = runner.next
        }
        return count;

    }
}


let runner = this.head;
while(runner != null){
    runner = runner.next
}

let list1 = new SLL();

let node1 = new Node(9);
let node2 = new Node(4);
// let node3 = new Node(5);
// let node4 = new Node(9);

node1.next = node2
list1.head = node1
console.log(list1.frontValue())
console.log(list1.length())

var problem1 = new SLL();
var problem2 = new SLL();
problem1.addFront(5);
// problem2.addFront(4);

// problem2.head = node3
// node3.next = node4
problem2.addFront(6);
console.log(problem2);
problem2.removeFront();
console.log(problem2);
problem2.addFront(7);
console.log(problem2.frontValue());
// console.log(problem2);


