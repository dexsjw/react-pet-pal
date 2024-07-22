// ProductContext.js
import { createContext, useReducer } from "react";
import { initialState, ownerReducer } from "../reducers/ownerReducer";

const OwnerContext = createContext();

export function OwnerProvider({ children }) {
  const [state, dispatch] = useReducer(ownerReducer, initialState);

  const reducer = (state, action) => {
    switch (action.type) {
      case "setOwner":
        return action.payload;
      default:
        return state;
    }
  };

  // ? To setState with this, use the following:
  // context.dispatchOwner({
  //   type: "setOwner",
  //   payload: { ...context.owner, ownerName: "Jack" }, // change ownerName for example
  // })

  const [owner, dispatchOwner] = useReducer(reducer, {
    ownerId: "abc123", // string
    areaLocation: "Bishan", // string (e.g. Bishan, Changi, Orchard),
    ownerName: "Ben", // string
    petPicture: ["https://images.dog.ceo/breeds/schipperke/n02104365_67.jpg", "https://images.dog.ceo/breeds/hound-english/n02089973_1623.jpg"], // url string array (generate random url string -> own photo if have time)
    petName: "Winnie", // string
    petBreed: "I don't know", // string
    petGender: "Male", // Male / Female,
    petAge: 8, // number
    petSize: "Medium", // small / medium / large
    petDescription: "Good Boye", // string
    petIsNeutered: false, // boolean
  });

  const context = { owner, dispatchOwner };

  return (
    <OwnerContext.Provider value={context}>{children}</OwnerContext.Provider>
  );
}
export default OwnerContext;
