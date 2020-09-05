// Singly linked List

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
		return this;
	}
	set(val, position) {
		//O(1)
		let foundNode = this.get(position);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(val, position) {
		//O(1)
		if (position >= this.length || position < 0) return false;
		let insertedNode = new Node(val);
		let foundNode = this.get(position);
		let folNode = this.get(position + 1);
		if (foundNode) {
			foundNode.next = insertedNode;
			insertedNode.next = folNode;
			this.length++;
			return true;
		}
		return false;
	}
	remove(position) {
		//O(n) //O(1)
		switch (true) {
			case position >= this.length || position < 0:
				return false;
			case position === 0:
				return this.shift();
			case position === this.length - 1:
				return this.pop();
			default:
				this.get(position - 1).next = this.get(position + 1);
				this.length--;
				return true;
		}
	}
	get(position) {
		//O(n)
		if (position >= this.length || position < 0) return null;
		let current = this.head;
		let index = 0;
		while (index !== position) {
			current = current.next;
			index++;
		}
		return current;
	}
	pop() {
		//O(n)
		if (!this.head) return undefined; // If the linked list is empty, return nothing
		let current = this.head;
		let pre = current;
		while (current.next) {
			pre = current;
			current = pre.next;
		}
		pre.next = null;
		this.tail = pre;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
	shift() {
		//O(1)
		if (!this.head) return undefined;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return this;
	}
	unshift(val) {
		//O(1)
		let newNode = new Node(val);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("This");
list.push("Chase");
list.set("That", 3);
list.insert("Bello", 2);
console.log(list.get(1));
list.remove(0);
console.log(list.get(1));
