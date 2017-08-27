export function facebookLogin(user) {
    return {
        type: "FACEBOOK_LOGIN",
        payload: user
    }
}

export function googleLogin(user) {
    return {
        type: "GOOGLE_LOGIN",
        payload: user
    }
}

