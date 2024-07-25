import { createContext, useReducer, useState } from "react";
import { initialOwnerAuth, ownerAuthReducer } from "../reducers/ownerAuthReducer";
import { getOwnerAuthList } from "../service/PetPalService";

const OwnerAuthContext = createContext();

export function OwnerAuthProvider({children}) {
    const [ownerAuthState, dispatch] = useReducer(ownerAuthReducer, initialOwnerAuth);
    const [ownerAuthList, setOwnerAuthList] = useState([]);

    const handleGetOwnerAuthList = () => {
        setOwnerAuthList(getOwnerAuthList);
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
        ownerAuthList,
        ownerAuthState,
        handleGetOwnerAuthList,
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