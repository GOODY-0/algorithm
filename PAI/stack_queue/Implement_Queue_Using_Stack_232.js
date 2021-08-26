var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  const limit = this.stack1.length - 1;
  for (let i = 0; i < limit; i++) {
    this.stack2.push(this.stack1.pop());
  }
  const output = this.stack1[0];
  this.stack1 = this.stack2.reverse();
  this.stack2 = [];
  return output;
};

MyQueue.prototype.peek = function () {
  return this.stack1[0];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 ? true : false;
};

const obj = new MyQueue();

obj.push(1);
obj.push(2);
obj.peek();
obj.pop();
obj.empty();
