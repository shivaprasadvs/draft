export function filteredPlayersAction(users) {
    return {
        type: "FILTERED_PLAYERS",
        payload: users
    }
}
