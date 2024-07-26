import { createContext, useReducer, useState } from "react";
import { initialOwnerState, ownerReducer } from "../reducers/ownerReducer";
import { useOwnerContext } from "./useOwnerContext";
//import { useOwnerContext } from "./OwnerContext";

const OwnerContext = createContext();

export function OwnerProvider({ children }) {
  const [ownerPromiseState, dispatch] = useReducer(ownerReducer, initialOwnerState);
  const [ownerState, setOwnerState] = useState(initialOwnerState);

  const handleCreateOwner = async (owner) => {
    dispatch({ type: "CREATE_OWNER", owner });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleOwnerLogin = async (credentials) => {
    dispatch({ type: "OWNER_LOGIN", credentials });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleGetOwnerJwt = async () => {
    dispatch({ type: "GET_OWNER_JWT" });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleEditOwner = async (owner) => {
    dispatch({ type: "EDIT_OWNER", owner });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleDeleteOwner = async (password) => {
    dispatch({ type: "DELETE_OWNER", password });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const contextValue = {
    ownerPromiseState,
    ownerState,
    handleOwnerLogin,
    handleGetOwnerJwt,
    handleCreateOwner,
    handleEditOwner,
    handleDeleteOwner
  };

  return (
    <OwnerContext.Provider value={contextValue}>
      {children}
    </OwnerContext.Provider>
  );
}

export default OwnerContext;
