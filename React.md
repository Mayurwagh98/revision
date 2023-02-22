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

## what is reducer
1. In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. 
2. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state.

## What are actions
 Actions are JavaScript object that contains information. Actions are the only source of information for the store.
 ```
 const Actions = {
 type: '',
 payload: ''
}
```
