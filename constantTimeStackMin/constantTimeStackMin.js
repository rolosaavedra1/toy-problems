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
Stack.prototype.push = function (value) {
 
  if (this.size()) {
    //when any value is added, check if it is >= than this.minimum.
  //if so, just push it
   if (value > this.minimums[this.minimums.length - 1]) {
    this.storage.push(value);
   } else {
     this.minimums.push(value);
     this.storage.push(value);
   }
  
  //if not, this.minimum.push(value)
  //then push it.

  //if the size is 0, just push it, also add it to minimums
  } else {
    this.storage.push(value);
    this.minimums.push(value);
  }
  
};

// remove an item from the top of the stack
Stack.prototype.pop = function () {
  //if size is 0, don't do anything
  if (this.storage.size()) {
    //if last item in stack equals last item of minimums
  // just remove it from top, then remove it from minimum
    if (this.storage[this.size() - 1] === this.minimums[this.minimums.length - 1]) {
      this.storage.pop();
      this.minimums.pop();
      // if not, just remove it
    } else {
      this.storage.pop();
    }
  }
};

// return the number of items in the stack
Stack.prototype.size = function () {
  return this.storage.length;
};

// return the minimum value in the stack
Stack.prototype.min = function () {
  return this.minimums[this.minimums.length - 1];
};
