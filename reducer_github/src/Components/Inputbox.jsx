import React from "react";
import { useState } from "react";

let Input = () =>{

    let [data, setData] = useState("")

    let inputEvent = (event) =>{

        setData(event.target.value)

        
    }

    let clearInput = () =>{

        setData("")
    }

    return(

        <>
        <h1>{data}</h1>

        <input type="text" placeholder="enter text" value={data} onChange={inputEvent} />

        <button onClick={clearInput} >Clear</button>
        </>
    )
}

export {Input}