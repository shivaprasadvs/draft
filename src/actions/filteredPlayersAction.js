export function filterPlayers(users) {
    return {
        type: "FILTERED_PLAYERS",
        payload: users
    }
}
