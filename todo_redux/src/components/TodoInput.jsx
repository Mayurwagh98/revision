import React, {useState} from "react";

let TodoInput = ({handleAddTodo}) =>{

    let [text, setText] = useState("")

    let handleAdd = () =>{

        if(text){

            handleAddTodo(text)

            setText("")
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