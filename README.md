### What is JavaScript?
JavaScript is a cross-platform, object-oriented scripting language. JavaScript is a small, lightweight language; it is not useful as a standalone language, but is designed for easy embedding in other products and applications, such as web browsers Developed by Netscape Communications Corp. and Sun Microsystems.
But the language can be--and is--used with other kinds of objects in other environments. For example, Adobe Acrobat Forms uses JavaScript as its underlying scripting language to glue together objects that are unique to the forms generated by Adobe Acrobat.


- JavaScript is a loosely typed language, so JavaScript compilers are unable to detect type errors.
- It is recommended that `/* */` comments be avoided and `//` comments be used instead.
- It is not permitted to name a variable or parameter with a reserved word.
- JavaScript has a single number type. Internally, it is represented as 64-bit floating point, the same as Java’s double. `1` and `1.0` are the same value.
- The value `NaN` is a number value that is the result of an operation that cannot produce a normal result. `NaN` is not equal to any value, including itself. You can detect `NaN` with the `isNaN(number)` function.
- All characters in JavaScript are 16 bits wide.
- Strings are immutable. Two strings containing exactly the same characters in the same order are considered to be the same string. So:

	`'c' + 'a' + 't' === "cat" is true`

- Unlike many other languages, blocks in JavaScript do not create a new scope, so variables should be defined at the top of the function, not in blocks.
- Here are the six falsy values: `false`, `null`, `undefined`, The empty string `“”` The number `0` The number `NaN`. All other values are truthy, including `true`, the string `"false"`, and all objects.
- The `for...in` enumerates the property names (or keys) of an object. On each iteration, another property name string from the object is assigned to the variable . It is usually necessary to test object. `hasOwnProperty(variable)` to determine whether the property name is truly a member of the object or was found instead on the prototype chain.
- If a `return` expression is not specified, then the return value will be `undefined`.
- The values produced by `typeof` are `number`, `string`, `boolean`, `undefined`, `function`, and `object`. If the operand is an `array` or `null` , then the result is `object`, which is wrong.
- The simple types of JavaScript are numbers, strings, booleans (true and false), null, and undefined .
- In JavaScript, arrays are objects, functions are objects, regular expressions are objects, and, of course, objects are objects.
- A property name can be any string, including the empty string. A property value can be any JavaScript value except for `undefined`.
- Attempting to retrieve values from `undefined` will throw a `TypeError` exception. This can be guarded against with the `&&` operator.
- Objects are passed around by reference. They are never copied.
- The enumeration will include all of the properties — including functions and prototype properties.
- Delete removes a property from the object if it has one. It will not touch any of the objects in the prototype linkage. Removing a property from an object may allow a property from the prototype linkage to shine through.
- Functions in JavaScript are objects.
- Every function object is also created with a prototype property. Its value is an object with a constructor property whose value is the function.

```javascript
	var func = function(){}
	console.log(func.prototype.constructor);
	> function(){} // this means that func.prototype.constructor points to the function itself 
```

- **Closure:** Functions can be defined inside of other functions. An inner function has access to its parameters and variables.
- In addition to the declared parameters, every function receives two additional parameters: `this` and `arguments` . `this` value is determined by the invocation pattern. There are four patterns of invocation. The binding of `this` to the object happens at invocation time. This very late binding makes functions that use this highly reusable.
- **Method Invocation:** When a function is stored as a property of an object, this is bound to that object.
- **Function Invocation:** When a function is invoked as a function `this` is bound to the global object. This was a mistake in the design of the language.
- **Constructor Invocation:** If a function is invoked with the `new` prefix, then a new object will be created with a hidden link to the value of the function’s prototype member, and `this` will be bound to that new object. The new prefix also changes the behavior of the return statement. 
- **Apply Invocation:** It also lets us choose the value of `this`. The apply method takes two parameters. The first is the value that should be bound to `this`. The second is an `array` of parameters.
- The throw statement interrupts execution of the function. It should be given an exception object containing a name property that identifies the type of the exception, and a descriptive message property. You can also add other properties.
- - **Set:** The Set object lets you store unique values of any type, whether primitive values or object references.Set objects are collections of values, you can iterate its elements in insertion order. A value in the Set may only occur once; it is unique in the Set's collection. `new Set([iterable]);` if an iterable object is passed, all of its elements will be added to the new Set.
- **Map:** The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value. A Map object can iterate its elements in insertion order - a for..of loop will return an array of [key, value] for each iteration. `new Map([iterable])` Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays). Each key-value pair will be added to the new Map.
- **Key equality:** Key equality is based on the "same-value" algorithm: `NaN` is considered the same as `NaN` (even though NaN !== NaN) and all other values are considered equal according to the semantics of the `===` operator.
- **Objects and maps compared:** Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys. Because of this, Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better.
- An Object has a prototype, so there are default keys in the map. However, this can be bypassed using `map = Object.create(null)`.
- The keys of an Object are Strings, where they can be any value for a `Map`.
- You can get the size of a Map easily while you have to manually keep track of size for an object.
- Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.
- Use objects when there is logic that operates on individual elements.
	
