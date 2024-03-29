## Babel

https://babeljs.io/docs/#:~:text=Babel%20is%20a%20toolchain%20that,Transform%20syntax

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 
Here are the main things Babel can do for you:
```
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```
## Imperative vs Declerative

https://egghead.io/blog/wtf-is-declarative-programming

- Imperative
Imperative programming your code shows exactly how to do what you want to happen.
```
const root = document.getElementById('root')
const container = document.createElement('section')
const title = document.createElement('h1')
container.id = 'new'
title.innerText = 'Welcome to Our Page!'
container.appenedChild(title)
root.appendChild(container)
```

- Declarative 
In simple terms, declarative programming is when your code shows what you want to happen.
```
<div id="root"></div>

function Title() (
    return (
        <section id="welcome">
            <h1>Welcome to Our Page</h1>
        </section>
    )
);
React.DOM.render(<Title />, documentgetElementById("root")
```
## State vs Props
| Props  | State |
| ------------- | ------------- |
| Props are read-only.  | State changes can be asynchronous.  |
| Props are immutable. | State is mutable.  |
|Props allow you to pass data from one component to other components as an argument.  |  State holds information about the components.  |
| Props can be accessed by the child component.  | State cannot be accessed by child components.  |
| Props are used to communicate between components.  | States can be used for rendering dynamic changes with the component.  |
| Props make components reusable.  | State cannot make components reusable.  |
| Props are external and controlled by whatever renders the component. | The State is internal and controlled by the React Component itself.  |

## What is SSR and CSR?
SSR: Server-Side Rendering - rendering a client-side or universal app to HTML on the server.

CSR: Client-Side Rendering - rendering an app in a browser, generally using the DOM.

## What are sideeffects
1. When we talk about side effects in the context of React.js, we are referring to anything that is outside the scope of React
2. So calling any native Web APIs will be considered as a side effect as it’s not within the React universe
3. Making a HTTPS request to an external API is another example of a side effect and the list goes on…
4. We usually manage React side effects inside the useEffect hook (part of the React Hooks API)

## Pure functions
The definition of Pure Component says that for specific input parameters, we always have a specific output. The output is solely dependent on Input parameters and no other external variable.
```
var initialValue = 10;

function addData(newValue) {
  return initialValue + newValue;
}
```
The above function takes an input parameter “newValue” and adds value from an external variable “initialValue” to it. In this case, the function is dependent on variables that are not in the scope of this function, so they introduce Impurity to the given function.
```var getInitialValue = 0;

function getValue(inputValue) {
  getInitialValue = inputValue;
  return getInitialValue;
}
```
The code specified above is another example of the impure function, where the function is modifying the global variable getInitialValue, which does not lie under the scope of this function. Modifying this variable results in the introduction of Impurity to the function, making it Impure.

Now, let’s look for the simple Pure Function:
```
function addData(firstInput, secondInput) {
  return firstInput + secondInput;
}

var getData = addData(1, 2);
```
## Pure Component
1. Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values
2. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered.
- Features of React Pure Components
1. Prevents re-rendering of Component if props or state is the same
2. Takes care of “shouldComponentUpdate” implicitly
3. State and Props are Shallow Compared
4. Pure Components are more performant in certain cases

## What are useRefs? What are some usecases?
1. The useRef Hook allows you to persist values between renders.
2. It can be used to store a mutable value that does not cause a re-render when updated.
3. It can be used to access a DOM element directly.

```
const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
```
useRef() only returns one item. It returns an Object called current.

When we initialize useRef we set the initial value: useRef(0).

It's like doing this: `const count = {current: 0}`. We can access the count by using count.current.

- What is Context API
1. The Context API helps share data between components which you can’t easily share with props, for example, complex data objects.  
2. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level. 
3. We can also share specific states with multiple components instead through props manually. In some use cases, ideal for theming, localization, authentication etc.

- What does useReducer do?
1. The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.
2. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it. While this is similar to the pattern Redux uses, there are a few differences.

