import { createContext, useReducer } from "react";
import { initialOwnerAuth, ownerAuthReducer } from "../reducers/ownerAuthReducer";

const OwnerAuthContext = createContext();

export function OwnerAuthProvider({children}) {
    const [ownerAuthState, dispatch] = useReducer(ownerAuthReducer, initialOwnerAuth);

    const handleGetOwnerAuths = () => {
        dispatch({type: "GET_OWNER_AUTHS"});
    }

    const handleGetOwnerAuth = (ownerId) => {
        dispatch({type: "GET_OWNER_AUTH", ownerId});
    }

    const handleCreateOwnerAuth = (ownerAuth) => {
        dispatch({type: "CREATE_OWNER_AUTH", ownerAuth});
    }

    const handleUpdateOwnerAuth = (ownerId, ownerAuth) => {
        dispatch({type: "UPDATE_OWNER_AUTH", ownerId, ownerAuth});
    }

    const handleDeleteOwnerAuth = (ownerId) => {
        dispatch({type: "DELETE_OWNER_AUTH", ownerId});
    }

    const contextValue = {
        ownerAuthState,
        handleGetOwnerAuths,
        handleGetOwnerAuth,
        handleCreateOwnerAuth,
        handleUpdateOwnerAuth,
        handleDeleteOwnerAuth
    }

    return (
        <OwnerAuthContext.Provider value={contextValue}>
            {children}
        </OwnerAuthContext.Provider>
    );

}

export default OwnerAuthContext;