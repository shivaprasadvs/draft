export function filteredPlayersReducer(state = {number:0, data:[]}, action) {
    switch (action.type) {
        case "FILTERED_PLAYERS": 
            return action.payload
    default:
    return state;

    }
    
}

export default filteredPlayersReducer;