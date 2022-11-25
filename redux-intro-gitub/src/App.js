import { useState } from 'react';
import './App.css';
import {Store} from "./redux/store"
// import {Reducer} from "./redux/reducer"
import {handleAdd, handleSub} from "./redux/action"

function App() {
  //hack- for temp purpose we are using hook to increment and decerment
  let [update, setUpdate] = useState(0)

  let {dispatch, subscribe} = Store // calling dispatch and subscribe from store object
  let {count} = Store.getState()

  subscribe(() =>{
    // console.log(count)

    //telling react to re-render the component, because this function will only trigger
    //if the state inside redux store has changed.

    setUpdate((prev) => prev + 1)
  })

  return (
    <div className="App">
      
      <h1>{count}</h1>
      {/* {console.log(count)} */}
      {/* <button onClick={() => dispatch({type: Add})} >+</button> */}
      {/* <button onClick={() => dispatch({type: Sub})} >-</button> */}

      {/* <button onClick={() => dispatch({type: Add, payload:1})} >+</button> passing payload as 1 to increment the counter by 1 */}
      {/* <button onClick={() => dispatch({type: Sub, payload:2})} >-</button>passing payload as 2 to decrement the counter by 2 */}

      <button onClick={() => dispatch(handleAdd(1))} >+</button>
      <button onClick={() => dispatch(handleSub(2))} >-</button>
    </div>
  );
}

export default App;
