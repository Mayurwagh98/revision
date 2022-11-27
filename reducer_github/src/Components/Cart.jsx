import React from "react";

let Cart = () =>{

    let itemArr = [
        {name: "noodles", price: 20, quantity:0},
        {name: "magiee", price: 30, quantity:0},
        {name: "rice", price: 40, quantity:0}
      ]

    let increment = () =>{

        for(let x of itemArr){

            if(x == itemArr.name && x != 0){

                x.quantity--
            }
        }

    }

    return(

        <>
        </>
    )
}

export {Cart}