export const initialOwnerAuth = {
    ownerId: "",
    email: "",
    password: "",
    isLoggedIn: false
}

export const ownerAuthReducer = (state, action) => {
    switch (action.type) {
        case "GET_OWNER_AUTHS": {
            return;
        }

        case "GET_OWNER_AUTH": {
            return;
        }

        case "CREATE_OWNER_AUTH": {
            return;
        }

        case "UPDATE_OWNER_AUTH": {
            return;
        }
        
        case "DELETE_OWNER_AUTH": {
            return;
        }

        default: {
            return state;
        }
    }
}