import React from "react";
import { useState } from "react";

let Todo = () =>{

    let [item, setItem] = useState([])
    let [data, setData] = useState("")

    let inputItem = (event) =>{

        setData(event.target.value)
    }

    let addTodo = () =>{

        setItem([...item, data])

        
    }

    return(

        <>
        
        <input type="text" placeholder="enter item" value={data} onChange={inputItem} />
        <button onClick={addTodo} >Add</button>
        {
            item.map((ele, index) =>{

                return <h2 key={index}>{ele}</h2>
            })
        }
        </>
    )
}

export {Todo}