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
