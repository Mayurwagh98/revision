import React from "react"
import { useState } from "react"

let Counter = () =>{

    let [count, setCount] = useState(0)

    let increment = () =>{

        setCount(count + 1)

    }

    let decrement = () =>{

        if(count == 0){

            return
        }
        else{
            setCount(count - 1)
        }
         
        
    }

    return (

        <>

         <h1>{count}</h1>

         <button onClick={increment} >+</button>  

         <button onClick={decrement} >-</button> 

        </>
    )

}

export {Counter}