var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

MyStack.prototype.pop = function () {
  const limit = this.queue1.length - 1;
  for (let i = 0; i < limit; i++) {
    this.queue2.push(this.queue1.shift());
  }

  const output = this.queue1[0];
  this.queue1 = this.queue2;
  this.queue2 = [];
  return output;
};

MyStack.prototype.top = function () {
  return this.queue1[this.queue1.length - 1];
};

MyStack.prototype.empty = function () {
  if (this.queue1.length === 0) return true;
  return false;
};
