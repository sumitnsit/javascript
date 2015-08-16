JavaScript is the first lambda language to go mainstream. Deep down, JavaScript has more in common with Lisp and Scheme than with Java.

`JSLint`, a JavaScript parser that can analyze a JavaScript program and report on the bad parts that it contains. `JSLint` provides a degree of rigor that is generally lacking in JavaScript development. It can give you confidence that your programs contain only the good parts.

### Add Method
The following code adds a function called `newMethod` in the `Function` object. Which can be used to add more functions to the `Function` object, which will be applicable to all the functions.

```javascript
Function.prototype.newMethod = function (name, func) {
  this.prototype[name] = func;
  return this;
};
```
### Numbers
JavaScript has a single number type. Internally, it is represented as 64-bit floating point

The value `NaN` is a number value that is the result of an operation that cannot produce a normal result. `NaN` is not equal to any value, including itself. You can detect `NaN` with the `isNaN(number)` function.

### Strings
JavaScript was built at a time when Unicode was a 16-bit character set, so all characters in JavaScript are 16 bits wide.

Strings are immutable. The following statement returns `true`

```javascript
'c' + 'a' + 't' === 'cat'
```

#### falsy values

1. `false`
2. `null`
3. `undefined`
4. The empty string ''
5. The number `0`
6. The number `NaN`


### for in - loop
It is usually necessary to test object . hasOwnProperty( variable ) to determine whether the property name is truly a member of the object or was found instead on the prototype chain.

```javascript
for (myvar in obj) {
  if (obj.hasOwnProperty(myvar)) {
  
  }
}
```
​
The values produced by typeof are `number` , `string` , `boolean` , `undefined` , `function` , and `object` . If the operand is an array or null , then the result is `object` , which is wrong.

### Objects

The simple types of JavaScript are `numbers`, `strings`, `booleans` (`true` and `false`), `null` , and `undefined`. All other values are objects . `Numbers`, `strings`, and `booleans` are object-like in that they have methods, but they are immutable. Objects in JavaScript are mutable keyed collections.

A property's name can be any string, including the empty string.

Quotes are required around "first-name" , but are optional around first_name.

Values can be retrieved from an object by wrapping a string expression in a `[]` suffix. If the string expression is a string literal, and if it is a legal JavaScript name and not a reserved word, then the `.` notation can be used instead.

Attempting to retrieve values from undefined will throw a `TypeError` exception. This can be guarded against with the `&&` operator

```javascript

var value = flight.equipment && flight.equipment.model
```

Objects are passed around by reference. They are never copied.

### Prototype

Every object is linked to a prototype object from which it can inherit properties.

When you make a new object, you can select the object that should be its prototype. The mechanism that JavaScript provides to do this is messy and complex, but it can be significantly simplified.

This adds a create method to the Object function. It creates a new object that uses an old object as its prototype.

```javascript

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {
    };
    F.prototype = o;
    return new F();
  };
}

var another_stooge = Object.create(stooge);
```
​When we make changes to an object, the object's prototype is not touched. The prototype link is used only in retrieval.

The prototype relationship is a dynamic relationship. If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype.

### Delegation

If we try to retrieve a property value from an object, and if the object lacks the property name, then JavaScript attempts to retrieve the property value from the prototype object. And if that object is lacking the property, then it goes to its prototype, and so on until the process finally bottoms out with `Object.prototype`. If the desired property exists nowhere in the prototype chain, then the result is the `undefined` value. This is called delegation

the `hasOwnProperty` method, which returns `true` if the object has a particular property. The `hasOwnProperty` method does not look at the prototype chain.

### Enumeration

The `for in` statement can loop over all of the property names in an object. The enumeration will include all of the properties including functions and prototype properties that you might not be interested in so it is necessary to filter out the values you don't want.


```javascript

var name;
for (name in another_stooge) {
  if (typeof another_stooge[name] !== 'function') {
    document.writeln(name + ': ' + another_stooge[name]);
  }
}
```

There is no guarantee on the order of the names.

### Delete

The `delete` operator can be used to remove a property from an object. It will remove a property from the object if it has one. It will not touch any of the objects in the prototype linkage.

Removing a property from an object may allow a property from the prototype linkage to shine through:

### Global Abatement

One way to minimize the use of global variables is to create a single global variable for your application:

```javascript
var MYAPP = {

}
```

