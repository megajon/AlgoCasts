class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        if (!this.head) {
            return 0;
        }

        let node = this.head;
        let size = 0;
        while (node) {
            size++;
            if (!node.next) {
                return size;
            } else {
                node = node.next;
            }
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            } else {
                node = node.next;
            }
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return null;
        }

        if (this.size() === 1) {
            this.head = null;
        }

        let node = this.head;
        while (node) {
            if (!node.next.next) {
                node.next = null;
                return;
            } else {
                node = node.next;
            }
        }

    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                node.next = new Node(data);
                return;
            } else {
                node = node.next;
            }
        }
    }

    getAt(i) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        let count = 0;
        while (node) {
            if (i === count) {
                return node;
            } else {
                count++;
                node = node.next;
            }
        }
    }


}


module.exports = {Node, LinkedList};