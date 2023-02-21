# JS
## Primitive Data Types (Immutable)

string,
number,
bigint,
boolean,
undefined,
symbol,
null,

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

## Diff between `undefined` and `null`

| null  | undefined |
| ------------- | ------------- |
| 	It is an assignment value. It can be assigned to a variable which indicates that a variable does not point any object.  | It is not an assignment value. It means a variable has been declared but has not yet been assigned a value.  |
| The null value is a primitive value which represents the null, empty, or non-existent reference.  | The undefined value is a primitive value, which is used when a variable has not been assigned a value.  |
| Null indicates the absence of a value for a variable.  |  Undefined indicates the absence of the variable itself.  |
| Null is converted to zero (0) while performing primitive operations.  | Undefined is converted to NaN while performing primitive operations.  |

* `udefined == null` // true
* `undefined === null` // false

## Callback function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
```
## Higher Order Function

A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

```
// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);
```
Ref- https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

`map` - 

Example 1: Suppose we want to add 10 to every element in a array. We can use the map() method to map over every element in the array to add 10 to it.

```
const arr = [1, 2, 3, 4, 5];
const output = arr.map((num) => num += 10)
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [11, 12, 13, 14, 15]
```
In the above example, arr is an array with five elements: 1, 2, 3, 4, and 5. map is a method that we use to apply a function to each element in an array, and it returns a new array with the modified elements.

The callback function that is being passed to map uses the arrow function syntax, and it takes a single argument num. This function adds 10 to num (every element in the array) and returns the result.

Example 2: Here we have an array of users. Suppose we only want their first and last name. We can simply use the map() method to extract it from the users array.

```
const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result); // ['John Doe', 'Jane Doe', 'Jack Doe', 'Jill Doe', 'Joe Doe']
```
In the above code, users is an array of objects representing users. Each object has three properties: firstName, lastName, and age.

`filter` - 
Example 1: You can use filter() to return only the odd numbers from an array of numbers.
```
const arr = [1, 2, 3, 4, 5];
const output = arr.filter((num) => num % 2) // filter out odd numbers
console.log(arr); // [1, 2, 3, 4, 5]
console.log(output); // [1, 3, 5]
```
In the above code, arr is an array with five elements: 1, 2, 3, 4, and 5. filter is a method that is used to create a new array with elements that pass a test specified in a provided callback function.
This callback function checks if num is odd by checking if it is not divisible by 2 (num % 2). If num is not divisible by 2, the function returns true, otherwise it returns false.

When filter is called on arr, it applies this function to each element in the array, creating a new array with only the elements that returned true or passed the specified condition when passed to the function. The original arr remains unchanged and returns the result.

Example 2: You can use filter() to return only the users having age greater than 30 in an array.
```
const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

// Find the users with age greater than 30
const output = users.filter(({age}) => age > 30)
console.log(output); // [{firstName: 'Jack', lastName: 'Doe', age: 35}, {firstName: 'Jill', lastName: 'Doe', age: 40}, {firstName: 'Joe', lastName: 'Doe', age: 45}]
```
In the above code, users is an array of objects representing users. Each object has three properties: firstName, lastName, and age.

`reduce` - used it when you want to perform some operation on the elements of an array and return a single value as a result. The "single value" refers to the accumulated result of repeatedly applying a function to the elements of a sequence.

Example 1: Using reduce() to sum up all the elements in an array:

```
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)

console.log(sum); // 15
```

Example 2: Using reduce() to find the maximum value in an array:

```
let numbers = [5, 20, 100, 60, 1];
const maxValue = numbers.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue); // 100
```
Example 3: Using reduce() to merge different objects in a single object:

```
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const mergedObj = [obj1, obj2, obj3].reduce((acc, curr) => {
    return { ...acc, ...curr };
}, {});
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
```
Example 4: Using reduce() to group objects in an array. For example, grouping products in a shopping cart according to their brand name.

```
const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null) {
        productGroup[name] = [];
    }
    productGroup[name].push(product);

    return productGroup;
}, {});

console.log(products);
```
```
// OUTPUT
{
  Apple: [
    { name: 'Apple', price: 1.99, quantity: 3 },
    { name: 'Apple', price: 1.99, quantity: 3 }
  ],
  Xiomi: [ { name: 'Xiomi', price: 2.99, quantity: 2 } ],
  Samsung: [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
  Tesla: [
    { name: 'Tesla', price: 3.99, quantity: 1 },
    { name: 'Tesla', price: 4.99, quantity: 4 }
  ],
  Nokia: [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
}
```
## for loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

```
for (initialization; condition; afterthought)
  statement
```
```
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"
```
## while loop
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

```
while (condition)
  statement
```
```
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3
```
## do...while
The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

`syntax`

 ```
do
  statement
while (condition);
```
```
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```
```
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```
## Arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

## hoisting

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

1. Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
2. Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

## Scopes
https://developer.mozilla.org/en-US/docs/Glossary/Scope
- Global Scope

In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes.

In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.

- Local scope 

Local scope is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope).

- block scope

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block

The scope created with a pair of curly braces (a block).

Block scoping rules with let, const, class, or function declaration in strict mode
By contrast, identifiers declared with let, const, and class do have block scope:
```
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```
The x = 2 is limited in scope to the block in which it was defined.

The same is true of const:
```
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; does not throw SyntaxError
```
Note that the block-scoped const c = 2 does not throw a SyntaxError: Identifier 'c' has already been declared because it can be declared uniquely within the block.

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

```
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```
init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

## Strict Mode

Strict mode makes several changes to normal JavaScript semantics:

1. Eliminates some JavaScript silent errors by changing them to throw errors.
2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
3. Prohibits some syntax likely to be defined in future versions of ECMAScript.

- Invoking strict mode
Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements

- Strict mode for scripts
```
// Whole-script strict mode syntax
"use strict";
const v = "Hi! I'm a strict mode script!";
```
- Strict mode for functions
```
function myStrictFunction() {
  // Function-level strict mode syntax
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return `Hi! I'm a strict mode function! ${nested()}`;
}
function myNotStrictFunction() {
  return "I'm not strict.";
}
```
- Changes in strict mode
1. changes converting mistakes into errors (as syntax errors or at runtime)
2. changes simplifying how variable references are resolved
3. changes simplifying eval and arguments
4. changes making it easier to write "secure" JavaScript
5. changes anticipating future ECMAScript evolution.

- Converting mistakes into errors
1. Strict mode changes some previously-accepted mistakes into errors. JavaScript was designed to be easy for novice developers, and sometimes it gives operations which should be errors non-error semantics.
2. Sometimes this fixes the immediate problem, but sometimes this creates worse problems in the future. Strict mode treats these mistakes as errors so that they're discovered and promptly fixed.

- Assigning to undeclared variables
```
"use strict";
let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
mistypeVarible = 17;
```