## What is Redux?
```
1. Redux is a state management library for JavaScript applications. 
2. Redux is based on the concept of a single "store" that holds the entire state of the application
3. This store is a plain JavaScript object that can only be modified by dispatching "actions" to it
```

## what is reducer
1. In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. 
2. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state.
3. When an action is dispatched, it triggers a "reducer" function that takes the current state and the action as inputs, and returns a new state that reflects the changes described by the action. Reducers are pure functions that do not modify the original state, but rather return a new state object.

## What are actions
 Actions are JavaScript object that contains information. Actions are the only source of information for the store.
 An action is a plain JavaScript object that describes a change to the state of the application, such as adding a new item to a list or updating a user's profile.
 ```
 const Actions = {
 type: '',
 payload: ''
}
```
## Difference between shallow copy and deep copy.
Shallow copy: 
1. A shallow copy creates a new object or variable that references the original object's memory address, but only copies the top-level properties or values.
2. Any nested objects or arrays are not duplicated, but instead, the new object will have references to the original nested objects or arrays.
3. Therefore, changes made to the nested objects or arrays will affect both the original and the new object. Shallow copy can be achieved using spread operator or Object.assign() method.
4. In summary, a shallow copy duplicates only the top-level properties or values of an object or variable
```
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

// modifying shallow copy affects the original object
shallowCopy.b.c = 3;
console.log(original.b.c); // 3
```
Deep copy: 
1. A deep copy creates a new object or variable that duplicates all the values of the original object, including any nested objects or arrays.
2. Therefore, changes made to the nested objects or arrays will not affect the original object.
3. Deep copy can be achieved using JSON.parse() and JSON.stringify() methods.
4. deep copy duplicates all the values, including any nested objects or arrays.
```
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

// modifying deep copy does not affect the original object
deepCopy.b.c = 3;
console.log(original.b.c); // 2
```
## What is the difference between FrameWork and Library?
Framework: 
1. A framework is a software tool that provides a complete architecture or structure for building an application.
2. It often includes pre-built components, modules, and APIs that developers can use to create applications more quickly and easily.
3. Frameworks typically provide a set of rules, guidelines, and best practices for developing applications, which can make it easier for developers to write consistent, maintainable, and scalable code

Library: 
1. is a collection of reusable code that developers can use to add specific functionality to their applications. 
2. Libraries typically provide a set of functions, classes, or modules that can be imported into an application and used to perform specific tasks.
3. Libraries don't provide a complete architecture or structure for building an application, but rather offer specific functionality that can be integrated into an application as needed.

## What are callback functions?
1. a callback function is a function that is passed as an argument to another function and is executed by that function.
2. Callback functions are commonly used in asynchronous programming, where a function needs to execute some code after a long-running task has completed, or when an event occurs
```
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

function callbackFunction() {
  console.log("Callback function called!");
}

doSomething(callbackFunction); // prints "Doing something..." and "Callback function called!"
```
3. In this example, the doSomething function takes a callback parameter, which is a function that is executed when doSomething is called. The callbackFunction is defined separately and passed as an argument to doSomething. When doSomething is called, it logs "Doing something..." to the console and then executes the callback function, which logs "Callback function called!" to the console.

## What do you mean by JSX?
1. JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript code.
```
const element = <h1>Hello, World!</h1>;
```
In this example, we are using JSX to create a new h1 element with the text "Hello, World!". This code will be converted by a compiler into regular JavaScript code that creates the same element using React.createElement().
```
const element = React.createElement("h1", null, "Hello, World!");
```
## Explain the flow of redux.
1. The application state is stored in a single object called the store. The store is created by combining multiple reducers, which are pure functions that take the current state and an action as input and return a new state.
2. To update the state, an action is dispatched to the store. An action is a plain JavaScript object that has a type property and optionally other data that can be used to update the state.
3. The store calls the appropriate reducer based on the action's type property, and passes the current state and the action as input.
4. The reducer returns a new state based on the current state and the action.
5. The store updates its state with the new state returned by the reducer, and notifies all subscribers that the state has changed.
6. The subscribers, typically components in a React application, can access the new state from the store and re-render the user interface based on the new data.

