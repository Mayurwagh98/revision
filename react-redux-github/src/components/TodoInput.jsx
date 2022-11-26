import React, {useState} from "react";

let TodoInput = ({handleAddTodo}) =>{ //destructing props handleAddTodo

    let [text, setText] = useState("")

    let handleAdd = () =>{

        if(text){

            handleAddTodo(text)

            setText("") //once the todo is added it will make input field empty
        }
    }

    return(
        <>

            <input type="text" placeholder="enter todo" value={text} onChange={(event) => setText(event.target.value)} />

            <button onClick={handleAdd}>Add</button>

        </>
    )
}

export {TodoInput}
