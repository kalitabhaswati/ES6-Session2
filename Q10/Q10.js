class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.top = null;
        this.size = 0;
    }

    //Inserts element the top
    push(item) {
        let temp = new Node(item);
        if (this.top == null)
            this.top = temp;
        else {
            temp.next = this.top;
            this.top = temp;
        }
        this.size++;
    }

    pop() {
        if (this.top == null) {
            console.log("Stack is Empty");
            return;
        }
        else {
            console.log("Popped element is ", this.top.data);
            var current = this.top;
            this.top = current.next;
            // delete current;
            this.size--;
        }
    }

    peek() {
        if (this.top == null) {
            console.log("Stack is Empty");
            return -1;
        }
        else {
            return this.top.data;
        }
    }

    length() {
        return this.size;
    }
}

let s1 = new Stack();
console.log(`First element of the stacl --> ${s1.peek()}`); //-1 as stack is currently empty
console.log('Pusing 23');
s1.push(23);
console.log('Pusing 99');
s1.push(99);
console.log('Pusing 2121');
s1.push(2121);
console.log(`First element of the stacl --> ${s1.peek()}`);
console.log('Performing POP operation');
s1.pop();
console.log(`First element of the stacl --> ${s1.peek()}`);
console.log(`Length of the Stack is --> ${s1.length()}`);