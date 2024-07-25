import { createOwnerAuth, deleteOwnerAuth, getOwnerAuth, updateOwnerAuth } from "../service/PetPalService";

export const initialOwnerAuth = {
    ownerId: "",
    email: "",
    password: "",
    isLoggedIn: false
}

export const ownerAuthReducer = (state, action) => {
    switch (action.type) {
        case "GET_OWNER_AUTH": {
            return getOwnerAuth(action.ownerId);
        }

        case "CREATE_OWNER_AUTH": {
            return createOwnerAuth(action.ownerAuth);
        }

        case "UPDATE_OWNER_AUTH": {
            return updateOwnerAuth(action.ownerId, action.ownerAuth);
        }
        
        case "DELETE_OWNER_AUTH": {
            return deleteOwnerAuth(action.ownerId);
        }

        default: {
            return state;
        }
    }
}