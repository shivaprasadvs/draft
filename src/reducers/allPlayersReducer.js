export function allPlayersReducer(state = {allPlayers:[], batsmen:[], bowlers:[], allRounders:[], wicketKeepers: []}, action) {
    switch (action.type) {
        case "ALL_PLAYERS": 
            return {allPlayers: action.payload,
            batsmen: action.payload.filter(player => player.specialityRole === 'Batsman'),
            bowlers: action.payload.filter(player => player.specialityRole === 'Bowler'),
            allRounders: action.payload.filter(player => player.specialityRole === 'All Rounder'),
            wicketKeepers: action.payload.filter(player => player.specialityRole === 'Wicket-Keeper')
            }


    default:
    return state;

    }
    
}

export default allPlayersReducer;