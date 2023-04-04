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

- What is SSR and CSR?
SSR: Server-Side Rendering - rendering a client-side or universal app to HTML on the server.
CSR: Client-Side Rendering - rendering an app in a browser, generally using the DOM.

- What are sideeffects
1. When we talk about side effects in the context of React.js, we are referring to anything that is outside the scope of React
2. So calling any native Web APIs will be considered as a side effect as it’s not within the React universe
3. Making a HTTPS request to an external API is another example of a side effect and the list goes on…
4. We usually manage React side effects inside the useEffect hook (part of the React Hooks API)

- Pure functions
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
- Pure Component
1. Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values
2. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered.
- Features of React Pure Components
1. Prevents re-rendering of Component if props or state is the same
2. Takes care of “shouldComponentUpdate” implicitly
3. State and Props are Shallow Compared
4. Pure Components are more performant in certain cases

- What are useRefs? What are some usecases?
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
