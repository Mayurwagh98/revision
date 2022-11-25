
let Reducer = (state, action) =>{

    switch(action.type){

        case "Add":
            return {
                ...state,
                // count: state.count + 1
                count: state.count + action.payload
            }
        case "Sub":
            return {
                // ...state,
                // count: state.count - 1
                count: state.count - action.payload
            }

        default:
            return state
    }

}

export {Reducer}