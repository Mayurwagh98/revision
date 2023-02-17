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