## How does React work?
1. React components are defined as JavaScript functions or classes that return a piece of UI, known as a "render output". The render output can be a DOM element, another React component, or even a string of text.
2. When a component is rendered, React creates a virtual representation of the component and its render output, known as the "virtual DOM". The virtual DOM is a lightweight copy of the actual DOM, and it is used to efficiently update the UI without directly manipulating the real DOM.
3. When the application state changes or the user interacts with the UI, React updates the virtual DOM to reflect the new state or input. This process is known as "reconciliation".
4. Once the virtual DOM is updated, React performs a "diffing" algorithm to compute the minimum number of changes required to update the real DOM to match the virtual DOM. This process is known as "re-rendering".
5. Finally, React updates the real DOM with the changes computed during the diffing algorithm.

## Difference between React and Redux.
1. Purpose: React is focused on building user interfaces, while Redux is focused on managing the application state.
2. Architecture: React uses a component-based architecture, where UI components are defined as self-contained pieces of code. Redux uses a centralized architecture, where the application state is managed in a single store.
3. State Management: React manages the UI state of the application within the component itself. Redux manages the application state in the store, and components receive the state they need as props.
4. Data Flow: React follows a one-way data flow, where props are passed down from parent to child components. Redux also follows a one-way data flow, where actions are dispatched to the store, which updates the state and notifies subscribers of the change.

## What is the difference between redux and context API?

## What is Node Js?
1. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser.
2. Node.js is built on top of the Google Chrome V8 JavaScript engine and provides a runtime environment for executing JavaScript code on the server-side. 
3. This means that developers can write server-side code using JavaScript, which was traditionally used only for front-end development.

## What are Promises and its states?
Promises are a way of handling asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be resolved at some point in the future. 
1. Pending: This is the initial state of a promise. It means that the promise is neither fulfilled nor rejected.
2. Fulfilled: This state means that the promise has been successfully resolved, and the result of the operation is available. When a promise is fulfilled, it returns a value.
3. Rejected: This state means that the promise has been rejected due to some error or failure in the operation. When a promise is rejected, it returns a reason for the rejection.

## What are hooks?
allow functional components to have state and lifecycle functionality without using class components.

## What are useEffect and useRef?
useEffect: 
1. useEffect is a hook in React that allows functional components to perform side effects, such as fetching data, subscribing to events, or updating the DOM, after the component has rendered.
2. It is similar to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

useRef: 
1. useRef is a hook in React that allows functional components to create and maintain a reference to a mutable value that persists across renders. 
2. It is commonly used to get a reference to a DOM element, store a mutable value that doesn't trigger re-renders, or cache a value that needs to be persisted across renders.
3. useRef returns a mutable ref object with a current property that can be used to store and access the mutable value.
4. The `current` property can be updated without triggering a re-render of the component.
```
import React, { useRef } from 'react';

function InputComponent() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Access input value using ref
    console.log('Input value:', inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}
```
## What is the difference between useState and useEffect?
1. useState is a hook in React that allows functional components to manage local state.
2. It returns an array with two values: the current state value and a function to update the state.
```
import React, { useState } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0); // Initial state value is 0

  const increment = () => {
    setCount(count + 1); // Update count state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
useEffect: 
1. useEffect is a hook in React that allows functional components to perform side effects, such as fetching data, subscribing to events, or updating the DOM, after the component has rendered.

## Explain oops concept.
1. Objects: Objects are the fundamental building blocks of OOP in JavaScript. An object is a collection of properties, which are key-value pairs, and methods, which are functions associated with the object. 
2. Objects in JavaScript can be created using object literals, constructor functions, and the ES6+ class syntax.
```
// Object literal
let person = {
  name: "John",
  age: 30,
  sayHello: function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
  }
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
  }
}

let person = new Person("John", 30);
person.sayHello();

// ES6+ class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
  }
}