```javascript

var myMap = new Map();

for (var [key, value] of myMap) {
  alert(key + " = " + value);
}
```
- A `try` statement has a single `catch` block that will catch all exceptions.
- By augmenting `Function.prototype`, we can make a method available to all functions.
- By augmenting the basic types, we can make significant improvements to the expressiveness of the language. Because of the dynamic nature of JavaScript’s prototypal inheritance, all values are immediately endowed with the new methods, even values that were created before the methods were created.
- Add a method only if the method is known to be missing.
- The good news about scope is that inner functions get access to the parameters and variables of the functions they are defined within (with the exception of `this` and `arguments`).
- It is important to understand that the inner function has access to the actual variables of the outer functions and not copies.
- Avoid creating functions within a loop. It can be wasteful computationally,and it can cause confusion.
- A module is a `function` or `object` that presents an interface but that hides its state and implementation.
- The general pattern of a module is a function that defines private variables and functions; creates privileged functions which, through closure, will have access to the private variables and functions; and that returns the privileged functions or stores them in an accessible place.
- It is typical for methods that set or change the state of an object to return nothing. If we have those methods return this instead of undefined, we can enable cascades.
- **Currying** allows us to produce a new function by combining a function and an argument. JavaScript does not have a curry method. The curry method works by creating a closure that holds that original function and the arguments to curry. It returns a function that, when invoked, returns the result of calling that original function, passing it all of the arguments from the invocation of curry and the current invocation. It uses the Array concat method to concatenate the two arrays of arguments together.
- A controversial feature in JavaScript is prototypal inheritance. JavaScript has a class-free object system in which objects inherit properties directly from other objects.
- JavaScript includes a prototype linkage feature that allows one object to inherit the properties of another.
- Every object is linked to a prototype object from which it can inherit properties.
- When we make changes to an object, the object’s prototype is not touched. The prototype link is used only in retrieval.
- The prototype relationship is a dynamic relationship. If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype.
- When a function object is created, the Function constructor that produces the function object runs some code like this: this.prototype = {constructor: this};
- One weakness of the inheritance patterns we have seen so far is that we get no privacy.
- **Constructor:** There is no privacy; all properties are public. There is no access to super methods. Even worse, there is a serious hazard with the use of constructor functions. If you forget to include the new prefix when calling a constructor function, then this will not be bound to a new object. Sadly, this will be bound to the global object, so instead of augmenting your new object, you will be clobbering global variables.

- JSLint, a JavaScript parser that can analyze a JavaScript program and report on the bad parts that it contains.
- Inheritance is a 4 step procedure in JavaScript

```javascript
// Parent Class
// Define the Person constructor
function Person(firstName) {
  this.firstName = firstName;
}

Person.prototype.sayHello = function(){
  alert("Hello, I'm " + this.firstName);
};

// Child Class
// Define the Student constructor
function Student(firstName, subject) {
	//STEP 1 : Call parent’s constructor passing this
	Person.call(this, firstName);
  	this.subject = subject;
	
	// STEP 2 : Set child class’s prototype to a new Object of parent’s type
	Student.prototype = Object.create(Person.prototype);

	// STEP 3 : Set the "constructor" property to refer to Child class
	Student.prototype.constructor = Student;

	// STEP 4 : Replace the "sayHello" method
	Student.prototype.sayHello = function(){
	  alert("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
	};
};
```

#### What’s relationship between JavaScript and ECMAScript?

ECMAScript is yet another name for JavaScript (other names include LiveScript). The current JavaScript that you see supported in browsers is ECMAScript revision 5.



#### Function

The Function constructor creates a new Function object. In JavaScript every function is actually a `Function object`.

##### Function.prototype.apply()

Use apply where you want to use an Array of arguments as comma separated arguments.

