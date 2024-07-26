import { deleteOwnerProfile, editOwnerProfile, getOwnerProfile, login, register } from "../service/PetPalService";

export const initialOwnerState = {
  email: "",
  password: "",
  //isLoggedIn: false,
  ownerId: "",
  ownerName: "",
  ownerMatches: [],
  areaLocation: "",
  petPicture: [], 
  petName: "",
  petBreed: "",
  petGender: "",
  petAge: 0,
  petSize: "",
  petDescription: "",
  petIsNeutered: false
};

export const ownerReducer = async (state, action) => {
  switch (action.type) {
    case "CREATE_OWNER": {
      try {
        const payload = await register(action.owner);
        return payload.owner;
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }

    case "OWNER_LOGIN": {
      try {
        const payload = await login(action.credentials);
        return payload.owner;
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }

    case "GET_OWNER_JWT": {
      try {
        const payload = await getOwnerProfile();
        return payload.owner;
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }
    
    case "EDIT_OWNER": {
      try {
        const payload = await editOwnerProfile(action.owner);
        return payload.owner;
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }
    
    case "DELETE_OWNER": {
      try {
        return await deleteOwnerProfile(action.password);
      } catch (error) {
        console.error("Error", error);
      }
      break;
    }
    
    default:
      return state;
  }
};