By reducing your global footprint to a single name, you significantly reduce the chance of bad interactions with other applications, widgets, or libraries.

## Functions
Functions in JavaScript are objects. Objects are collections of name/value pairs having a hidden link to a prototype object.

Objects produced from object literals are linked to `Object.prototype` . Function objects are linked to `Function.prototype` (which is itself linked to `Object.prototype`). Every function is also created with two additional hidden properties: the function's context and the code that implements the function's behavior. Every function object is also created with a `prototype` property. Its value is an object with a constructor property whose value is the function. This is distinct from the hidden link to `Function.prototype`.

### Closure

Closures are an extension of the concept of scope. With closures, functions have access to variables that were available in the scope where the function was created.

Inner functions get access to the parameters and variables of the functions they are defined within. A more interesting case is when the inner function has a longer lifetime than its outer function. Avoid creating functions within a loop. It can be wasteful computationally,and it can cause confusion.

### Invocation

There are four patterns of invocation in JavaScript: the method invocation pattern, the function invocation pattern, the constructor invocation pattern, and the apply invocation pattern.

In addition to the declared parameters, every function receives two additional parameters: `this` and `arguments`.

The `this` parameter is very important in object oriented programming, and its value is determined by the invocation pattern.

#### Method Invocation Pattern

When a function is stored as a property of an object, we call it a method. When a method is invoked, this is bound to that object.

```javascript
var myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};
myObject.increment();

console.log(myObject.value);
//Output is 1
myObject.increment(2);
console.log(myObject.value);
//Output is 3
```

#### Function Invocation Pattern

When a function is not the property of an object, then it is invoked as a function.

When a function is invoked with this pattern, `this` is bound to the global object. Due to this the inner function's `this` variable points to global object rathar than to its outer function's object. Following is the workaround to solve this issue.

```javascript
var myobj = {
  getName: function(){
    var that = this;
    console.log(this);
    // prints myobj
    function inner(){
      console.log(this);
      // prints global object
      console.log(that);
      // prints myobj
    }
    inner();
  }
}
```

#### Constructor Invocation Pattern

When a function is invoked using new keyword then it returns an object. The returned object contains properties of function's prototype object, but when you query for hasOwnProperty() then it returns false for those proprty defind in the function's prototype.

Functions that are intended to be used with the `new` prefix are called constructors . By convention, they are kept in variables with a capitalized name.

```javascript
var Func = function(){

}

Func.prototype // is an empty object, prints Func {}

var obj = new Func();

obj.prototype // Func.prototype is not linked to obj.prototype, prints undefined

obj // prints Func {}
Func.prototype.name = "Sumit";
obj.name // prints "Sumit"
obj.hasOwnProperty(name) // retuns false
```

#### Apply Invocation Pattern

The `apply` method lets us construct an array of arguments to use to invoke a function. It also lets us choose the value of `this`. The apply method takes two parameters. The first is the value that should be bound to `this`. The second is an array of parameters.

Suppose you already have a function defined in an object which uses object's property (using this) and input params to calculate something. Now, you want to reuse that method but you don't want to use that object's property but your object's property and also want to use your own input parameters.

Call `apply` function on that method by passing your own object which will be used as `this` and pass an array of arguments if required.

```javascript
var obj = {
  val: 5,
  add: function(input){
    return this.val + input;
  }
}
console.log(obj.add(10));
// prints 15
var anotherObject = {
  val: 10 
}
console.log(obj.add.apply(anotherObject, [20]));
// prints 30
```

### Argument

A bonus parameter that is available to functions when they are invoked is the arguments array.

Because of a design error, arguments is not really an `array`. It is an array-like object. arguments has a length property, but it lacks all of the array methods.

### Return

A function always returns a value. If the return value is not specified, then `undefined` is returned. If the function was invoked with the `new` prefix and the return value is not an object, then `this` (the new object) is returned instead.

### Exceptions

A `try` statement has a single catch block that will catch all exceptions. If your handling depends on the type of the exception, then the exception handler will have to inspect the name to determine the type of the exception.

```javascript
var try_it = function ( ) {
  try {
    add("seven");
  }
  catch (e) {
    document.writeln(e.name + ': ' + e.message);
  }
}
```

### Augmenting Types

Augmenting means adding some usefull functions at top level e.g. adding getIntonly to `Number` or adding trim to `String`