```javascript
function m(a, b, c, d){

}

var array = [a, b, c, d];
```

to call m() there are two options

1. `m(array[0], array[1], array[2], array[3], array[4]);`
2. `m.apply(null, array)`

##### Function.prototype.call()

The `call()` method calls a function with a given `this` value and arguments provided individually.

##### Function.prototype.bind()

The `bind()` method creates a new function that, when called, has its `this`  keyword set to the provided value, with a given sequence of arguments **preceding ** any provided when the new function is called.

This is similar to `apply()` and `call()`, where we call the function with given value of `this` and given `arguments`,  but the only difference is that it creates a new function with `this` permanently bonded to new function.

`bind()` is also helpful in cases where you want to create a shortcut to a function which requires a specific this value.

```javascript
var slice = Array.prototype.slice;
slice.call(arguments);
```
in the above two lines you always use `slice.call(arguments)`, following is a better way to do this. Now it is not required to add `.call` every time. The `call` will be called on  slice function.

```javascript
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind();
slice(arguments);

this.x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object

// create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81
```

#### Object
##### Object.preventExtensions() 

The `Object.preventExtensions()` method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

##### Object.seal()

The `Object.seal()` method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

##### Object.create()

The `Object.create()` method creates a new object with the specified prototype object and properties. `Object.create(proto [,propertiesObject])`

#### Array

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's size can grow or shrink at any time, JavaScript arrays are not guaranteed to be dense.
Both are Arrays
```javascript
var cars = ["Saab", "Volvo", "BMW"];
var cars = new Array("Saab", "Volvo", "BMW");
```
**Avoid new Array()**

```javascript
var points = new Array(); // Bad
var points = []; // Good 
var points = new Array(40, 100, 1, 5, 25, 10)  // Bad
var points = [40, 100, 1, 5, 25, 10]; // Good
```

The new keyword complicates your code and produces nasty side effects:

```javascript
var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
```

##### Array.prototype.slice()
The `slice()` method returns a shallow copy of a portion of an array into a new array object. `slice()` does not alter the original array, but returns a new copy that contains copies of the elements sliced from the original array. Elements of the original array are copied into the new array.

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
citrus => ["Orange", "Lemon"]

var citrus = fruits.slice(2)
citrus => [“Lemon”, “Apple’, “Mango”]

var citrus = fruits.slice(-1); returns from right (revers)
citrus => [“Mango”]
```

original array remains as it is.

##### Array.prototype.splice()
The splice() method adds or removes elements to/from an array.

`array.splice(index,howmany,item1,.....,itemX)`

**index:** Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
**howmany:** Required. The number of items to be removed. If set to 0, no items will be removed
**item1, ..., itemX:** Optional. The new item(s) to be added to the array
**Returns:** An array containing the removed elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

##### Array.prototype.map()

`arr.map(callback[, thisArg])`

The `map()` method creates a new array with the results of calling a provided function on every element in this array.

Function that produces an element of the new Array, takes three arguments:
**currentValue:** The current element being processed in the array.

**index:** The index of the current element being processed in the array.

**array:** The array map was called upon.
thisArg: Value to use as this when executing callback.

#### shift, unshift, pop and push methods

The **unshift()** method adds one or more elements to the beginning of an array and returns the new length of the array.

The **shift()** method removes the first element from an array and returns that element. This method changes the length of the array.

The **pop()** method removes the last element from an array and returns that element.

The **push()** method adds one or more elements to the end of an array and returns the new length of the array.

#### Discuss possible ways to write a function isInteger(x) that determines if x is an integer.

**Number.isInteger()**

```javascript
function isInteger(x) { return (x^0) === x; } 
function isInteger(x) { return Math.round(x) === x;}
```

Write a one-line function (less than 80 characters) that returns a `boolean` indicating whether or not a string is a palindrome.


`function isPalindrome(str) { return str.split('').reverse().join('') === str; }`

#### What will the code below output to the console and why?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a undefined? " + (typeof a === 'undefined')); // true - becuase a is not visible outside the block
console.log("b undefined? " + (typeof b === 'undefined')); // false - b is definded as global 
```

#### What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?

The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

**Some of the key benefits of strict mode include:**

- Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
- Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
- Eliminates `this` coercion. Without strict mode, a reference to a `this` value of `null` or `undefined` is automatically coerced to the global. This can cause many head fakes and pull-out-your-hair kind of bugs. In strict mode, referencing a `this` value of `null` or `undefined` throws an error.
- Disallows duplicate property names or parameter values. Strict mode throws an error when it detects a duplicate named property in an object `var object = {foo: "bar", foo: "baz"};` or a duplicate named argument for a function `function foo(val1, val2, val1){}`, thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
- Makes `eval()` safer. There are some differences in the way `eval()` behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an `eval()` statement are NOT created in the containing scope.
- Throws error on invalid usage of `delete`. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

#### Do Not Declare String, Number, and Boolean as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

```javascript
var x = new String();          // Declares x as a String object
var y = new Number();          // Declares y as a Number object
var z = new Boolean();         // Declares z as a Boolean object
var x = 123;              
var y = new Number(123);
(x === y) // is false because x is a number and y is an object.
```

#### NaN
The `NaN` property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric (e.g., an attempt to divide by zero).

While this seems straightforward enough, there are a couple of somewhat surprising characteristics of `NaN` that can result in hair-pulling bugs if one is not aware of them.

For one thing, although `NaN` means “not a number”, its type is, believe it or not, `Number`:

`console.log(typeof NaN === "number");  // logs "true"`

Additionally, `NaN` compared to anything – even itself! – is false:

`console.log(NaN === NaN);  // logs "false"`

As a result, the only way to test whether a number is equal to `NaN` is with the built-in function `isNaN()`.

Watch out for `NaN`. If you use `NaN` in a mathematical operation, the result will also be `NaN`.

```javascript
var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN
```

#### How to Recognize an Array?
The problem is that the JavaScript operator `typeof` returns `object`:

``` javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
typeof fruits; // typeof returns object
```

The `typeof` operator returns object because a JavaScript array is an `object`. To solve this problem you can create your own `isArray()` function:

```javascript
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
```
Combine two arrays
```javascript
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys);
```

Join three arrays

```javascript
    var arr1 = ["Cecilie", "Lone"];
    var arr2 = ["Emil", "Tobias", "Linus"];
    var arr3 = ["Robin", "Morgan"];
    
    var combinedArray = arr1.concat(arr2, arr3);
```
Passing an array to the `push()` method of another array pushes that entire array as a single element onto the end of the array. As a result, the statement `arr2.push(arr3);` adds arr3 in its entirety as a single element to the end of arr2.

Calling an array object’s `reverse()` method doesn’t only return the array in reverse order, it also reverses the order of the array itself (i.e., in this case, arr1).

The `reverse()` method returns a **reference** to the array itself (i.e., in this case, arr1). As a result, arr2 is simply a reference to (rather than a copy of) arr1. Therefore, when anything is done to arr2 (i.e., when we invoke arr2.push(arr3);), arr1 will be affected as well since arr1 and arr2 are simply references to the same object.

#### What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

#### Number
Numeric constants, preceded by 0x, are interpreted as hexadecimal.
The `toString()` method can output numbers as base 16 (hex), base 8 (octal), or base 2 (binary).

```javascript
var myNumber = 128;
myNumber + " Decimal,
myNumber.toString(16) + " Hexadecimal, 
myNumber.toString(8) + " Octal, 
myNumber.toString(2) + " Binary."
```

#### How to detect the operating system on the client machine?

In order to detect the operating system on the client machine, the `navigator.appVersion` string (property) should be used.

#### How do you convert numbers between different bases in JavaScript?
Use the `parseInt()` function, that takes a string as the first parameter, and the base as a second parameter. So to convert hexadecimal `3F` to decimal, use `parseInt ("3F" , 16)`
 	
#### What is negative infinity? 
It’s a number in JavaScript, derived by dividing negative number by zero.

#### List Operations
- Removes an item from a list set it to `null`  `mySelectObject.options[3] = null;`
- Truncate a list set its length to the maximum size `mySelectObject.length = 2;`
- Deletes all options in a select object `mySelectObject.length = 0;`

#### forEach

``` javascript 
var v = [5, 2, 16, 4, 3, 18, 20];
var res;

res = v.forEach(function(element, index, array) {
    console.log("element:", element); }
```

###Name the numeric constants representing max,min values 

```javascript
Number.MAX_VALUE
Number.MIN_VALUE
```

#### How to create a function using function constructor? 
The following example illustrates this
It creates a function called square with argument x and returns x multiplied by itself.

`var square = new Function ("x","return x*x");`

#### What's Prototypes for JavaScript? 

Objects have "prototypes" from which they may inherit fields and functions.

