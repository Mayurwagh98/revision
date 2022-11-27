import React, {useState} from "react"

let Counter2 = () =>{

    let [count, setCount] = useState(0)

    let increment = () =>{

        setCount(count + 1)
    }

    return(

        <>

        <h1>{count}</h1>
        <button onClick={increment} >Add</button>
        
        </>
    )
}

export {Counter2}