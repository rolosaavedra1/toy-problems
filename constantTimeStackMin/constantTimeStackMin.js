/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
var Stack = function () {
  this.storage = [];
  this.minimums = [];
};

// add an item to the top of the stack
this.prototype.push = function (value) {
  //if the size is 0, just push it
  //this.minimum.push(value);
  //when any value is added, check if it is >= than this.minimum.
  //if so, just push it
  //if not, this.minimum.push(value)
  //then push it.
};

// remove an item from the top of the stack
this.prototype.pop = function () {
  //if size is 0, don't do anything
  //if this.storage(this.size() - 1) equals last item of minimums
  // just remove it from top, then remove it from minimum
  // if not, just remove it
};

// return the number of items in the stack
this.prototype.size = function () {
  return this.storage.length;
};

// return the minimum value in the stack
this.prototype.min = function () {
  return this.minimums.length;

};