#### unescape(), escape(), encodeURI(), decodeURI()

- The deprecated `unescape()` method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. 
- The deprecated `escape()` method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.
- The `encodeURI()` method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the `UTF-8` encoding of the character.
- Use `encodeURIComponent()` when you want to encode a URL parameter. `param1 = encodeURIComponent("a=12&b=55")` Then you may create the URL you need: `url = "http://domain.com/?param1=" + param1 + "&param2=99";`
- The `decodeURI()` function decodes a Uniform Resource Identifier (URI) previously created by encodeURI

#### Local Variable vs Global Variable

The `var` keyword is used to declare a local variable or object, while omitting the var keyword creates a global variable.

#### What are windows object and navigator object in JavaScript?

Windows object is top level object in Java script. It contains several other objects such as, document, history, location, name, menu bar etc., in itself. Window object is the global object for Java script that is written at client-side. Information pertaining to the client browser and system is returned by the `navigator` object of JavaScript. Navigator object is the top level object for all users.

#### In a pop-up browser window, how do you refer to the main browser window that opened it?

Use `window.opener` to refer to the main window from pop-ups.

#### What is the difference between `==` and `===`? 

`==` checks equality only, 

`===` checks for equality as well as the type.

#### How will you get the Checkbox status whether it is checked or not?

`var status = document.getElementById('checkbox1').checked;`

#### How do you submit a form using JavaScript? 

Use `document.forms[0].submit();`


#### What is a promise?
The Promise object is used for deferred and asynchronous computations. A Promise is in one of the three states:

**pending:** initial state, not fulfilled or rejected.
**fulfilled:** successful operation
**rejected:** failed operation.

Another term describing the state is settled: the Promise is either fulfilled or rejected, but not pending.

```javascript
new Promise(executor);
new Promise(function(resolve, reject) { ... });
```

**executor:** Function object with two arguments `resolve` and `reject`. The first argument fulfills the promise, the second argument rejects it. We can call these functions, once our operation is completed.

#### WebSockets
It helps to enable `socket` connections between a web browser and a server which basically means that there is a persistent connection between the client and the server and both parties can send data to the other at any time.

Designed to be implemented in `web browsers` and `web servers`, it can also be used by any client or server application. It facilitates live content and the creation of real-time games. This becomes possible because the WebSocket standard provides a standardized way for the server to send data to the browser without any interference from the client, allowing for messages to be passed back and forth while keeping the connection open. This enables a two-way bi-directional ongoing conversation between a browser and a server.
The connections are done over TCP port 80, which is particularly useful in environments which block non-web internet connections using firewalls. WebSocket has found support in several browsers including Google Chrome, Internet Explorer, Firefox, Safari and Opera.

The WebSocket object provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

The WebSocket constructor accepts one required and one optional parameter:

```javascript
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);

WebSocket WebSocket(
  in DOMString url,
  in optional DOMString[] protocols
);
```

**close():** Closes the WebSocket connection or connection attempt, if any. If the connection is already CLOSED, this method does nothing.

**send():** Transmits data to the server over the WebSocket connection.


JavaScript is the first lambda language to go mainstream. Deep down, JavaScript has more in common with Lisp and Scheme than with Java.

### Add Method
The following code adds a function called `newMethod` in the `Function` object. Which can be used to add more functions to the `Function` object, which will be applicable to all the functions.

```javascript
Function.prototype.newMethod = function (name, func) {
  this.prototype[name] = func;
  return this;
};
```

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

### Global Abatement

One way to minimize the use of global variables is to create a single global variable for your application:

```javascript
var MYAPP = {

}
```

By reducing your global footprint to a single name, you significantly reduce the chance of bad interactions with other applications, widgets, or libraries.


### Closure
Closures are an extension of the concept of scope. With closures, functions have access to variables that were available in the scope where the function was created.

Inner functions get access to the parameters and variables of the functions they are defined within. A more interesting case is when the inner function has a longer lifetime than its outer function. Avoid creating functions within a loop. It can be wasteful computationally,and it can cause confusion.

## Invocations

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

### Memoization

Functions can use objects to remember the results of previous operations, making it possible to avoid unnecessary work. This optimization is called memoization


#### Object Specifiers
It sometimes happens that a constructor is given a very large number of parameters. This can be troublesome because it can be very difficult to remember the order of the arguments. In such cases, it can be much friendlier if we write the constructor to accept a single object specifier instead. That object contains the specification of the object to be constructed.