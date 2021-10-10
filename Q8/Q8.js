
        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;
            }
        }
        
        class LinkedList {
            constructor() {
                this.head = null;
                this.size = 0;
            }

            addFirst(data) {
                var node = new Node(data); // create new Node

                var current; //to store current node

                if (this.head == null)
                    this.head = node;
                else {
                    current = this.head;
                    node.next = current;
                    this.head = node;
                }
                this.size++;
            }

            addLast(data) {
                var node = new Node(data); // create new node
                var current; // to store current Node

                if (this.head == null)
                    this.head = node;
                else {
                    current = this.head;
                    while (current.next != null) {
                        current = current.next;
                    }
                    current.next = node;
                }
                this.size++;
            }

            getFirst() {
                if (this.head == null)
                    return -1;
                else {
                    return this.head.data;
                }
            }

            getLast() {
                if (this.head == null)
                    return -1;
                else {
                    var current = this.head;

                    while (current.next) {
                        current = current.next;
                    }
                    return current.data;
                }
            }

            length() {
                return this.size;
            }
        }

        let ll = new LinkedList();
        ll.addFirst(7);
        ll.addFirst(3);
        ll.addLast(1998);

        console.log(`Element at the front is : ${ll.getFirst()}`);
        console.log(`Element at the last is : ${ll.getLast()}`);
        console.log(`Length of the Linked List is : ${ll.length()}`);
   