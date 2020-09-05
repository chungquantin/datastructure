class Node {
	constructor(val, prev, next) {
		this.val = val;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		this.length--;
		if (!this.head) return undefined;
		let current = this.tail;
		let prev = current.prev;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = prev;
			this.tail.next = null;
		}
		return this;
	}
}

let list = new DoublyLinkedList();

list.push("Hello");
list.push("World");
list.push("Chase");
console.log(list.pop());
