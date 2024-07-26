import { createContext, useReducer, useState } from "react";
import { initialOwnerState, ownerReducer } from "../reducers/ownerReducer";

const OwnerContext = createContext();

export function OwnerProvider({ children }) {
  const [ownerPromiseState, dispatch] = useReducer(
    ownerReducer,
    initialOwnerState
  );
  const [ownerState, setOwnerState] = useState(initialOwnerState);

  const handleOwnerLogin = async (credentials) => {
    dispatch({ type: "OWNER_LOGIN", credentials });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleGetOwnerJwt = async (jwtToken) => {
    dispatch({ type: "GET_OWNER_JWT", jwtToken });
    try {
      setOwnerState(await ownerPromiseState);
      console.log(ownerState);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleCreateOwner = async (owner) => {
    dispatch({ type: "CREATE_OWNER", owner });
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

  const contextValue = {
    ownerPromiseState,
    ownerState,
    handleOwnerLogin,
    handleGetOwnerJwt,
    handleCreateOwner,
    handleEditOwner,
  };

  return (
    <OwnerContext.Provider value={contextValue}>
      {children}
    </OwnerContext.Provider>
  );
}

export default OwnerContext;