let person = new Person("John", 30);
person.sayHello();
```
Inheritance: 
1. Inheritance allows objects to inherit properties and methods from other objects. 
2. In JavaScript, you can achieve inheritance using prototypes, which are objects that are associated with other objects as their prototype.
3. This allows objects to share properties and methods among themselves.
```
// Using prototypes for inheritance
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log("My name is " + this.name);
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sayBreed = function() {
  console.log("I am a " + this.breed);
}

let dog = new Dog("Buddy", "Labrador");
dog.sayName(); // Output: My name is Buddy
dog.sayBreed(); // Output: I am a Labrador
```
Encapsulation: 
1. Encapsulation is the process of hiding the internal details of an object and exposing only what is necessary.
2. In JavaScript, encapsulation can be achieved using closures and the module pattern, which allows you to create private variables and methods that are not accessible from outside the object.
```
// Encapsulation using closures
function Counter() {
  let count = 0; // private variable

  this.increment = function() {
    count++;
  }

  this.decrement = function() {
    count--;
  }

  this.getCount = function() {
    return count;
  }
}

let counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 1
```
## Create a stopwatch having start-stop and Reset buttons
```
import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStart = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleStop = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={handleStart} disabled={isActive}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isActive}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
```
## What are controlled components
1. In React, a controlled component is a form element, such as an input, textarea, or select, whose value is controlled by React through state. 
2. In other words, the value of the form element is stored in the component's state, and any changes to the value are also handled by React.
3. o make a component controlled, you need to define a state variable to store the value of the form element, and an onChange event handler to update the state whenever the user interacts with the form element.
```
import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="input">Input:</label>
      <input type="text" id="input" value={value} onChange={handleChange} />
      <p>You typed: {value}</p>
    </div>
  );
}

