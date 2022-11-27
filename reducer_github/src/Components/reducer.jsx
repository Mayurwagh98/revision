import React, { useReducer } from "react";

let formData = (state, action) =>{

    switch(action.type){
        case "User_fname":
            return {
                ...state,
                fullname: action.payload
            }
        case "User_lname":
            return{
                ...state,
                lastname: action.payload
            }
        case "Reset":
            // return state
            return action.payload

        default:
            return state
     }
    
}

let Reducer = () =>{

    // let [count, dispatch] = useReducer((state, action) =>{

    //     if(action.type === "Add"){

    //         // return state += 1
            
    //         let increaseBy = action.payload || 1

    //         return state + increaseBy
    //     }
    //     else if(action.type === "Sub"){

    //         // return state -= 1

    //         let decBy = action.payload || 1

    //         return state - decBy

    //     }
    // }, 0)
    
    //alternative way to make input field empty
    let initialData = {
        fullname: "",
        lastname: ""
    }
     
    let [userName, dispatch] = useReducer(formData, initialData)

    let formSubmit = (event) =>{

        event.preventDefault()

        console.log(userName);

        // dispatch({type: "Reset",  payload:{fullname: "", lastname: ""}}) // to make input field empty

        dispatch({type: "Reset", payload: initialData}) //alternative way to make input field empty
    }


    return (

        <>
        
        {/* <h1>{count}</h1> */}

        {/* <button onClick={() => dispatch({type: "Add"})} >+</button>
        <button onClick={() => dispatch({type: "Add", payload: 2})} >Add by 2</button>
        <button onClick={() => dispatch({type: "Sub"})} >-</button>
        <button onClick={() => dispatch({type: "Sub", payload:2})} >Dec by 2</button> */}

        <form onSubmit={formSubmit} >

        <label >Username</label>
        <input type="text" placeholder="enter username" value={userName.fullname} onChange={(event) => dispatch({type:"User_fname", payload:event.target.value})} />

        <label >lastname</label>
        <input type="text" placeholder="enter lastname" value={userName.lastname} onChange={(event) => dispatch({type:"User_lname", payload: event.target.value})} />

        <input type="submit"/>
        </form>
        </>
    )
}

export {Reducer}