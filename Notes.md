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