JavaScript allows the basic types of the language to be augmented. In JavaScript you can add methods to any object. Adding a method to `Object.prototype` makes that method available to all objects.

```javascript
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};
```
​
By augmenting the basic types, we can make significant improvements to the expressiveness of the language. Because of the dynamic nature of JavaScript's prototypal inheritance, all values are immediately endowed with the new methods, even values that were created before the methods were created.

The prototypes of the basic types are public structures, so care must be taken when mixing libraries. One defensive technique is to add a method only if the method is known to be missing:

```javascript
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};
```

### Scope

Unfortunately, JavaScript does not have block scope even though its block syntax suggests that it does. For example a variable declared inside 'if' control is accessible after the 'if' block.

```javascript
var num = 5;
if(num === 5){
  var val = 10;
}
console.log(val);
// prints 10
```
​
In many modern languages, it is recommended that variables be declared as late as possible, at the first point of use. That turns out to be bad advice for JavaScript because it lacks block scope. So instead, it is best to declare all of the variables used in a function at the top of the function body.

### Module

We can use functions and closure to make modules. A module is a function or object that presents an interface but that hides its state and implementation. By using functions to produce modules, we can almost completely eliminate our use of global variables, thereby mitigating one of JavaScript's worst features.

Use of the module pattern can eliminate the use of global variables. It promotes information hiding and other good design practices. It is very effective in encapsulating applications and other singletons.

```javascript
var Employee = (function(){
  var salary = 2000;
  return {
    getSalary: function(){
      return salary;
    }
  }
}());

console.log(Employee.getSalary()); // prints 2000
```

### Cascade

Some methods do not have a return value. For example, it is typical for methods that set or change the state of an object to return nothing. If we have those methods return this instead of undefined , we can enable cascades. In a cascade, we can call many methods on the same object in sequence in a single statement.

```javascript
getElement('myBoxDiv').move(350, 150).width(100).height(100).color('red');
```
### Curry

Currying allows us to produce a new function by combining a function and an argument.

The curry method works by creating a closure that holds that original function and the arguments to curry. It returns a function that, when invoked, returns the result of calling that original function, passing it all of the arguments from the invocation of curry and the current invocation.


```javascript
Function.method('curry', function() {
  var slice = Array.prototype.slice;
  var args = slice.apply(arguments);
  var that = this;
  return function(){
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});
```
​
### Simple example

```javascript
function add(num){
  return num + 2;
}
console.log(add(8));
// prints 10

function add2(num){
  num = num + 10;
  return add.apply(null, [num]);
}
console.log(add2(20));
// prints 32
```
​
### Memoization

Functions can use objects to remember the results of previous operations, making it possible to avoid unnecessary work. This optimization is called memoization

### Inheritance

In simple words, an object inherits from that class which is pointed by prototype

```javascript
var Parent = function(){
  this.method1 = function(){
    console.log("Parent");
  }
}

var Child = function(){
  this.method2 = function(){
    console.log("Child");
  }
}

Child.prototype = new Parent();
var c = new Child();
c.method1();
// prints Parent
c.method2();
// prints Child  
console.log(c instanceof Parent);
// prints true
console.log(c instanceof Child);
// prints true
```
​
The following code defines/creates a function object. This object has a prototype property which further has a hidden property called constructor. This constructor property points to the function itself which defines the object.

```javascript
var Child = function(){
  this.name = "Chanky";
}
console.log(Child.prototype);
// prints an empty object as Object{}, although it has a constructor property

console.log(Child.prototype.constructor);
// prints the function i.e. function(){this.name="Chanky"}
```
​
Every function gets a prototype object because the language does not provide a way of determining which functions are intended to be used as constructors. The constructor property is not useful. It is the prototype object that is important.

JavaScript, being a loosely typed language, never casts. The lineage of an object is irrelevant. What matters about an object is what it can do, not what it is descended from.

JavaScript is a prototypal language, which means that objects inherit directly from other objects.


```javascript
Function.method('inherits', function (Parent) {
  this.prototype = new Parent( );
  return this;
});
```
### Object Specifiers

It sometimes happens that a constructor is given a very large number of parameters. This can be troublesome because it can be very difficult to remember the order of the arguments. In such cases, it can be much friendlier if we write the constructor to accept a single object specifier instead. That object contains the specification of the object to be constructed.