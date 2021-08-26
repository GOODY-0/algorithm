var MyCircularQueue = function (k) {
  this.data = new Uint16Array(k);
  this.k = k;
  this.head = 0;
  this.tail = -1;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.tail = (this.tail + 1) % this.k;
  this.data[this.tail] = value;
  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  if (this.head === this.tail) (this.head = 0), (this.tail = -1);
  else this.head = (this.head + 1) % this.k;
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.data[this.head];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.data[this.tail];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.tail === -1;
};

MyCircularQueue.prototype.isFull = function () {
  return !this.isEmpty() && (this.tail + 1) % this.k === this.head;
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
