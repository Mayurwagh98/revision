let Add = "Add"
let Sub = "Sub"

let handleAdd = (payload) => {

    return {
        type: Add,
        payload,
    }
}

let handleSub = (payload) =>{

    return {

        type: Sub,
        payload
    }
}

export {Add, Sub, handleAdd, handleSub}