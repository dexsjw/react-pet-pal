import { useContext } from "react";
import OwnerContext from "./OwnerContext";

const useOwnerContext = () => {
    return useContext(OwnerContext);
};

export default useOwnerContext;


//export const useOwnerContext = () => useContext(OwnerContext);