export default Input;
```
## What are uncontrolled components
1. In React, an uncontrolled component is a form element, such as an input, textarea, or select, whose value is handled by the browser's DOM instead of by React through state.
2. In other words, the value of the form element is not stored in the component's state, and any changes to the value are not handled by React.
3. To access the value of an uncontrolled component, you can use a ref to reference the DOM node and read its value property.
```
import React, { useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">Input:</label>
      <input type="text" id="input" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
```
## Difference between Redux and Flux
https://medium.com/edge-coders/the-difference-between-flux-and-redux-71d31b118c1

| Flux  | Redux |
| ------------- | ------------- |
| Multiple Stores  | Single Store  |
| Store manages logic | Reducer manages logic  |
| Flux is a pattern | Redux is a library  |
| Flux has a single dispatcher and all actions have to pass through that dispatcher.  | Redux has no dispatcher entity. Instead, the store has the dispatching process baked in. |

## What is AJAX?
1. AJAX (Asynchronous JavaScript and XML) is a technique used in web development to create dynamic web applications. 
2. It enables web pages to be updated asynchronously by exchanging small amounts of data with the server, without requiring a page reload.
3. For example, you can use AJAX to fetch data from a server and update a part of a web page without refreshing the entire page. 

## Features of ES6
1. `Arrow Functions`: This is a shorthand syntax for creating functions in JavaScript, making it easier to write and read code.
2. `Classes`: ES6 introduced class syntax to JavaScript, making it easier to write object-oriented code.
3. `Template literals`: This feature allows for the easy creation of multi-line strings and the interpolation of variables in strings.
4. `Let and const`: These are new ways to declare variables in JavaScript, providing better scoping and preventing accidental reassignments.
5. `Default function parameters`: This feature allows for default values to be set for function parameters, making it easier to write robust and flexible functions.
6. `Destructuring`: This is a shorthand syntax for extracting values from objects and arrays.
7. `Spread operator`: This operator allows for the easy merging of arrays or objects, as well as the spread of values in function calls.
8. `Promises`: Promises are a new way to handle asynchronous operations in JavaScript, providing a cleaner and more intuitive syntax than traditional callback-based approaches.
9. `Modules`: ES6 introduced a new syntax for defining and importing/exporting modules in JavaScript, making it easier to organize and share code across projects.

## Difference between normal function and arrow function?
## What is `this` keyword?
1. this keyword is a special identifier that refers to the current context, or the object that "owns" the code being executed.
2. The value of this depends on how the function is called, and it can have different values in different contexts.
3. Inside a method of an object: In this case, this refers to the object that the method is called on. For example:
```
const person = {
  name: 'Alice',
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

person.greet(); // outputs: "Hello, my name is Alice."
```
4. In a constructor function: In this case, this refers to the newly created object that the constructor is called on. For example:
```
function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const alice = new Person('Alice');
alice.greet(); // outputs: "Hello, my name is Alice."
```
5. Inside a function that is not a method or a constructor: In this case, this depends on how the function is called. 
- If the function is called as a standalone function, this will refer to the global object (i.e., window in a browser or global in Node.js). 
- If the function is called as a method of an object, this will refer to the object. 
- If the function is called with call() or apply(), this will refer to the object passed as the first argument to call() or apply(). 
- If the function is called with bind(), this will be bound to the object passed as the first argument to bind(). For example:
```
function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

const person = {
  name: 'Alice'
};

greet(); // outputs: "Hello, my name is undefined."
greet.call(person); // outputs: "Hello, my name is Alice."
greet.apply(person); // outputs: "Hello, my name is Alice."
const boundGreet = greet.bind(person);
boundGreet(); // outputs: "Hello, my name is Alice."
```
## What is webpack?
1. Webpack is a popular module bundler for modern web applications.
2. It is an open-source tool that helps developers manage dependencies and assets, such as stylesheets, images, and scripts. 
3. It supports a wide range of file formats, including JavaScript, CSS, HTML, and many others.
4. Overall, Webpack is an essential tool for modern web development, helping developers to create efficient, optimized, and scalable web applications.

## Lifecycle medthods
There are three phases of a component's lifecycle: Mounting, Updating, and Unmounting. 
### Mounting Phase: 
1.  Mounting phase is the first phase of a component's lifecycle, during which the component is initialized and added to the DOM.
2.  In other words, it is the process of creating a component and rendering it on the webpage.
3.  During the Mounting phase, ReactJS executes four lifecycle methods in the following order:
- constructor(): This method is called first and is used to initialize the component's state and bind event handlers. It takes in the props as an argument and initializes the component's state with a default value.
- static getDerivedStateFromProps(): This method is called second and is used to update the component's state based on the props received from the parent component. It is a static method, which means it cannot access the component's instance or props. It takes in the props and state as arguments and returns an object that represents the new state.
- render(): This method is called third and is used to render the component's UI based on the current state and props. It returns a React element, which is a lightweight description of what should be rendered on the webpage.
- componentDidMount(): This method is called fourth and is used to perform any side effects, such as making API calls or setting up event listeners. It is called immediately after the component is mounted in the DOM.
4. Overall, the Mounting phase is the process of creating a component, initializing its state and props, and rendering it on the webpage. It is an important phase that sets the foundation for the next phase, the Updating phase, during which the component's state and props may change.

### Updating Phase:
1. Updating phase is the second phase of a component's lifecycle, during which the component is updated based on changes to its state or props.
2. In other words, it is the process of updating a component's UI based on new data.
3. During the Updating phase, ReactJS executes five lifecycle methods in the following order:
- static getDerivedStateFromProps(): This method is called first and is used to update the component's state based on changes to its props. It takes in the props and state as arguments and returns an object that represents the new state.
- shouldComponentUpdate(): This method is called second and is used to determine whether the component should be re-rendered or not. It takes in the next props and state as arguments and returns a Boolean value that indicates whether the component should update or not.
- render(): This method is called third and is used to render the component's UI based on the updated state and props.
- getSnapshotBeforeUpdate(): This method is called fourth and is used to capture information about the component's current state, such as scroll position, which can be used later in the componentDidUpdate() method. It takes in the prev props and state as arguments and returns a snapshot value that can be used later.
- componentDidUpdate(): This method is called fifth and is used to perform any side effects, such as updating the DOM or making API calls, after the component has been updated. It takes in the prev props, prev state, and snapshot value as arguments.

### Unmouting phase:


## What is router in react js?
## How to optimize the performance of the web application?
## Diff between real and virtual DOM?
