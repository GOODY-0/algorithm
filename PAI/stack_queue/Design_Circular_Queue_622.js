/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.cq = [];
  this.k = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.cq.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.cq.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  this.cq[0];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  this.cq[this.cq.length - 1];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.cq.length === 0 ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.cq.length === this.k ? true : false;
};

const obj = new MyCircularQueue(3);
obj.enQueue(1);
obj.enQueue(2);
obj.enQueue(3);
obj.enQueue(4);
obj.Rear();
obj.isFull();
obj.deQueue();
obj.enQueue(4);
obj.Rear();
