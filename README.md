### What is JavaScript?
JavaScript is a cross-platform, object-oriented scripting language. JavaScript is a small, lightweight language; it is not useful as a standalone language, but is designed for easy embedding in other products and applications, such as web browsers

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
- The values produced by `typeof` are `number`, `string`, `boolean`, `undefined`, `function`, and `object`. If the operand is an `array` or `null` , then the result is `object, which is wrong.
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
