var ListNode = function (val = null, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
};

var MyCircularDeque = function (k) {
  this.k = k;
  this.length = 0;
  this.head = new ListNode();
  this.tail = new ListNode();
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.head = new ListNode(value, null, null);
    this.tail = this.head;
  } else {
    const temp = this.head;
    const newHead = new ListNode(value, this.tail, temp);
    this.head = newHead;
    this.tail.next = this.head;
  }
  this.length += 1;
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  if (this.isEmpty()) {
    this.head = new ListNode(value, null, null);
    this.tail = this.head;
  } else {
    const temp = this.tail;
    const newTail = new ListNode(value, temp, null);
    temp.next = newTail;
    this.tail = newTail;
  }
  this.length += 1;
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  this.length -= 1;
  this.head = this.head.next;
  this.tail.next = this.head;
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
  this.length -= 1;
  this.tail = this.tail.prev;
  this.head.prev = this.tail;
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.head.val;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() ? -1 : this.tail.val;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.length === this.k;
};

const obj = new MyCircularDeque(3);
[
  obj.insertLast(1),
  obj.insertLast(2),
  obj.insertFront(3),
  obj.insertFront(4),
  obj.getRear(),
  obj.isFull(),
  obj.deleteLast(),
  obj.insertFront(4),
  obj.getFront(),
].forEach((func) => {
  console.log(func);
});
