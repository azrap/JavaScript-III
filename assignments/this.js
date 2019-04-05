/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Default Binding: By default, this binds to the Window. If no reference is attached to this, it assumes it's bound to the current window and not anything beyond it. I.e. the window is the "forrest" where this resides by default.
* 2. Implicit Binding: When a method is called from an object, the object is referred to as "this". i like to think of this as a pronoun for the object I'm referencing.

* 3. Explicit Binding: This happens when .call(). .apply(), or .bind() are used on a function. It's called explicit due to us explicitly pass in a this context.
* 4. New Binding: This occurs when the new keyword is used to create an object via a constructor function. In this case, this refers to that specific instance of the object that is created by the constructor.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
function windBind(test) {
    console.log(this);
    return test;
  }
  windBind("hello");

// Principle 2

// code example for Implicit Binding

const impBindObj= {
    name:'Zelda',
    sayMyName: function(){
        console.log(`My name is ${this.name}`);
    }
}

impBindObj.sayMyName()
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding