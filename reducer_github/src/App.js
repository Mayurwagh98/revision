// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {Counter} from "./Components/Counter"
// import {Input} from "./Components/Inputbox"
// import {Todo} from "./Components/Todo"
// import {Cart} from "./Components/Cart"
// import {Counter2} from "./Components/Counter2"
// import {useState} from "react"
import {Reducer} from "./Components/reducer"

function App() {

  // let [showcounter, setShowcounter] = useState(true)

  // let toggle = () =>{

  //   setShowcounter((prev) =>!prev)
  // }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Input /> */}
      {/* <Todo /> */}
      {/* <Cart text = {itemArr}/> */}
      {/* {showcounter ? null : <Counter2 />} */}
      {/* {showcounter && <Counter2 />}
      <br />
      <button onClick={toggle} >Toggle</button> */}

      <Reducer />
    </div>
  );
}

export default App;
