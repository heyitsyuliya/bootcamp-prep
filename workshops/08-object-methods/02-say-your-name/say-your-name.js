// YOUR CODE BELOW
// Create a new object, `me2`. Expand the `myGreeting` method from me so it accepts
// another object with a name property. The returned greeting should now greet the
// other object by name.

// ```javascript
// console.log(me2.name); // 'Tarana'
// console.log(you.name); // 'Alyssa'
// me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'
// ```

let me2 = {
  name: 'Yulz',
  getGreeting: function(friend){
    return `Hi ${friend.name}, my name is ${this.name}.`
  }
}