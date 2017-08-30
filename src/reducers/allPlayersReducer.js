export function allPlayersReducer(state = {allPlayers:[], batsmen:[], bowlers:[], allRounders:[], wicketKeepers: []}, action) {
    switch (action.type) {
        case "ALL_PLAYERS": 
            return action.payload
    default:
    return state;

    }
    
}

export default allPlayersReducer;