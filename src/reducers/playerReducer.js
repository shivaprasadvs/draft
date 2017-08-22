export function playerReducer(state = {}, action) {
    switch (action.type) {
        case "NEW_PLAYER": 
            return action.payload


    default:
    return state;

    }
    
}

export default playerReducer;