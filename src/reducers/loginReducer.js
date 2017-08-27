export function loginReducer(state = {}, action) {
    switch (action.type) {
        case "FACEBOOK_LOGIN": 
            return {first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email,
                auth_service: "facebook",
                auth_id: action.payload.id,
                picture: action.payload.picture.data.url

            }

            case "GOOGLE_LOGIN": 
            return {first_name: action.payload.profileObj.givenName,
                last_name: action.payload.profileObj.familyName,
                email: action.payload.profileObj.email,
                auth_service: "google",
                auth_id: action.payload.googleId,
                picture: action.payload.profileObj.imageUrl

            }
    default:
    return state;

    }
    
}

export default loginReducer;